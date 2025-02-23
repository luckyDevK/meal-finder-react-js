async function fetchMeals(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    return result.meals;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getRandomMeal() {
  return fetchMeals("https://www.themealdb.com/api/json/v1/1/random.php");
}

export async function searchMeal({ searchTerm, signal }) {
  return fetchMeals(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
    {
      signal,
    }
  );
}
