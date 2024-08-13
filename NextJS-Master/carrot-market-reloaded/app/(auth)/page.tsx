"use client";

import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { handleForm } from "./action";
import FormErr from "@/components/from-err";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <>
      <div className="flex flex-col gap-1 p-5">
        <form action={action} className="flex flex-col gap-5">
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
          <FormErr errors={state?.error.fieldErrors.email ?? []} />
          <FormErr errors={state?.error.fieldErrors.name ?? []} />
          <FormErr errors={state?.error.fieldErrors.password ?? []} />
        </form>
      </div>
    </>
  );
}
