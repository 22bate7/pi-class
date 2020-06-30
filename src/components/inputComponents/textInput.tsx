import React from "react";

interface Props {
  name: string;
  handleChange: any;
  placeholder: string;
  value: string;
  required: boolean;
  disabled: boolean;
  className: string;
}

const TextInput: React.FunctionComponent<Props> = ({
  name,
  handleChange,
  placeholder,
  value,
  required,
  disabled,
  className,
}) => {
  const handleInput = (e: { target: { value: any } }) => {
    handleChange(e);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        name={name}
        onChange={handleInput}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        className={className}
      />
    </React.Fragment>
  );
};

export default TextInput;
