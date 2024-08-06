interface IFormInput {
  type: string;
  placeholder: string;
  required: boolean;
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  name,
}: IFormInput) {
  return (
    <input
      name={name}
      className="bg-transparent w-full h-10 rounded-md focus:outline-none ring-1"
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}
