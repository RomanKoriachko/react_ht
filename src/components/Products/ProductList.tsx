import React from 'react'
import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        capacity={64}
                        type="phone"
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        capacity={64}
                        type="phone"
                        price={400}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 13 Pro"
                        description="This is iPhone 13 Pro"
                        capacity={128}
                        type="phone"
                        price={1000}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList
