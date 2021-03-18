import React from 'react';
import Categories from '../Components/Categories';
import SingleCard from '../Components/SingleCard';
import portfoliodetails from '../Components/PortfolioDetails';
import { useState } from 'react';
import "./Portfolio.css";

const allCategories = ['All', ...new Set(portfoliodetails.map(item => item.category))];

function Portfolio() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfoliodetails);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfoliodetails)
            return;
        }
        const filteredData  = portfoliodetails.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="portfolio" id="portfolio">
            <br/>
            <br/>
        <h1 className="text-center  text-light">Project Portfolio</h1>
        <div className=" portfolio-single-card">
                <Categories filter={filter} categories={categories} />
              <br/>
                <SingleCard Items={menuItems}/>
                </div>
            </div>
     
    )
}

export default Portfolio;
