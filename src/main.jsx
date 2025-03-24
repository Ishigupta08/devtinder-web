import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/appStore.js";
import Profile from "./components/Profile.jsx";
import Premium from "./components/Premium.jsx";
import Feed from "./components/Feed.jsx";
import Requests from "./components/Request.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="premium" element={<Premium />} />
          <Route path="requests" element={<Requests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
