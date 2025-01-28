import {DrinkList} from "@/components/DrinkList";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const Drinks = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return (
      <div>
        <DrinkList data={data?.drinks} />
      </div>
    );
  } catch (error: any) {
    return <div>{error.message}.</div>;
  }
};

export default Drinks;