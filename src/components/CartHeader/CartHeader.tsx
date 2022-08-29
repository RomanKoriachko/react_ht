import React from 'react'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div>
                    {/* @ts-ignore */}
                    {productId}: {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
