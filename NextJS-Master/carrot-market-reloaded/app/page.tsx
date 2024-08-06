import FormInput from "@/components/form-input";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-1 p-5">
        <form className="flex flex-col gap-5">
          <FormInput type="email" placeholder="email" required={true} />
          <FormInput type="text" placeholder="name" required={true} />
          <FormInput type="password" placeholder="password" required={true} />
          <button className="w-full h-10 bg-gray-100 rounded-md font-semibold">
            Log in
          </button>
        </form>
        <div className="text-red-500 font-medium">text</div>
      </div>
    </>
  );
}
