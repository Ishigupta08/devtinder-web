import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      const fetchProfile = async () => {
        try {
          const response = await axios.get(BASE_URL + "/profile/detail", {
            withCredentials: true,
          });
          dispatch(addUser(response.data.data));
        } catch (err) {
          console.error("Error fetching profile:", err);
          navigate("/");
        }
      };
      fetchProfile();
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <h2 className="card-title">
              {user?.firstName} {user?.lastName}
            </h2>
          </h2>
          <p>{user.emailId}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
