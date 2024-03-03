import React, { useState } from "react";
import "./login.css"; // Import your CSS file with styles
import {useNavigate} from "react-router-dom";
const Form = () => {
    const [pageType, setPageType] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1111/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                window.location.href = "/";
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            // Handle network error
            console.error("Network error:", error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1111/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
                credentials: 'include'
            });
            if (response.ok) {
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <div className="login-page">
            <div className="header">
                <h1>Login or Register</h1>
            </div>
            <div className="login-form">
                {pageType === "login" && (
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                        <p className="span">
                            Don't have an account?{" "}
                            <span onClick={() => setPageType("register")}>Register here</span>
                            .
                        </p>
                    </form>
                )}
                {pageType === "register" && (
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Register</button>
                        <p className="span">
                            Already have an account?{" "}
                            <span onClick={() => setPageType("login")}>Login here</span>.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Form;
