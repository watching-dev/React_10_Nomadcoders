"use server";
export async function handleForm(prev: any, data: FormData) {
  console.log("---");
  console.log(data.get("email"), data.get("name"), data.get("password"));
  const pw = data.get("password");
  const err = [pw === "12345" ? "ok! 12345" : "wrong password"];
  return {
    error: err,
  };
}
