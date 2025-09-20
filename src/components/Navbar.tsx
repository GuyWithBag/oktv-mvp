import LogoCName from "../assets/svgs/logo_c_name.svg";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <img src={LogoCName} className="h-10" />
      <a
        href="https://forms.gle/aURM8uXKgkP8Xz2W6"
        target="_blank"
        className="bg-primary rounded-full px-4 py-2 text-white font-bold  hover:cursor-pointer hover:scale-120 transition"
      >
        Request A Song By Pre-ubcribing
      </a>
    </header>
  );
};

export default Navbar;
