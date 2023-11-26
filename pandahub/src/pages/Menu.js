import React from "react";
import MenuItem from "../components/Menuitem";
import "../styles/Menu.css";

function MenuList() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuItem.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuList;