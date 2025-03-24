import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const NavBar = () => {
  const navigate = useNavigate();
  const onHandleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/login");
    } catch (err) {
      console.error(err, "error");
    }
  };
  const user = useSelector((store) => store.user.userDetail);
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩‍💻 DevTinder
        </Link>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          Welcome {user?.firstName} {user?.lastName}
        </div>

        <div className="dropdown dropdown-end mx-5 flex">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMU8xN7Eomz1Bh06wEOhEyvHi06UGtAakVA&s"
              />{" "}
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">
                Profile <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <Link to="/premium">Premium</Link>
            </li>
            <li>
              <a onClick={onHandleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
