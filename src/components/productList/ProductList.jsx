import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-desc">
            Here are some projects that I've worked on and am currently working on! 
            </p>
            <p className="pl-desc">
            More description on my Linkedin page, please check it out!
            </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jaden-how02/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className="linkedin-img" />
          </a>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} title={item.title}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList