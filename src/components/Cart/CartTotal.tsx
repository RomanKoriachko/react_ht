import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/productsArray'

type Props = {
    cartCount: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    cartCount,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total{' '}
            {keys(cartCount).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        cartCount[parseInt(productId)],
                0
            )}{' '}
            $
        </div>
    )
}

export default CartTotal
