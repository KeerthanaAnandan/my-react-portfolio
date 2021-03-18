import React from 'react';
import "./Categories.css";

function Categories({filter, categories}) {
    return (
        <div className="categories-buttons text-center"  data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            {
                categories.map((cat, i)=>{
                    return <button type="button" className="btn-port text-center " onClick={()=> filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;
