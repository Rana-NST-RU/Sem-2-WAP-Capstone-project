import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Index onNavigate={setCurrentPage} />;
      case "about":
        return <About onNavigate={setCurrentPage} />;
      case "services":
        return <Services onNavigate={setCurrentPage} />;
      case "blog":
        return <Blog onNavigate={setCurrentPage} />;
      case "login":
        return <Login onNavigate={setCurrentPage} />;
      case "signup":
        return <Signup onNavigate={setCurrentPage} />;
      default:
        return <NotFound onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo" onClick={() => setCurrentPage("home")}>PropComp</div>
          <ul className="nav-links">
            <li onClick={() => setCurrentPage("home")} className={currentPage === "home" ? "active" : ""}>Home</li>
            <li onClick={() => setCurrentPage("about")} className={currentPage === "about" ? "active" : ""}>About</li>
            <li onClick={() => setCurrentPage("services")} className={currentPage === "services" ? "active" : ""}>Services</li>
            <li onClick={() => setCurrentPage("blog")} className={currentPage === "blog" ? "active" : ""}>Blog</li>
          </ul>
          <div className="auth-buttons">
            <button className="login-btn" onClick={() => setCurrentPage("login")}>Login</button>
            <button className="signup-btn" onClick={() => setCurrentPage("signup")}>Signup</button>
          </div>
        </div>
      </nav>
      
      <main>
        {renderPage()}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => setCurrentPage("home")}>Home</li>
              <li onClick={() => setCurrentPage("about")}>About</li>
              <li onClick={() => setCurrentPage("services")}>Services</li>
              <li onClick={() => setCurrentPage("blog")}>Blog</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@propcomp.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2025 PropComp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;