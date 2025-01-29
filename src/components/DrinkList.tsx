import Link from "next/link";
import React from 'react'

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string | null;
}

interface DrinksResponse {
  drinks: Drink[];
}

export const DrinkList = ({data}: DrinksResponse) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold text-center mt-8">Drinks</h1>
      <p className="text-lg text-center mt-2">A list of cocktail recipes.</p>
      <hr className="my-6 w-3/4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 max-w-7xl">
        {data?.map((drink: Drink) => (
          <Link
            href={`drinks/${drink.idDrink}`}
            key={drink.idDrink}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="relative">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body text-center">
              <h5 className="card-title text-sm font-semibold">{drink.strDrink}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
