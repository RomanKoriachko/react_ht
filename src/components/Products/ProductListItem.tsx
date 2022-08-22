import React, { Component } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

export type ProductProps = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

class ProductListItem extends Component<ProductProps> {
    render() {
        return (
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h4 className="product-title">{this.props.name}</h4>
                    <div className="product-description">
                        {this.props.description}
                    </div>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity} Gb
                    </div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="product-quantity">
                        <Button variant="contained">-</Button>
                        <TextField size="small" value={1} variant="outlined" />
                        <Button variant="contained">+</Button>
                    </div>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// const ProductListItem = ({
//     name,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: ProductProps) => {
//     return (
//         <Card>
//             <CardContent>
//                 <div className="product-img">
//                     <img src={image} alt="" />
//                 </div>
//                 <h4 className="product-title">{name}</h4>
//                 <div className="product-description">{description}</div>
//                 <div className="product-features">Type: {type}</div>
//                 <div className="product-features">Capacity: {capacity} Gb</div>
//                 <div className="product-price">$ {price}</div>
//                 <div className="product-quantity">
//                     <Button variant="contained">-</Button>
//                     <TextField size="small" value={1} variant="outlined" />
//                     <Button variant="contained">+</Button>
//                 </div>
//             </CardContent>
//             <CardActions className="btn-wrap">
//                 <Button variant="contained">Add to cart</Button>
//             </CardActions>
//         </Card>
//     )
// }

export default ProductListItem
