import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoginIn, setIsLoginIn] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (type) => {
    try {
      const url = isLoginIn
        ? BASE_URL + "/login"
        : BASE_URL + "/signup/automate";

      const payload = isLoginIn
        ? { emailId: email, password }
        : { firstName, lastName, emailId: email, password };

      const response = await axios.post(url, payload, {
        withCredentials: true,
      });

      dispatch(addUser(response.data.data));
      navigate("/profile");
      setError(response.data.message);
    } catch (err) {
      console.error(err, "error");
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-border bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{isLoginIn ? "Login" : "SignUp"}</h2>
          {error && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}
          {!isLoginIn && (
            <>
              <input
                type="text"
                placeholder="Enter First Name"
                className="input input-bordered w-full mt-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Enter Last Name"
                className="input input-bordered w-full mt-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}

          <input
            type="text"
            placeholder="Enter email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-full mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleAuth}>
              {isLoginIn ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginIn(false)}
          >
            {isLoginIn ? "New User? Signup Here" : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
