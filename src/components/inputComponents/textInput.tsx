import React from "react";

interface Props {
  name: string;
  handleChange: any;
  placeholder: string;
  value: string;
  required: boolean;
}

const TextInput: React.FunctionComponent<Props> = ({
  name,
  handleChange,
  placeholder,
  value,
  required,
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
      />
    </React.Fragment>
  );
};

export default TextInput;
