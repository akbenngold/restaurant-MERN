import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {console.log(user)}
          <label htmlFor="my-drawer-4" className="drawer-button">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-green">
              {user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL}
                />
              ) : (
                <FaUser size="2rem" />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Orders</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
