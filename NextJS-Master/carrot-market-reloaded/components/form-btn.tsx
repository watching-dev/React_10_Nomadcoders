interface IFormBtn {
  loading: boolean;
}

export default function FormBtn({ loading }: IFormBtn) {
  return (
    <button
      disabled={loading}
      className="w-full h-10 bg-gray-100 rounded-md font-semibold disabled:bg-neutral-400"
    >
      {loading ? "Loading.." : "Log in"}
    </button>
  );
}
