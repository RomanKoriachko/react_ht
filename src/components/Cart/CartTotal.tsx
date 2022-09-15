import { keys } from 'lodash'
import { getProductsObject, Product } from 'components/Products/productsArray'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [key: number]: Product
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartTotal = ({ productsInCart }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

    return (
        <div>
            Total{' '}
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}{' '}
            $
        </div>
    )
}

export default CartTotal
