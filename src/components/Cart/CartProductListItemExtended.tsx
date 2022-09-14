import { Product } from 'components/Products/productsArray'
import { Card, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useDispatch } from 'react-redux'
import { decrementItem, incrementItem, removeItem } from 'redux/cartReducer'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    productCount,
    product,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )
    const dispatch = useDispatch()
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={product.image}
                            alt=""
                            style={{
                                width: '150px',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price} $</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount === 1
                                ? dispatch(removeItem(product.id))
                                : dispatch(decrementItem(product.id))
                        }
                        onIncrementClick={() =>
                            dispatch(incrementItem(product.id))
                        }
                        removeProductFromCart={() =>
                            dispatch(removeItem(product.id))
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => dispatch(removeItem(product.id))}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
