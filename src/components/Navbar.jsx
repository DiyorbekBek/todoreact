import { GlobalContext } from "../context/GlobalContex";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function Navbar() {
  const { user, dispatch } = useContext(GlobalContext);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("You Out :)");
      })
      .catch((error) => {
        toast.error(errorMessage);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar">
        <div className="max-container flex flex-col md:flex-row  md:justify-between">
          <div>
            <a className="btn btn-ghost text-xl font-bold">TodolisT</a>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
            >
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Default"
                  value="default"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Retro"
                  value="retro"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Cyberpunk"
                  value="cyberpunk"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Valentine"
                  value="valentine"
                />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Aqua"
                  value="aqua"
                />
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex md:flex-row md:items-center md:gap-3">
            <p className="mb-3">Welcome, {user.displayName}</p>
            <button
              onClick={logout}
              className="btn btn-sm border-blue-400 bg-slate-900 text-white  md:btn-md hover:bg-purple-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
