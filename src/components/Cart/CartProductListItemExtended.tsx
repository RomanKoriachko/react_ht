import { Product } from 'components/Products/productsArray'
import { Card, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { changeProductQuantity, removeProductFromCart } from 'redux/cartReducer'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItemExtended = ({ productCount, product }: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )
    const dispatch = useAppDispatch()
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
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        onIncrementClick={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
