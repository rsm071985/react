import React from 'react';

export default (props) => (
    <div>

        <h1>{props.name}</h1>
        <button onClick={props.changeTitle}>Нажми</button>
        <p>{props.year}</p>
    </div>
)