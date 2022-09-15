import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { useAppSelector } from 'redux/hooks'

type Props = {}

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductList = () => {
    const productsArray = useAppSelector((state) => state.products)

    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                Product List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                image={image}
                                name={name}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList
