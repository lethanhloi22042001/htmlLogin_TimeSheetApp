import React, { ReactNode } from "react";

interface InputsProps {
  label: string;
  type: string;
  placeholder: string;
  errors: Record<string, any>;  
  register: any; // đăng kí
  value: string; // Nhận giá trị
  defaultValue: string; // giá trị chính
}

const InPut: React.FC<InputsProps> = ({
  label,
  type,
  placeholder,
  errors,
  register,
  value,
  defaultValue,
}) => {
  const isEverythingGood = !errors[label] && value !== "";

  return (
    <>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control`}
        id={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(label, {
          required: `Vui lòng nhập vào ${label}`,
          maxLength: {
            value: label === "password" || label === "email" ? 30 : null,
            message:
              label === "password" || label === "email"
                ? `${label} không được dài quá 25 ký tự`
                : null,
          },
        })}
      />
      <span style={{ color: "red" }}>
        {errors[label] && errors[label].message}
        {errors[label] &&
          errors[label].message &&
          isEverythingGood &&
          "Everything looks good"}
      </span>
    </>
  );
};

export default InPut;
