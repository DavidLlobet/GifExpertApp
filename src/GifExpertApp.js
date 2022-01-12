import { useState } from "react";
import { AddCategory } from "./components/AddCategory/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Fly"]);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category, id) => {
          return <li key={id}>{category}</li>;
        })}
      </ul>
    </>
  );
};

export default GifExpertApp;
