import ShuffleIcon from "../components/ShuffleIcon";

export default function Input({ onRandomMeal, onSubmit }) {
  function onSubmitSearchMeal(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const mealInput = formData.get("meal-input");

    if (!mealInput) return;

    onSubmit(mealInput);
  }

  return (
    <div className="flex items-center justify-center md:w-96">
      <form onSubmit={onSubmitSearchMeal} className="flex w-full">
        <input
          name="meal-input"
          type="text"
          className="rounded-tl-md w-full rounded-bl-md bg-[#D9EAFD] px-2 py-1 border-2 border-transparent outline-0 focus:border-sky-400"
        />
        <button className="group cursor-pointer bg-slate-100 p-2 rounded-tr-md rounded-br-md hover:bg-sky-400 transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-black transition-all duration-200 group-hover:stroke-white"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
      <ShuffleIcon onRandomMeal={onRandomMeal} />
    </div>
  );
}
