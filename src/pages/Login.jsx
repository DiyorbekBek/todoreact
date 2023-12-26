import { Navigate } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center gap-3">
      <h1 className="font-josefin my-4 text-center text-3xl">
        Welcome To Todo List
      </h1>
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
      <div className="fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] rounded-xl border border-slate-200 p-7">
        <form className="flex flex-col gap-5">
          <label>
            <span className="mb-1 block">Email:</span>
            <input
              type="text"
              placeholder="Email.."
              className="input input-bordered input-primary input-sm w-full max-w-xs md:input-md"
            />
          </label>
          <label>
            <span className="mb-1 block">Password:</span>
            <input
              type="text"
              placeholder="Password..."
              className="input input-ghost input-primary input-sm w-full max-w-xs md:input-md"
            />
          </label>
          <div className="flex flex-col gap-2">
            <button className="btn btn-success btn-sm md:btn-md  hover:bg-blue-400 hover:text-zinc-950">
              Login
              <i className="fa-solid fa-right-to-bracket"></i>
            </button>
            <button className="btn btn-info btn-sm md:btn-md hover:bg-blue-900 hover:text-zinc-950">
              Google
            </button>
            <a className="btn btn-warning btn-sm md:btn-md" href="./signup">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
