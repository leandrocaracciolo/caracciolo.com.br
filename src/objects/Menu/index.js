import React, { useEffect, useState } from "react";
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


      function toggle() {
        let menuzin = document.querySelector(".menu")
        if (menuzin.style.display === "none") {
            menuzin.style.display = "block";
        } else {
            menuzin.style.display = "none";
        }
    }

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
              <li onClick="toggle()">
                <Link to="/">Home</Link>
              </li>
              <li onClick="toggle()">
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
