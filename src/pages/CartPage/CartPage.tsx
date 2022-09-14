import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const CartPage = (props: Props) => {
    const cartCount = useAppSelector((state) => state.productsInCart)

    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    cartCount={cartCount}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartProductList cartCount={cartCount} />
            <CartTotal cartCount={cartCount} />
        </div>
    )
}

export default CartPage
