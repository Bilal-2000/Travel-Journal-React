import React from "react";
import globe from "../images/Fill 213.svg"

export default function Header(){
    return(
        <div className="header-wrapper">
            <img src={globe} alt="world"></img>
            <span>my travel journal.</span>
        </div>
    )
}