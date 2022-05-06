import { Button, FormControl } from "@mui/material";
import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Navbar>
            <div>
                {/* logo goes here */}
            </div>
            {/* <Form classname='form'>
                <Button classname='btn-search'></Button>
                <FormControl type='text' placeholder='Search Pokemon...' classname='frm-search'/>
            </Form> */}
            <nav classname='nav'>
                <NavLink classname='nav__link' to='/'>
                    Home
                </NavLink>
                <NavLink classname='nav__link' to='/login'>
                    Log In
                </NavLink>
                <NavLink classname='nav__link' to='/signup'>
                    Sign Up
                </NavLink>
            </nav>
        </Navbar>
    );
};

export default Navbar;