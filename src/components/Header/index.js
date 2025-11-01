import { GiHamburgerMenu } from "react-icons/gi"
import Logo from "../../images/Logo.png"
import search from "../../images/search-normal.png"
import heart from "../../images/heart.png"
import shopping from "../../images/shopping-bag.png"
import profile from "../../images/profile.png"
import lang from "../../images/ENG.png"
import arr from "../../images/arrow-left.png"

import "./index.css"

const Header = () => (
    <div>
        <div className="head-con">
            <div>
            <GiHamburgerMenu className="menu" />
            <img src={Logo} alt="logo" className="logo-img" />
            </div>
            <h1 className="heading">LOGO</h1>
            <div className="logo-list">
                <img src={search} alt="search" className="mini-logo" />
                <img src={heart} alt="heart" className="mini-logo" />
                <img src={shopping} alt="shopping" className="mini-logo" />
                <img src={profile} alt="profile" className="mini-logos" />
                <img src={lang} alt="lang" className="mini-logos-eng" />
                <img src={arr} alt="arrow" className="mini-logos-arr" />
            </div>
        </div>
        <hr className="hr-small"/>
        <ul className="nav-list">
            <li className="nav-item">SHOP</li>
            <li className="nav-item">SKILLS</li>
            <li className="nav-item mis">STORIES</li>
            <li className="nav-item mis">ABOUT</li>
            <li className="nav-item mis">CONTACTUS</li>
        </ul>
        <hr className="hr-big"/>
    </div>
)
export default Header