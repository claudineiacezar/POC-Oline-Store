import React  from 'react';
import { Routes ,Route } from 'react-router-dom';
import Product from '../../views/pages/product';
import Home from '../../views/pages/home';
import ProductDetail from '../../views/pages/product/productView';
import { ROOT, PRODUCT, PRODUCT_DETAIL} from './CONSTANTS'

const RouterConfig = () => {
    return ( 
        <div>
            <Routes>
                <Route exact path={ ROOT } element={ <Home/> }/>
                <Route exact path={ PRODUCT } element={ <Product/>}/>
                <Route exact path={ PRODUCT_DETAIL } element={ <ProductDetail/>}/>
            </Routes>
        </div>
     );
}
 
export default RouterConfig;