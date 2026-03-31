import { useState } from "react";

function Navbar() {

    const [sideNav, setSideNav] = useState(false);

    return(
        <nav>

            <h1><i class="fa-solid fa-camera"></i> Image Gallery</h1>

            <ul>
                <a class="navbar-links" href="#home"><li>Home</li></a>
                <a class="navbar-links" href="#about"><li>About Us</li></a>
                <a class="navbar-links" href="#contact"><li>Contact Us</li></a>

                <div class="navbar-menu-toggle">
                    <i class="fa-solid fa-bars" onClick={() => setSideNav(true)}></i>
                </div>
            </ul>

            <div class="side-navbar" style={{ marginLeft: sideNav ? "0px" : "-60%" }}> 
                <p>
                    <i class="fa-solid fa-xmark" onClick={() => setSideNav(false)}></i>
                </p>

                <div class="side-navbar-links">

                    <p class="side-navbar-link"><a href="#home">Home</a></p>

                    <p class="side-navbar-link"><a href="#about">About Us</a></p>

                    <p class="side-navbar-link"><a href="#contact">Contact Us</a></p>

                </div>
            </div>

        </nav>
    )
}

export default Navbar