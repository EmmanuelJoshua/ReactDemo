import React from 'react';

function Productitem(props) {
    return (
        <div>
            <div className='product-item' onClick={() => console.log('I\'m clicked')}>
                <h3>{props.item.name}</h3>
                <h4>{props.item.price.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}</h4>
            </div>
            <h5>{props.item.description}</h5>
            <hr />
        </div>
    )
}

export default Productitem
