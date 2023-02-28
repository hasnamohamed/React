import './shop.css';
import {Link} from 'react-router-dom'
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
        <div className='row parent'>
            {
                products.map((product) => {
                    return (
                        <div className="card col-4 cartparent" key={product.id}>
                            <img className="card-img-top cart-img" src={product.image} alt="" />
                            <div className="card-body">
                                <p className="card-title">{product.title}</p>
                                <p className="card-text">{product.price}</p>
                                <p className="card-text">{product.category}</p>
                                <p className="card-text">{product.description}</p>
                               <Link to={`/shop/${product.id}`} className="btn btn-primary" type="submit">See Details</Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Shop;