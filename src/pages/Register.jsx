import React, { useState } from "react";

function Register() {
  const [showPassword, setShow] = useState(false);
  const [showConfirm, setConfirm] = useState(false);
  return (
    <>
      <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-200 to-red-300">
        <div className="w-full h-screen max-w-[1536px] mx-auto flex-center ">
          <form className="w-full max-w-2xl flex flex-col gap-y-5">
            <input type="text" placeholder="Enter Username" />
            <input type="email" placeholder="Enter Email" />
            <div className="">
              <input type="password" placeholder="Enter Password" />
            </div>
            <input type="password" placeholder="Confirm Password" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
