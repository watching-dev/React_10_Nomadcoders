"use client";

import { useFormStatus } from "react-dom";

interface IFormBtn {
  loading: boolean;
}

export default function FormBtn({ loading }: IFormBtn) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full h-10 bg-gray-100 rounded-md font-semibold disabled:bg-neutral-400"
    >
      {pending ? "Loading.." : "Log in"}
    </button>
  );
}
