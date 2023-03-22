import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import Input from "./Input";
import classes from './Header.module.css'

const Header = () => {
    return(
        <Fragment>
            <header className={classes.header}>
                <Input/>
                <HeaderCartButton  />
            </header>
        </Fragment>
    )
}

export default Header