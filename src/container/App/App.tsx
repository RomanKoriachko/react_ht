import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'

type ProductsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>(
        {}
    )

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) =>
            omit(prevState, [id])
        )
    }

    const incrementInCartExtended = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: prevState[id] + 1,
        }))
    }
    const decrementInCartExtended = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: prevState[id] - 1,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                incrementInCartExtended={incrementInCartExtended}
                decrementInCartExtended={decrementInCartExtended}
            />
        </>
    )
}

export default App
