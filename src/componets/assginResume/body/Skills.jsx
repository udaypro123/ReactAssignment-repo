import React from 'react'

const Skills = (props) => {
    return (
        <div className='skillsdiv'>

            <h3> { props.subheading } </h3>
            <ul>
                <li>{ props.ele1 } </li>
                <li>{ props.ele2 } </li>
                <li>{ props.ele3 } </li>
                <li>{ props.ele4 } </li>
            
            </ul>

        </div>
    )
}

export default Skills;
