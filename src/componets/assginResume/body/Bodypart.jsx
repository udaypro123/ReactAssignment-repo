import React from 'react'
import './bodypart.css'
const Bodypart = (props) => {
    // console.log("hello")
    return (
        <>
            <div className="bodydiv">
                <h1>{ props.name } </h1>
                <p>software developer, educator at geekster</p>
                <a href="https://www.linkedin.com/in/bittoo-aggarwal/"> linkedin</a>   ,
                <a href="https://www.linkedin.com/in/bittoo-aggarwal/"> github</a>

            </div>
            <hr />
        </>
    )
}

export default Bodypart;
