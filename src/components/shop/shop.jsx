import './shop.css';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    return (
        <div className='parent d-flex flex-wrap justify-content-center'>
            {
                products.map((product) => {
                    return (
                        <div className="border w-25 mx-2 my-2 p-4 " style={{ backgroundColor: 'rgb(248 245 245)' }} key={product.id}>
                            <div className="img-wrapper d-flex justify-content-center" style={{ height: '150px' }}>
                                <img className="w-25" src={product.image} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text ">{product.category}</p>
                                <h4 className="card-text ">EGP: {product.price}</h4>
                                <div className="rating">
                                    <p>{product.rating.rate}</p>
                                </div>
                                <Link to={`/shop/${product.id}`} className="btn btn-primary mx-auto d-block" type="submit">See Details</Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Shop;