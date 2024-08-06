interface IFormErr {
  errors: string[];
}

export default function FormErr({ errors }: IFormErr) {
  return (
    <>
      {errors.map((error, index) => (
        <div key={index} className="text-red-500 font-medium">
          {error}
        </div>
      ))}
    </>
  );
}
