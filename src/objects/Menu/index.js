import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StyledMenu from "./styles";

const Menu = () => {
  useEffect(() => {
    let show = true;

    const menuSection = document.querySelector(".menu");
    const menuToggle = menuSection.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {
      document.body.style.overflow = show ? "hidden" : "initial";

      menuSection.classList.toggle("on", show);
      show = !show;
    });
  });

  return (
    <>
      <StyledMenu>
        <div className="menu">
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link className="fas fa-info" to="Sobre">
                  Sobre
                </Link>
              </li>
              <li>
                <a
                  className="fab fa-behance"
                  href="https://www.behance.net/caracciolo"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  className="fab fa-github"
                  href="https://github.com/leandrocaracciolo"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href="https://www.linkedin.com/in/leandrocaracciolo/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <script src="./menu.js"></script>
      </StyledMenu>
    </>
  );
};

export default Menu;
