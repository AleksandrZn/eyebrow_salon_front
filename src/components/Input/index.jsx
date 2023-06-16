import React from "react";

const Input = ({
  placeholder,
  value,
  onBlur,
  onChange,
  validationError,
  component,
}) => {
  return (
    <div>
      {validationError}
      {component || (
        <input
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
