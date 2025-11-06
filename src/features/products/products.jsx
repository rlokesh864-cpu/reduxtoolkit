import React from "react";
import { useDeleteProductMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from "../../services/products";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

function Products() {
    var {data,isLoading} = useGetAllProductsQuery()
    var [rfn] = useLazyGetAllProductsQuery()
    var [fn] = useDeleteProductMutation();
    var navi = useNavigate();
    function deleteProduct(id){
        fn(id).then((res)=>{
            alert("product deleted")
            rfn();
        })
    }
    function editProduct(id){
        navi(`/editProduct/${id}`)
    }
    // function deleteProduct(id){
    //     axios.delete(`http://localhost:4000/products/${id}`)
    //     .then(()=>{
    //         alert("deleted");
    //     })
    // }
    return (
        <div className="mybox">
            <h1>Products</h1>
            {
                isLoading && <img src="https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif" alt="" />
            }
            <ul id="products">
            {
                data && data.map((product)=>{
                    return <li>
                        <img src={product.image}alt="" />
                        {product.title}
                        <i className="bi bi-trash" onClick={()=>{deleteProduct(product.id)}}></i>
                        <i className="bi bi-pencil-square" onClick={()=>{editProduct(product.id)}}></i>
                        </li>
                })
            }
            </ul>
        </div>
    )
}

export default Products;