import React from 'react'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    addProductToCart: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList
                                    addProductToCart={addProductToCart}
                                />
                                <Reviews />
                            </>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
