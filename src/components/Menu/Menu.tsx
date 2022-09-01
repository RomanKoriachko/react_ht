import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? classes.activeMenuItem : classes.menuItem
                    }
                >
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? classes.activeMenuItem : classes.menuItem
                    }
                >
                    Products
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                        isActive ? classes.activeMenuItem : classes.menuItem
                    }
                >
                    Payment
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/shipping"
                    className={({ isActive }) =>
                        isActive ? classes.activeMenuItem : classes.menuItem
                    }
                >
                    Shipping
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? classes.activeMenuItem : classes.menuItem
                    }
                >
                    Cart
                </NavLink>
            </Button>
        </>
    )
}

export default Menu
