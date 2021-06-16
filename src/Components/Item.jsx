
import React from 'react'

function Item({image,title,overview}) {
    return (
            <div className="container-item">
                <div className='item-overview'>
                    <img className="img-size" src={image} alt="" />
                    <div className='overview'>
                        <h2 className='overview-title'>Overview</h2>
                        <p>{overview}</p>
                    </div>
                </div>
                <h1 className="title">{title}</h1>
            </div>
    )
}

export default Item
