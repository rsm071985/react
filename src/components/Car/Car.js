import React from 'react';

export default (props) => (
    <div style={{
        border: '1px solid red',
        marginBottom: '30px'
    }}>

        <h1>{props.name}</h1>
        <input type="text" onChange={props.changeName} value={props.name}/>
        {/*<button onClick={props.changeTitle}>Нажми</button>*/}
        <p>{props.year}</p>
        <button onClick={props.deleteCar}>Delete</button>
    </div>
)