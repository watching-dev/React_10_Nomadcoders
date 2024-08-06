import FormErr from "@/components/\bfrom-err";
import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function Home() {
  async function handleForm(data: FormData) {
    "use server";
    console.log("---");
    console.log(data.get("email"), data.get("name"), data.get("password"));
  }
  return (
    <>
      <div className="flex flex-col gap-1 p-5">
        <form action={handleForm} className="flex flex-col gap-5">
          <FormInput
            name="email"
            type="email"
            placeholder="email"
            required={true}
          />
          <FormInput
            name="name"
            type="text"
            placeholder="name"
            required={true}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="password"
            required={true}
          />
          <FormBtn loading={false} />
          <FormErr errors={["wrong1, wrong2"]} />
        </form>
      </div>
    </>
  );
}
