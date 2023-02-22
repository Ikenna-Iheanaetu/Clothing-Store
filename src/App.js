import React from "react";
import { Routes, Route } from "react-router-dom";

// Styles
import "./styles/css/styles.css";

// Pages
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
// import Shop from "./routes/shop/shop";
import Contact from "./routes/contact/contact";
import SignIn from "./routes/SignIn/sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/Contact-Us" element={<Contact />} />
        <Route path="/Sign-In" element={<SignIn />} />
      </Route>
    </Routes>

  );
}

export default App;
