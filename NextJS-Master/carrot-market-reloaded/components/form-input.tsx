interface IFormInput {
  type: string;
  placeholder: string;
  required: boolean;
}

export default function FormInput({ type, placeholder, required }: IFormInput) {
  return (
    <input
      className="bg-transparent w-full h-10 rounded-md focus:outline-none ring-1"
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}
