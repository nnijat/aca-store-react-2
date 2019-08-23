function ShoppingCart(props) {
    const shoppingCartDetails = props.shoppingCart.map((p, i) => {
        return <ProductDetail
            key={i}
            product={p} />
    });

    return (
        <div>
            {shoppingCartDetails}
            <button>Checkout</button>
        </div>
    )
}