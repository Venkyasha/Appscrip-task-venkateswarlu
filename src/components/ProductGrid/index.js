import { useEffect, useState } from "react"

import ProductCard from "../ProductCard"

import "./index.css"

const ProductGrid = () => {
    const [data, updateData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const url = 'https://fakestoreapi.com/products'
            const options = {
                method: "GET",
            }

            const res = await fetch(url, options)
            if (res.ok) {
                const fetchedData = await res.json()
                const foramtedData = fetchedData.map(each => ({
                    id: each.id,
                    title: each.title,
                    price: each.price,
                    description: each.description,
                    category: each.category,
                    image: each.image,
                }))
                updateData(foramtedData)
            }
        }
        getData()
    }, [])
    return (
        <ul className="product-grid">
            {data.map(each => (
                <ProductCard key={each.id} productDeatils={each} />
            ))}
        </ul>
    )
}
export default ProductGrid