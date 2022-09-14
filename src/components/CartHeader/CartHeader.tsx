import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { useAppSelector } from 'redux/hooks'

type Props = {}

const CartHeader = (props: Props) => {
    const cartCount = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <CartProductList cartCount={cartCount} />
            <CartTotal cartCount={cartCount} />
        </div>
    )
}

export default CartHeader
