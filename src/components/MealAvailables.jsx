import foodImg from "../assets/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";

function Meal({ onOpenModal, mealThumb, mealTitle, mealId }) {
  return (
    <>
      <div
        className="relative aspect-square border-slate-800 border-6 rounded-tr-md rounded-tl-md group text-center"
        onClick={() => onOpenModal(mealId)}
      >
        <img
          src={mealThumb}
          alt="food img"
          className="w-full h-64 md:h-full object-cover object-center"
        />
        <h1 className="absolute inset-0 bg-[var(--desc-meal-color)] opacity-0 transition-opacity ease-in group-hover:opacity-60 capitalize font-semibold text-2xl text-white z-20 flex items-center  justify-center">
          {mealTitle}
        </h1>
      </div>
    </>
  );
}

export default function MealAvailables({ onOpenModal, mealsData }) {
  return (
    <>
      <div className="w-4/5 grid grid-cols-(--meals-cols) mt-8 gap-5 place-items-center place-content-center max-w-[60rem] cursor-pointer">
        {mealsData.map((meal) => (
          <Meal
            key={meal.idMeal}
            mealThumb={meal.strMealThumb}
            mealTitle={meal.strMeal}
            onOpenModal={onOpenModal}
            mealId={meal.idMeal}
          />
        ))}
      </div>
    </>
  );
}
