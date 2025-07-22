// App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router"; // 👈 import the router config

const App = () => {
  return (
    <>
    <div className ='bg-[#152026] p-0 m-0'>
      <RouterProvider router={router} />
    </div>
    </>
  );
};

export default App;
