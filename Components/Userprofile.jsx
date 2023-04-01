import React, { useState } from "react";
import { useAuth } from "../src/AuthProvider";
import { Navigate } from "react-router-dom";

const Userprofile = () => {
  const { curruser, logout } = useAuth();
  const [err, setErr] = useState();
  const handlelogout = async () => {
    try {
      setErr("");
      await logout();
    } catch (err) {
      setErr(err);
    }
  };

  return curruser ? (
    <main className="flex flex-col min-h-screen bg-black items-center justify-center text-center border-8 border-yellow-500 ">
      <img
        src="https://skillicons.dev/icons?i=firebase"
        alt="firebase"
        className=" w-auto h-auto"
      />
      <article>
        <h1 className="text-3xl text-yellow-700 rounded-lg m-3 p-1 border-2 border-orange-800">
          Email:{" " + curruser.email}
        </h1>

        <button
          className=" rounded-xl text-lg text-slate-800 bg-orange-600 hover:bg-orange-400 text-center p-2 transition-all  w-80 shadow-lg shadow-slate-900"
          onClick={handlelogout}
        >
          LogOut
        </button>
      </article>

      {err ? (
        <h1 className=" bg-red-300 rounded-lg border-red-600 border-2 p-2 text-xl text-red-900">
          {err}
        </h1>
      ) : null}
    </main>
  ) : (
    <Navigate to="/" />
  );
};

export default Userprofile;
