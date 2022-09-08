import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'

type ProductsInCartProps = {
    [id: number]: number
}
type ProductsLikeStateProps = {
    [id: number]: boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>(
        {}
    )

    const [productslikeState, setProductslikeState] =
        useState<ProductsLikeStateProps>({})

    const onLikeClick = (id: number, isLiked: boolean) => {
        if (isLiked === false) {
            setProductslikeState((prevState: ProductsLikeStateProps) => ({
                ...prevState,
                [id]: true,
            }))
        } else {
            setProductslikeState((prevState: ProductsLikeStateProps) => ({
                ...prevState,
                [id]: false,
            }))
        }
    }

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

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: count,
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
                changeProductQuantity={changeProductQuantity}
                productslikeState={productslikeState}
                onLikeClick={onLikeClick}
            />
        </>
    )
}

export default App
