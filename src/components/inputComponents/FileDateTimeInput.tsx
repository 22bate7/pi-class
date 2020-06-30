import React from "react";

interface Props {
  name: string;
  handleChange: any;
  type: string;
  value: string;
  required: boolean;
  className: string;
}

const FileDateTimeInput: React.FunctionComponent<Props> = ({
  name,
  handleChange,
  value,
  type,
  required,
  className,
}) => {
  const handleInput = (e: { target: { value: any } }) => {
    handleChange(e);
  };

  return (
    <React.Fragment>
      <input
        type={type}
        name={name}
        onChange={handleInput}
        value={value}
        required={required}
        className={className}
      />
    </React.Fragment>
  );
};

export default FileDateTimeInput;
