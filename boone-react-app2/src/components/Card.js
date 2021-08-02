//rcc -> class component
//rsc -> functional component
import React from 'react';
import './Card.css';

//props:
// -url for image: url
// -title for card: title
// -text for card: text
const Card = (props) => {
    return (
        <div class="card" >
            <img src={props.url} className="card-img-top" alt={props.title}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    );
};

export default Card;