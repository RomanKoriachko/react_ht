import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'

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
                </Routes>
            </Container>
        </>
    )
}

export default Main
