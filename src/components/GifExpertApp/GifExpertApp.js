import { useState } from "react";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "Fly"]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {categories.map((category, id) => {
          return <li key={id}>{category}</li>;
        })}
      </ul>
    </>
  );
};

export default GifExpertApp;
