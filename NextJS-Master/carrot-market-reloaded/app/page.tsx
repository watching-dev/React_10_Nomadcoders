export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none has-[:invalid]:ring-red-100 has-[:invalid]:ring">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow ring-offset-blue-600 placeholder:text-red-600 placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="text"
          required
          placeholder="Search"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email
        </span>
        <button className=" text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium md:px-10 bg-black">
          Search
        </button>
      </div>
    </main>
  );
}
