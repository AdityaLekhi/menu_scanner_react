import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import menuList from "./datalayer/seedData";

function createMenu(item) {
  return (
    <Menu name={item.Name} description={item.Description} image={item.Image} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {menuList.map(createMenu)}
      <Footer />
    </div>
  );
}

export default App;
