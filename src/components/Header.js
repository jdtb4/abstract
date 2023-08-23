import Image from "next/image";
const Header = () => {
  return (
    <div className="flex bg-black p-5 px-24 justify-between">
      <div className="flex items-center gap-4">
        <a className="flex items-center gap-2">
          <Image
            className="fill-white"
            src="/img/abstract_logo.png"
            width={40}
            height={40}
            alt="Logo Abstract"
          />
          <p className="text-white text-2xl font-semibold">Abstract</p>
        </a>
        <p className="text-white text-2xl border-l-2 pl-4">Help Center</p>
      </div>
      <div className="flex gap-4">
        <button className="text-white text-2xl p-2 px-6 border rounded-lg">
          Submit a request
        </button>
        <button className="bg-indigo-600 text-white text-2xl p-2 px-6 rounded-lg hover:bg-white hover:text-black">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
