import React from 'react';
import './Image.css';

const Image = (props) => (
    <div>
        <img className="img-fluid img-thumbnail"
        alt={props.name}
        src={props.url}
        onClick={() => props.imageClick(props.id)}
        />
    </div>
);

export default Image;