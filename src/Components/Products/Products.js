import { Container } from '@material-ui/core';
import React from 'react';
import Footer from '../CommonSections/Footer/Footer';
import Navbar from '../CommonSections/Navbar/Navbar';
import ProductBanner from './ProductBanner/ProductBanner';
import ProductDetails from './ProductDetails/ProductDetails';


// ----------------------------Whole PRODUCTS page---------------------


const Products = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductBanner></ProductBanner>
            <Container>
                <ProductDetails></ProductDetails>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Products;