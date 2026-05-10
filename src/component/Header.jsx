import React from 'react'
const Header = () => {
    return (
        <header className='header'>
            <h1>Product.Web</h1>

            <div className='searchBox'>
                <input
                    type="text"
                    placeholder="Search products..."
                />
            </div>
        </header>
    )
}

export default Header;