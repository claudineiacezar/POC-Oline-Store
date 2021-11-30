import React from 'react';
import NavBar from '../../components/navBar';
import { Link } from 'react-router-dom';
import { ROOT } from '../../../application/navigation/CONSTANTS';


const ProductDetail = () => {
    return (  
        <div>
            <NavBar/> 
            <main class="container m-2">
                <div class="bg-light p-5 rounded">
                    <h1>Product Detail</h1>
                    <img src="..." class="card-img-top" alt="..."/>
                     <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                     <Link class="btn btn-primary" to={ROOT}>Add to card</Link>
                </div>
            </main>
           
     
        </div>
    );
}
 
export default ProductDetail;