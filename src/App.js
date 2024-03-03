import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./scenes/loginPage";
import HomePage from "./scenes/homePage";
import SingleBookPage from "./scenes/singleBookPage";

const isAuthenticated = () => {
    // Check if the user is authenticated (e.g., by checking if the JWT token exists in local storage)
    const token = localStorage.getItem("token");
    return !!token; // Convert token to boolean
};

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={<LoginPage />}
                    />
                    <Route
                        path="/"
                        element={
                            isAuthenticated() ? <HomePage /> : <Navigate to="/login" replace />
                        }
                    />
                    <Route
                        path="/:bookId"
                        element={
                            isAuthenticated() ? <SingleBookPage /> : <Navigate to="/login" replace />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
