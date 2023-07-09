import { useEffect, useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDerty, setDerty] = useState(false);
  const valid = useValidation(value, validations);
  const [textError, setTextError] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    setDerty(true);
  };

  useEffect(() => {
    if (isDerty) {
      if (valid.isEmpty) return setTextError("Заполните поле");
      if (valid.maxLengthError) return setTextError("Превышено число символов");
      if (valid.minLengthError) return setTextError("Недостаточно символов");
      if (valid.emailError) return setTextError("Неверный email");
      if (valid.phoneError) return setTextError("Неверный телефон");
      setTextError("");
    }
  }, [valid, isDerty, value]);

  return {
    value,
    onChange,
    onBlur,
    setValue,
    textError,
  };
};
