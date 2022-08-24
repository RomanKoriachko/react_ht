import React from 'react'
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const Header = ({ cartData }: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Fake Shop
                    </Typography>
                    <Menu />
                    <CartHeader
                        totalCount={cartData.totalCount}
                        totalPrice={cartData.totalPrice}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
