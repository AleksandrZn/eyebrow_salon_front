import { useEffect, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "min":
          if (value !== undefined)
            value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
          break;
        case "max":
          if (value !== undefined)
            value.length > validations[validation]
              ? setMaxLengthError(true)
              : setMaxLengthError(false);
          break;
        case "isEmail":
          String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case "isPhone":
          if (value !== undefined) setPhoneError(!isValidPhoneNumber(value));
          break;
        case "isEmpty":
          if (value !== undefined) value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);
  return { isEmpty, minLengthError, maxLengthError, emailError, phoneError };
};
