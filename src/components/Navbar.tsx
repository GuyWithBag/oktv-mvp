import LogoCName from "../assets/svgs/logo_c_name.svg";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <img src={LogoCName} className="h-10" />
    </header>
  );
};

export default Navbar;
