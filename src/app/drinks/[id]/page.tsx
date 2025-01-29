import React from 'react';

interface ComponentData {
  params: {id: string};
}

const SinggleDrinkPage = async ({params}: ComponentData) => {
  const {id} = params;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const drink = data.drinks[0];

    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
        <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
          <figure>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="rounded-t-lg object-cover w-full h-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{drink.strDrink}</h2>
            <p className="text-gray-600">
              <strong>Category:</strong> {drink.strCategory}
            </p>
            <p className="text-gray-600">
              <strong>Glass:</strong> {drink.strGlass}
            </p>
            <p className="mt-4">{drink.strInstructions}</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Enjoy!</button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <div className="alert alert-error shadow-lg max-w-lg">
          <div>
            <span>Error: {error.message}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default SinggleDrinkPage;
