import InputFieldProps from "./InputField.interface";

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
  icon,
}) => {
  return (
    <div>
      <label
        className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="tw-relative tw-flex tw-items-center">
        {icon && <span className="tw-absolute tw-left-2">{icon}</span>}
        <input
          className={`tw-w-full tw-p-2 tw-border ${
            error ? "tw-border-red-500" : "tw-border-gray-300"
          } tw-rounded-md tw-outline-none ${
            icon ? "tw-pl-8" : ""
          } focus-within:tw-ring-secondary-600 focus-within:tw-ring-2 focus-within:tw-border-transparent`}
          type={type}
          id={id}
          placeholder={placeholder}
          {...register}
        />
      </div>
      <div className="tw-min-h-[20px]">
        {error && <p className="tw-text-red-500 tw-text-xs">{error.message}</p>}
      </div>
    </div>
  );
};

export default InputField;
