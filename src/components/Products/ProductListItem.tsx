import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}: ProductProps) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">$ {price}</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
