import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-400 shadow-2xl">
      <h1 className="text-2xl">PropertyPro</h1>
      <form className="flex items-center text-sm">
        <input type="text" className="mr-2 border-2 rounded-md outline-none px-1 w-52" />
        <button className="border-2 rounded-md px-1">Search</button>
      </form>
      <ul className="flex items-center gap-4 text-base">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline">User</li>
      </ul>
    </div>
  );
};

export default Header;
