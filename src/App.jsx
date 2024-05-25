import React, { useState } from "react";
import Navbar from "./Navbar";
import Blogs from "./Blogs.jsx";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-full text-indigo-600">
      <Navbar isClicked={isClicked} setIsClicked={setIsClicked} />
      <Blogs />
    </div>
  );
};

export default App;
