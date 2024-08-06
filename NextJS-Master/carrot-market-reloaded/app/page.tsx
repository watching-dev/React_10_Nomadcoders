import FormErr from "@/components/\bfrom-err";
import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function Home() {
  async function handleForm() {
    "use server";
    console.log("---");
  }
  return (
    <>
      <div className="flex flex-col gap-1 p-5">
        <form action={handleForm} className="flex flex-col gap-5">
          <FormInput type="email" placeholder="email" required={true} />
          <FormInput type="text" placeholder="name" required={true} />
          <FormInput type="password" placeholder="password" required={true} />
          <FormBtn loading={false} />
          <FormErr errors={["wrong1, wrong2"]} />
        </form>
      </div>
    </>
  );
}
