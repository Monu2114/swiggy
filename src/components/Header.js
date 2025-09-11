import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Theme, userInfo } from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  console.log("Header rendered");
  const { loggedInUser } = useContext(userInfo);
  console.log(userInfo);
  const status = useOnlineStatus();
  return (
    <div className="bg-gradient-to-r from-purple-100 to-red-100  flex flex-col md:flex-row justify-evenly gap-12 md:gap-20 items-center">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-12 ">
          <li className="">Online status : {status == true ? "✅" : "❌"}</li>
          <li>{useContext(Theme)}</li>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About Us</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact Us</li>
          </Link>
          <Link to="/grocery" className="link">
            <li>Grocery</li>
          </Link>
          <li>Cart</li>
          <li>{loggedInUser}</li>
          <button
            className="login"
            onClick={() => {
              {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
