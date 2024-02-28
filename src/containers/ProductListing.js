import React, { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    //function to get data  from the api
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err);
            });
        //dispatching the action        
        dispatch(setProducts(response.data));
    };

    //using useEffect to trigger the fetch profuct function
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;