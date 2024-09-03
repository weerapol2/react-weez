import Button from "../Button";

function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 flex justify-between">
        <h1 className="text-xl font-bold text-slate-100 hover:text-sky-400">
          KSU Weerapol{" "}
        </h1>
        <div>
          <Button
            className="bg-repeat ..."
            style="background-image: url(...)"
            text="Login"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
