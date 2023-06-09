import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ data, currentType }) => {
  return (
    <div className="section-center">
      {data.map(
        (item) =>
          (item.category === currentType || currentType === "all") && (
            <MenuItem key={item.id} {...item} />
          )
      )}
    </div>
  );
};

export default Menu;
