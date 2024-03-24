import React from 'react'

function Home(props) {
    // console.warn("home",props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="./iphone-12pro.avif" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className="add-to-cart-button" onClick={()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}}>Add To Cart</button>
                    <button className="remove-to-cart-button" onClick={()=>{props.removeFromCartHandler()}}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home