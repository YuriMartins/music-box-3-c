import React from "react";
import LogoVerde from "../html-css-template/imagens/logo-verde.png";
import Avatar from "../html-css-template/imagens/avatar.png";

function Menu() {
    return (
        <>
        <nav>
        <div class="container">
            <img src={LogoVerde} alt="Logo" class="logo" />
            <img src={Avatar} alt="Avatar" class="avatar" />
        </div>
    </nav>
        </>

    )
}

export default Menu;