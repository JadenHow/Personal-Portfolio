import React from 'react'
import "./product.css"

const Product = ({img,link,title}) => {
    return (
        <div className="p">
            <div className="p-top">
                <h3 className="p-title">{title}</h3>
            </div>
            <div className="p-bot">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>

                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="p-img" />
                </a>
            </div>    
        </div>
    )
}

export default Product
