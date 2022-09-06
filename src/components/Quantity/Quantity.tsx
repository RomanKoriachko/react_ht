import React from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    increment: () => void
    decrement: () => void
}

const Quantity = ({ count, increment, decrement }: Props) => {
    return (
        <>
            <Button
                variant="contained"
                onClick={decrement}
                disabled={count <= 1}
            >
                -
            </Button>
            <TextField size="small" value={count} variant="outlined" />
            <Button
                variant="contained"
                onClick={increment}
                disabled={count >= 10}
            >
                +
            </Button>
        </>
    )
}

export default Quantity
