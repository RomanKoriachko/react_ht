import React from 'react'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    incrementInCartExtended: (id: number) => void
    decrementInCartExtended: (id: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    incrementInCartExtended,
    decrementInCartExtended,
}: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                incrementInCartExtended={
                                    incrementInCartExtended
                                }
                                decrementInCartExtended={
                                    decrementInCartExtended
                                }
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
