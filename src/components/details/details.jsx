import './details.css';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
function Details(probs) {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }
    return (
        <div className='row parent'>
            <div className="card col-4 cartparent" key={product.id}>
                <img className="card-img-top cart-img" src={product.image} alt="" />
                <div className="card-body">
                    <p className="card-title">{product.title}</p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Details;