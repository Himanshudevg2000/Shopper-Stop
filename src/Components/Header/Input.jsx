import React,{useState} from "react";
import ProductList from "../Products/ProductList";

const Input = () =>{

    const [addList,setAddList] = useState([])
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')

    const submitHandler =(e)=> {
        e.preventDefault()
        if(name.length>0 && description.length>0 && price.length>0){
            setAddList([...addList,{name:name, description:description, price:price}])
        }
        console.log(name,description,price)
        console.log(addList)
    }

    return (
        <>
        <form onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder="name" 
        value={name}
        onChange={(e)=> setName(e.target.value) }
        />
        <input 
        type="text" 
        placeholder="description" 
        value={description}
        onChange={(e)=> setDescription(e.target.value) }
        />
        <input 
        type="number" 
        placeholder="price" 
        value={price}
        onChange={(e)=> setPrice(e.target.value) }
        />
        S:<input type="checkbox" placeholder="S" />
        M:<input type="checkbox" placeholder="M" />
        L:<input type="checkbox" placeholder="L" />
        <button type="submit">Add</button>
        </form>

        {addList.map((item,index) => (
            <ProductList
            name={item.name}
            description={item.description}
            price={item.price}
            />
            ))}
        </>
    )
}

export default Input;