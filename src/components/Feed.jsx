import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";

const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feed = useSelector((state)=>state.feed.feed);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(BASE_URL + "/feed/view", {
          withCredentials: true,
        });
        dispatch(addFeed(response.data));
      } catch (err) {
        console.error("Error fetching profile:", err);
        navigate("/login");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex justify-center my-10">
      {feed.length > 0 ? <UserCard user={feed[0]} /> : <p>No user found</p>}
    </div>
  );
};

export default Feed;
