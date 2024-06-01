import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
const Header = (props) => {
  const {setIsEdit} = props;
  const user = useSelector((state) =>state.user)
  const handleEdit = () => {
    setIsEdit(true);
  }
  return (
    <>
      <header style={{ backgroundColor: `${user.theme}`, backgroundImage: `linear-gradient(180deg, ${user.theme} 2%, ${user.theme}, 65%, #434343 100%)` }}>
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>Edit</div>
          <img
            src={user.url}
            alt=""
            className="info-avt"
          />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
