import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductGrid from "./components/ProductGrid"
import "./App.css"

const App = () => {
    return (
        <div>
            <Header />
            <div className="intro">
                <h1 className="intro-head">DISCOVER OUR PRODUCTS</h1>
                <p className="intro-para">Lorem ipsum dolor sit amet consecutetur. Amet est posuere rhoncus sceterisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <hr/>
            <ProductGrid />
            <Footer />
        </div>
    )
}
export default App