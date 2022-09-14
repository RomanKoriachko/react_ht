import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to Checkout</Link>
        </div>
    )
}

export default CartPage
