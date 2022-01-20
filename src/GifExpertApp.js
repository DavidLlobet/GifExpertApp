import { useState } from "react";
import { AddCategory } from "./components/AddCategory/AddCategory";
import { GifGrid } from "./components/GifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, id) => (
          <GifGrid key={id} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
