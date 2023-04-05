import React from "react";
import { FiCamera } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="left-nav">
          <div className="logo loop">
            <span>
              <FiTarget />
            </span>
          </div>
          <div className="logo logo-name">
            <h3>Instaclone</h3>
          </div>
        </div>
        <div className="right-nav">
          <span onClick={() => navigate("/createpost")}>
            <FiCamera />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
