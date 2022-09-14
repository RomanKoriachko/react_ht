import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'
import CheckoutPage from 'pages/ChackoutPage/CheckoutPage'

const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList />
                                <Reviews />
                            </>
                        }
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </>
    )
}

export default Main
