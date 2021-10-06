import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    // mantener el estado dl input
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue([e.target.value])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue){
            setCategories(categories => [inputValue, ...categories])
            setInputValue('');
        }
    }
    return (
        <>
            <h5>Search gifs for:</h5>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}