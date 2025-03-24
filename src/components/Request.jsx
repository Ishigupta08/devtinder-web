import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { getRequest } from "../utils/requestSlice";
import { useSelector } from "react-redux";

const Requests = () => {
  const request = useSelector((state) => state.request.request);
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(BASE_URL + "/request/view", {
          withCredentials: true,
        });
        dispatch(getRequest(response.data));
      } catch (err) {
        console.error("Error fetching profile:", err);
        navigate("/login");
      }
    };
    fetchRequest();
  }, []);
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>
      {request.map((request) => (
        <div
          key={request._id}
          className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 mx-auto"
        >
          <div></div>
          <div className="text-left mx-4">
            <h2 className="font-bold text-xl">{request.toUserId.firstName}</h2>
            <p>{request.description}</p>
          </div>
          <div>
            <button className="btn btn-primary mx-2">Reject</button>
            <button className="btn btn-secondary mx-2">Accept</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Requests;
