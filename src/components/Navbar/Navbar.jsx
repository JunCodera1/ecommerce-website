// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return <div>
    {/* upper Navbar */}
    <div>
        <div>
            <div>
                <a href="#">
                    <img src={Logo} alt="" />
                </a>
            </div>
        </div>
    </div>
    {/* lower Navbar */}
    <div></div>
  </div>;
};

export default Navbar