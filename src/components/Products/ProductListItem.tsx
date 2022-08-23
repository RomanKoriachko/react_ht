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

type State = {
    count: number
    color: string
    isDecrementDisabled: boolean
    isIncrementDisabled: boolean
}

class ProductListItem extends Component<ProductProps, State> {
    state = {
        count: 1,
        color: 'green',
        isDecrementDisabled: true,
        isIncrementDisabled: false,
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
        this.setState((prevState: State) => {
            if (prevState.count <= 1) {
                this.setState({
                    isDecrementDisabled: true,
                    isIncrementDisabled: false,
                })
            } else if (prevState.count >= 10) {
                this.setState({
                    isDecrementDisabled: false,
                    isIncrementDisabled: true,
                })
            } else {
                this.setState({
                    isDecrementDisabled: false,
                    isIncrementDisabled: false,
                })
            }
        })
    }
    onIncrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
        this.setState((prevState: State) => {
            if (prevState.count <= 1) {
                this.setState({
                    isDecrementDisabled: true,
                    isIncrementDisabled: false,
                })
            } else if (prevState.count >= 10) {
                this.setState({
                    isDecrementDisabled: false,
                    isIncrementDisabled: true,
                })
            } else {
                this.setState({
                    isDecrementDisabled: false,
                    isIncrementDisabled: false,
                })
            }
        })
    }

    changeColor = () => {
        this.setState((prevState: State) => {
            if (prevState.color === 'green') {
                this.setState({
                    color: 'red',
                })
            } else {
                this.setState({
                    color: 'green',
                })
            }
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
                            disabled={this.state.isDecrementDisabled}
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
                            disabled={this.state.isIncrementDisabled}
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
