import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type ProductsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>(
        {}
    )

    const addProductToCart = (id: number, count: number) => {
        if (productsInCart[id] === undefined) {
            setProductsInCart((prevState: ProductsInCartProps) => ({
                ...productsInCart,
                [id]: count,
            }))
        } else {
            setProductsInCart((prevState: ProductsInCartProps) => ({
                ...productsInCart,
                [id]: prevState[id] + count,
            }))
        }
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(1, 5)}>Add To Cart</button>
            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
