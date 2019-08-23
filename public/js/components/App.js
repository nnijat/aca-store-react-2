class App extends React.Component {
    state = {
        shoppingCart: [],
        products: state.products,
    }
    addItemToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            return { shoppingCart: this.state.shoppingCart }
        })
    }
    render() {
        return (
            <Layout
                cart={this.state.shoppingCart}
                addItemToCart={this.addItemToCart}
            >
            </Layout>
        );
    }
}