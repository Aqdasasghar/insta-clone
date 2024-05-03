"use client";
import React, { useState } from "react";
import Link from "next/link";
import { logIn } from "../config/fireBase";
import { useRouter } from "next/navigation";
import "./login.css";

import { FaFacebook } from "react-icons/fa";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = async (e) => {
    e.preventDefault();
    try {
      if (email.trim() === "" || password.trim() === "") {
        alert("Please fill all the fields");
        return;
      }
      await logIn({ email, password });
      router.push("/mainDashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="imageContainer">
          <img
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
            alt="Instagram"
            className="image"
          />
        </div>
        <div className="formContainer">
          <h2>Welcome back to Instagram</h2>

          <form>
            <input
              type="text"
              placeholder="Username or Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={loginFunc} className="btn">
              Log in
            </button>
            <div>
              Login with <FaFacebook />
            </div>
          </form>
          <p>Forgot password?</p>
          <div className="separator">
            <span>OR</span>
          </div>
          <button className="createAccount">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "600",
              }}
              href="/signup"
            >
              Create New Account
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
