import React, { Component } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
import { green } from '@mui/material/colors'

export type ProductProps = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

type State = {
    count: number
    color: string
}

class ProductListItem extends Component<ProductProps, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }
    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }
    changeColor = () => {
        this.setState({
            color: 'red',
        })
    }

    render() {
        const { image, name, description, type, capacity, price } = this.props
        return (
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4 className="product-title">{name}</h4>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">$ {price}</div>
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            onClick={this.onDecrementClick}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                    <p>Color: {this.state.color}</p>
                    <button onClick={this.changeColor}>clange color</button>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
