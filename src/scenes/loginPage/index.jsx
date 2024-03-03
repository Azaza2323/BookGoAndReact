import React from "react";
import "./login.css";
import Form from "./Form";

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="header">
                <h1>BOOKSTORE</h1>
            </div>
            <div className="login-form">
                <h2>Welcome to Our App</h2>
              <Form/>
            </div>
        </div>
    );
};

export default LoginPage;
