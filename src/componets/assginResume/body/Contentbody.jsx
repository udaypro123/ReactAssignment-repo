import React from 'react'

const Contentbody = (props) => {
    return (
        <>

            <div className='contentdiv'>
                <h2>{ props.mainheading } </h2>
                <h3>{ props.subheading } </h3>
                <p>{ props.para } </p>
                <hr />
            </div>
        </>
    )
}

export default Contentbody;
