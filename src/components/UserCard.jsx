import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { status } from "../utils/enum";
import { removeFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handlestatus = async (value) => {
    try {
      await axios.post(
        `${BASE_URL}/request/${value}/${user._id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(user._id));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        <p>{user.emailId}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handlestatus(status.IGNORED)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handlestatus(status.INTERESTED)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
