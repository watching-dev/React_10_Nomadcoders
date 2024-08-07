"use server";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => email.includes("@zod.com"), "No zod.com"),
  name: z.string().min(5),
  password: z.string().min(10),
});

export async function handleForm(prev: any, data: FormData) {
  console.log("---");
  console.log(data.get("email"), data.get("name"), data.get("password"));
  const formData = {
    email: data.get("email"),
    name: data.get("name"),
    password: data.get("password"),
  };
  const result = formSchema.safeParse(formData);

  console.log("----");
  console.log(result.error?.flatten());

  if (!result.success) {
    return {
      error: result.error.flatten(),
    };
  }
  //   const pw = data.get("password");
  //   const err = [pw === "12345" ? "ok! 12345" : "wrong password"];
  //   return {
  //     error: err,
  //   };
}
