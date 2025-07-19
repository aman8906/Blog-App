import React from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Blogs from "../src/pages/Blogs";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/pages/Dashboard";
import Creators from "./pages/Creators";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import UpdateBlog from "./dashboard/UpdateBlog";
import Detail from "./pages/Detail";

function App() {
  const location = useLocation();
  const { blogs, isAuthenticated, loading } = useAuth();

  const authPages = ["/login", "/register"];

  const hideNavbarFooter = authPages.includes(location.pathname) || location.pathname.includes("/dashboard");

  if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
        />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog/:id" element={<Detail />} />
            <Route path="/blog/update/:id" element={<UpdateBlog />} />
          </>
        ) : (
          <>
            {/* If user tries to access protected route without login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>

      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
