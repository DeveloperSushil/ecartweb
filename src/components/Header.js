import React from 'react'

function Header(props) {
    // console.warn("Header",props.data)
     //alert(JSON.stringify(props.data.cardData));
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="./addToCart.jpg" alt="logo" />
                {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="logo" /> */}
            </div>
        </div>
    )
}

export default Header