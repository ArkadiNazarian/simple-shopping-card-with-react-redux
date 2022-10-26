import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { addProduct } from './redux'
import { getProductsSelector, removeProduct } from "./redux"
import { useAppDispatch } from '../store.hooks'
import { Products } from './model'
import { addtocard } from "../Card/redux";


export const ProductsForm = () => {

    const dispatch = useAppDispatch()

    const [product, set_product] = useState<Products>({
        id: "",
        title: "",
        price: 0
    })

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        set_product(prev => {
            (prev as any)[name] = value;
            const newValue = { ...prev }
            return newValue
        })
    }

    const handlesubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        dispatch(addProduct(product))
    }

    const products = useSelector(getProductsSelector);

    const hanlder_remove = (id: string) => {
        dispatch(removeProduct(id))
    }

    const addtocardhandler = (product: Products) => {
        dispatch(addtocard(product))
    }

    return (
        <>
            <h2>Add Game to the Store</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder='Game title' name='title' value={product.title} onChange={handleChange} />
                <input type="number" placeholder='Price' name='price' value={product.price} onChange={handleChange} />
                <input type="text" placeholder='Id' name='id' value={product.id} onChange={handleChange} />
                <button type='submit'>Add product</button>
            </form>

            <div>
            <h2>Games List</h2>
            {
                products.map((value) => (
                    <div key={value.id}>
                        <h3>{value.title} : {value.price}</h3>
                        <button onClick={() => addtocardhandler(value)}>Add to card</button>
                        <button onClick={() => hanlder_remove(value.id)}>Remove from store</button>
                    </div>
                ))
            }
        </div>
        </>
    )
}