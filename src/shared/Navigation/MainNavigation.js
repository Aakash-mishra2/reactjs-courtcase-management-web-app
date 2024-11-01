import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import Navlinks from "./Navlinks";
import SideMenu from "../UIelements/SideMenu";
import Backdrop from "../UIelements/Backdrop";

import './styles/MainNavigation.css';

export default function MainNavigation() {
    const [menu, setMenu] = useState(false);

    function openMenu() {
        setMenu(true);
    }
    const closeMenu = () => setMenu(false);

    return (
        <>
            {menu && <Backdrop onClick={closeMenu} />}
            <SideMenu show={menu} closeMenu={closeMenu} >
                <nav className="h-full">
                    <Navlinks />
                </nav>
            </SideMenu>

            <MainHeader>
                <button
                    className="w-12 h-12 bg-transparent border-none flex flex-col justify-around mr-4 cursor-pointer md:hidden pt-2 pb-2"
                    onClick={openMenu}
                >
                    <span className="bg-white h-1 w-10 rounded block" />
                    <span className="bg-white h-1 w-10 rounded block" />
                    <span className="bg-white h-1 w-10 rounded block" />
                </button>

                <h1 className="main-navigation__title font-bold">
                    <Link className="hidden md:block font-circular" to='/'>Court Case Management System</Link>
                    <Link className="block md:hidden" to='/'>C.C.M.S.</Link>
                </h1>
                <nav className="hidden md:block">
                    <Navlinks />
                </nav>

            </MainHeader>
        </>
    );
};