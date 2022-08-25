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

    const addProductToCart = () => {
        setCartData((prevState: CartDataProps) => ({
            totalCount: prevState.totalCount + 1,
            totalPrice: prevState.totalPrice + 1000,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => addProductToCart()}>Add to cart</button>
            <Main />
        </>
    )
}

export default App
