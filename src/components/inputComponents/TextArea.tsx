import React from "react";

interface Props {
  name: string;
  handleChange: any;
  placeholder: string;
  value: string;
  required: boolean;
}

const TextArea: React.FunctionComponent<Props> = ({
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
      <textarea
        name={name}
        onChange={handleInput}
        placeholder={placeholder}
        value={value}
        required={required}
      ></textarea>
    </React.Fragment>
  );
};

export default TextArea;
