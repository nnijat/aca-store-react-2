function ShoppingCart(props) {
    const shoppingCartDetails = props.cart.map((p, i) => {
        return <ProductDetail
            key={i}
            product={p} />
    });

    return (
        <div className="row">
            {shoppingCartDetails}
            <button>Checkout</button>
        </div>
    )
}

ShoppingCart.propTypes = {
    cart: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
}