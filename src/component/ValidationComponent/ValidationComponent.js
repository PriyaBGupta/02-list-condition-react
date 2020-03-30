import React from 'react';
const ValidationComponent = (props) => {
    return(
        <p>{ props.length >5 ? <span>Text long enough</span> : <span>Text too short</span>}</p>
    )
}
export default ValidationComponent;