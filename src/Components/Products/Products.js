import { Container } from '@material-ui/core';
import React from 'react';
import ProductBanner from './ProductBanner/ProductBanner';
import ProductDetails from './ProductDetails/ProductDetails';

const Products = () => {
    return (
        <div>
            <Container>
            <ProductBanner></ProductBanner>
            <ProductDetails></ProductDetails>
            </Container>
        </div>
    );
};

export default Products;