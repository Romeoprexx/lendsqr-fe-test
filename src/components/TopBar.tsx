import React from "react";
import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import avatar from "../assets/avatar.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/chevron-down.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const TopBar = ({
  setShowMobileNav,
  showMobileNav,
}: {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="top-navbar">
      <div className="top-navbar__wrapper">
        <Logo
          height="30px"
          width="144px"
          className="top-navbar__wrapper__logo"
        />
        <div className="top-navbar__wrapper__searchbox">
          <input type="text" placeholder="Search for anything" />
          <span className="top-navbar__wrapper__searchbox__icon">
            <SearchIcon />
          </span>
        </div>

        <div className="top-navbar__wrapper__notification">
          <span className="top-navbar__wrapper__notification__docs-link">Docs</span>
          <BellIcon className="bell" />
          <img
            src={avatar}
            style={{ height: "48px", width: "48px", borderRadius: "50%" }}
            alt=""
          />
          <span>Adedeji</span>
          <ChevronDownIcon />
        </div>
        <MenuIcon
          className="top-navbar__wrapper__menu-icon"
          onClick={() => setShowMobileNav(true)}
        />
        <div
          className="mobile-nav-shadow"
          onClick={() => setShowMobileNav(false)}
          style={{ display: showMobileNav ? "block" : "none" }}
        ></div>
      </div>
    </div>
  );
};

export default TopBar;
