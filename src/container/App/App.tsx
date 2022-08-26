import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (productCount: number, productPrice: number) => {
        setCartData((prevState: CartDataProps) => ({
            totalCount: prevState.totalCount + productCount,
            totalPrice: prevState.totalPrice + productPrice * productCount,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
