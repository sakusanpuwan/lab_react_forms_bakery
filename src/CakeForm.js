import { useState } from "react";

const CakeForm = ({onSubmit}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients,setIngredients] = useState("");
    const [rating,setRating] = useState("");

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value.split(','));
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating
        }

        // setCakeName("");
        // setIngredients("");
        // setRating(0);
        onSubmit(newCake);
    }


    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="name">Cake Name:</label>
            <input 
                type="text" 
                id="name" 
                onChange={handleCakeNameChange}
                value={cakeName}
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea 
                cols="30" 
                rows="1" 
                id="ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
            />
            <label htmlFor="rating">Rating:</label>
            <input 
                type="number" 
                id="rating" 
                min="1" max="5"
                onChange={handleRatingChange}
                value={rating}
            />
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;