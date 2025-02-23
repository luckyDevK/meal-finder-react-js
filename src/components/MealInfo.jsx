import { useEffect, useState } from "react";
import foodImg from "../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";
import Ingredient from "./Ingredient";
import CloseButton from "./UI/CloseButton";

export default function MealInfo({ onCloseModal, mealsData }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (!mealsData) return;

    const loadedIngredients = [];

    for (let i = 0; i <= 20; i++) {
      const ingredient = mealsData[`strIngredient${i}`];
      const measure = mealsData[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        loadedIngredients.push(`${ingredient} - ${measure}`);
      }
    }

    setIngredients(loadedIngredients);
  }, [mealsData]);

  return (
    <div className="flex flex-col md:w-full w-80 items-center bg-slate-100 py-7 px-4 border-slate-800 ">
      <h1 className="mb-4 text-lg md:text-xl text-slate-900 font-semibold uppercase text-center">
        {mealsData.strMeal}
      </h1>
      <img
        src={mealsData.strMealThumb}
        alt={mealsData.strMeal}
        className="w-full h-56  object-cover rounded-md"
      />
      <h3 className="w-full text-center border-b-3 border-t-3 border-slate-800 mt-4 py-2 md:text-xl">
        {mealsData.strCategory}
        <span className="block">{mealsData.strArea}</span>
      </h3>
      <p className="my-4 text-center border-b-3 border-slate-800 pb-4">
        {mealsData.strInstructions}
      </p>

      <h3 className="text-base">Ingredients</h3>
      <ul className="w-full flex  flex-wrap gap-2   mt-2">
        {ingredients.map((ingredient) => (
          <Ingredient key={ingredient} ingredientAndMeasure={ingredient} />
        ))}
      </ul>
      <CloseButton onClick={onCloseModal} />
    </div>
  );
}
