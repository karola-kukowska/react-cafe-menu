import { useState } from "react";
import Menu from "./components/Menu";
import Title from "./components/Title";
import Categories from "./components/Categories";
import data from "./data";

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [types, setTypes] = useState([
    ...new Set(["all", ...menuItems.map((item) => item.category)]),
  ]);
  const [currentType, setCurrentType] = useState("all");
  const setType = (type) => {
    setCurrentType(type);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories types={types} setType={setType} />
        <Menu data={menuItems} currentType={currentType} />
      </section>
    </main>
  );
};
export default App;
