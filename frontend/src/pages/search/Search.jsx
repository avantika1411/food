import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Food categories
    const categories = [
        "Salad",
        "Rolls",
        "Desserts",
        "Sandwich",
        "Cake",
        "Pure Veg",
        "Pasta",
        "Noodles"
    ];

    // Food list with only names
    const food_list = [
        { name: "Greek salad" },
        { name: "Veg salad" },
        { name: "Clover Salad" },
        { name: "Chicken Salad" },
        { name: "Lasagna Rolls" },
        { name: "Peri Peri Rolls" },
        { name: "Chicken Rolls" },
        { name: "Veg Rolls" },
        { name: "Ripple Ice Cream" },
        { name: "Fruit Ice Cream" },
        { name: "Jar Ice Cream" },
        { name: "Vanilla Ice Cream" },
        { name: "Chicken Sandwich" },
        { name: "Vegan Sandwich" },
        { name: "Grilled Sandwich" },
        { name: "Bread Sandwich" },
        { name: "Cup Cake" },
        { name: "Vegan Cake" },
        { name: "Butterscotch Cake" },
        { name: "Sliced Cake" },
        { name: "Garlic Mushroom" },
        { name: "Fried Cauliflower" },
        { name: "Mix Veg Pulao" },
        { name: "Rice Zucchini" },
        { name: "Cheese Pasta" },
        { name: "Tomato Pasta" },
        { name: "Creamy Pasta" },
        { name: "Chicken Pasta" },
        { name: "Butter Noodles" },
        { name: "Veg Noodles" },
        { name: "Somen Noodles" },
        { name: "Cooked Noodles" }
    ];

    // Filter food items based on the search term
    const filteredItems = food_list.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a food item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                className="search-input"
            />
            <div className="search-results">
                {searchTerm === "" ? (
                    // Display categories when searchTerm is empty
                    <ul className='list'>
                        {categories.map((category, index) => (
                            <li key={index} className="category-item">
                                {category}
                            </li>
                        ))}
                    </ul>
                ) : filteredItems.length > 0 ? (
                    // Display filtered food items
                    <ul  >
                        {filteredItems.map((food, index) => (
                            <li key={index} className="search-item">
                                {food.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    // Display "No items found" if no match
                    <p className="no-results">No items found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;



  