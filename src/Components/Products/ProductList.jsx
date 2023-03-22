import React,{useState} from "react";

const ProductList = ({name,description,price})=> {
    return(
        <div >
            <div>
            Name: <span>{name}</span> <br/>
            Description: <span>{description}</span>
            Price: <span>{price}</span>
            </div>
        </div>
    )
}

export default ProductList;