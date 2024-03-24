import { Button, Nav, NavItem } from "reactstrap";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Sidebar = () => {
  const { user, isAuthenticated } = useKindeAuth();
  const { login, logout } = useKindeAuth();
  const handleAuth = (title) => {
    if (isAuthenticated) logout();
    else {
      login();
    }
  };

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          <NavItem key={0} className="sidenav-bg">
            <Link
              to={"/starter"}
              className={
                location.pathname === "/starter"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className="bi bi-speedometer2"></i>
              <span className="ms-3 d-inline-block">Dashboard</span>
            </Link>
          </NavItem>
          <NavItem key={1} className="sidenav-bg">
            <Link
              to={"/table"}
              className={
                location.pathname === "/table"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className="bi bi-layout-split"></i>
              <span className="ms-3 d-inline-block">User</span>
            </Link>
          </NavItem>
          <NavItem key={2} className="sidenav-bg">
            <div
              onClick={(e) => {
                e.preventDefault();
                handleAuth();
              }}
              style={{ cursor: "pointer" }}
              className="nav-link text-secondary py-3"
            >
              <i className="bi bi-person"></i>
              <span className="ms-3 d-inline-block">
                {isAuthenticated ? "Logout" : "Login"}
              </span>
            </div>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
