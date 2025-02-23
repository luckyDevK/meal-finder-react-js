export default function Ingredient({ ingredientAndMeasure }) {
  return (
    <li className="w-28 md:w-36 text-sm md:text-base grow shrink-0 bg-slate-300 px-2 py-1 text-center flex items-center justify-center rounded-md hover:bg-slate-800 hover:text-slate-100 cursor-pointer transition-colors ease-in-out ">
      {ingredientAndMeasure}
    </li>
  );
}
