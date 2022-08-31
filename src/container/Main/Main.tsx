import React from 'react'
import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container>
                <ProductList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}

export default Main
