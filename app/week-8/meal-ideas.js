"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      setSelectedMealId(null);
      setMealDetails(null);
      return;
    }

    async function fetchMeals() {
      try {
        const cleanedIngredient = ingredient.split(",")[0].trim();
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
        setSelectedMealId(null);
        setMealDetails(null);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }

    fetchMeals();
  }, [ingredient]);

  useEffect(() => {
    if (!selectedMealId) {
      setMealDetails(null);
      return;
    }

    async function fetchMealDetails() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMealId}`
        );
        const data = await response.json();
        setMealDetails(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    }

    fetchMealDetails();
  }, [selectedMealId]);

  if (!ingredient) return null;

  function renderIngredients(meal) {
    if (!meal) return null;

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(
          <li key={i}>
            {ingredient} {measure ? `(${measure.trim()})` : ""}
          </li>
        );
      }
    }
    return <ul className="pl-4 text-sm">{ingredients}</ul>;
  }

  return (
    <div className="m-5 p-5 bg-gray-200 rounded-xl text-black">
      <h2 className="text-xl mb-4">Meal Ideas with {ingredient}</h2>

      {meals.length === 0 ? (
        <p>No meals found for this ingredient.</p>
      ) : (
        <div className="">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className=""
              onClick={() =>
                setSelectedMealId((prev) =>
                  prev === meal.idMeal ? null : meal.idMeal
                )
              }
            >
              <h3 className="">{meal.strMeal}</h3>

              {selectedMealId === meal.idMeal && (
                <div className="">{renderIngredients(mealDetails)}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
