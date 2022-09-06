import { Product } from 'components/Products/productsArray'
import { Card, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    incrementInCartExtended: (id: number) => void
    decrementInCartExtended: (id: number) => void
}

const CartProductListItemExtended = ({
    productCount,
    product,
    removeProductFromCart,
    incrementInCartExtended,
    decrementInCartExtended,
}: Props) => {
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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>{product.name}</div>
                        <p>Price for one item: {product.price} $</p>
                        <p>Count: {productCount}</p>
                        <div style={{ paddingBottom: '20px' }}>
                            <Quantity
                                count={productCount}
                                increment={() =>
                                    incrementInCartExtended(product.id)
                                }
                                decrement={() =>
                                    decrementInCartExtended(product.id)
                                }
                            />
                        </div>

                        <div>
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    removeProductFromCart(product.id)
                                }
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
