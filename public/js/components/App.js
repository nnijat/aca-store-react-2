class App extends React.Component {
    state = {
        products: [],
        shoppingCart: [],
        homePage: 0
    }

    addItemToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            return { shoppingCart: this.state.shoppingCart }
        })
    }
    changeView = (num) => {
        this.setState(() => {
            return { homePage: num };
        })
    }
    componentDidMount() {
        fetch("https://acastore.herokuapp.com/products")
            .then(r => r.json())
            .then(p => this.setState({ products: p }));
    }

    render() {
        let content = null;
        if (this.state.homePage === 0) {
            content = <ProductList
                products={this.state.products}
                addToCart={this.addItemToCart}
            />
        } else if (this.state.homePage === 1) {
            if (this.state.shoppingCart.length === 0) {
                content = <h1>No products available.</h1>
            } else {
                content = <ShoppingCart
                    products={this.state.products}
                    cart={this.state.shoppingCart}
                />
            }
        }
        return (
            <Layout
                cart={this.state.shoppingCart}
                addItemToCart={this.addItemToCart}
                products={this.state.products}
                changeView={this.changeView}
            >
                {content}
            </Layout>
        );
    }
}
App.propTypes = {
    products: PropTypes.array.isRequired
}