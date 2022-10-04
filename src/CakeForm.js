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
        setRating(event.target.rating);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        if (cakeName == "" || ingredients == [] || rating == 0) {
            return
        }

        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating
        }

        setCakeName("");
        setIngredients("");
        setRating("");
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
                //min={0} max={5}
                onChange={handleRatingChange}
                value={rating}
            />
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;