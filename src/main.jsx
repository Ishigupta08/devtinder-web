import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/appStore.js";
import Profile from "./components/Profile.jsx";
import Premium from "./components/Premium.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="premium" element={<Premium />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
