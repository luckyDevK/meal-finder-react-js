import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Input from "./components/Input";
import MealAvailables from "./components/MealAvailables";
import Modal from "./components/UI/Modal";
import MealInfo from "./components/MealInfo";
import LoadingIndicator from "./components/UI/LoadingIndicator";
import { getRandomMeal, searchMeal } from "./http";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currIdMeal, setcurrIdMeal] = useState(null);

  const {
    data: meals,
    isPending: isLoadingMeals,
    isError: isErrorMeals,
    refetch,
  } = useQuery({
    queryKey: ["meals"],
    queryFn: getRandomMeal,
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  const {
    data: searchedMeal,
    isPending: isLoadingSearch,
    error: searchError,
  } = useQuery({
    queryKey: ["meals", { search: searchTerm }],
    queryFn: ({ signal }) => searchMeal({ searchTerm, signal }),
    staleTime: 10000,
    enabled: searchTerm !== "",
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (searchError) {
      toast.error(`Something went wrong: ${searchError.message}`);
    }
  }, [searchError]);

  const currentMealsData = (searchTerm ? searchedMeal : meals) || [];

  let content;

  if (isLoadingMeals || isLoadingSearch) {
    content = <LoadingIndicator />;
  } else if (currentMealsData.length === 0) {
    content = <p>There is no searched meal</p>;
  }

  if (currentMealsData.length > 0) {
    content = (
      <MealAvailables
        onOpenModal={handleOpenModal}
        mealsData={currentMealsData}
      />
    );
  }

  function handleSubmit(inputSearch) {
    setSearchTerm(inputSearch);
  }

  function handleOpenModal(currentIdMeal) {
    setcurrIdMeal(currentIdMeal);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setcurrIdMeal(null);
    setModalIsOpen(false);
  }

  function handleRandomMeal() {
    setSearchTerm("");
    refetch();
  }

  useEffect(() => {
    console.log(searchedMeal);
  }, [searchedMeal]);

  const currOpenedMeal = currentMealsData.find(
    (meal) => meal.idMeal === currIdMeal
  );

  return (
    <>
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen}>
          <MealInfo
            onCloseModal={handleCloseModal}
            mealsData={currOpenedMeal}
          />
        </Modal>
      )}
      <div className="flex flex-col items-center justify-center mt-6 px-6 pb-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Meal Finder</h1>
        <Input onRandomMeal={handleRandomMeal} onSubmit={handleSubmit} />
        <Toaster />
        {content}
      </div>
    </>
  );
}

export default App;
