import React from "react";
import location from "../images/Fill 219.svg"

export default function Main(props){
    console.log(props)
    return(
        <div className="main-comp-wrapper">
            <div className="img-wrapper">
                <img src={props.data.imageUrl} alt="travel"></img>
            </div>
            <div className="content-wrapper">
                <div className="location-wrapper">
                    <img src={location} alt="location"></img><span>{props.data.location}</span><a className="google-map" href={props.data.googleMapLink} target="blank">View on Google Maps</a>
                </div>
                <p className="title">{props.data.title}</p>
                <span className="duration">{props.data.startDate} - {props.data.endDate}</span>
                <p className="description">{props.data.description}</p>
            </div>
        </div>
    )
}