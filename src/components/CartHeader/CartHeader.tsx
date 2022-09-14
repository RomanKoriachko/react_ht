import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { useAppSelector } from 'redux/hooks'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    const cartCount = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <CartProductList productsInCart={cartCount} />
            <CartTotal productsInCart={cartCount} />
        </div>
    )
}

export default CartHeader
