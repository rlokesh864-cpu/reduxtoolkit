import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AddProduct from '../features/products/Addproducts'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (id) => `/products`,
    }),
    getProductsDetailsById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    deleteProduct:builder.mutation({
      query:(id)=>{
        console.log(id)
        return{
          url: `/products/${id}`,
          method: 'DELETE',
        }
      }
    }),
    AddProduct:builder.mutation({
      query:(newproduct)=>{
        return {
          url:'/products',
          method:'POST',
          body:newproduct
        }
      }
    }),
    updateProduct:builder.mutation({
      query:(product)=>{
        return {
          url:`/products/${product.id}`,
          method:'PUT',
          body:product
        }
      }
    })  
  }),
})

export const { useUpdateProductMutation,useGetProductsDetailsByIdQuery, useAddProductMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery, useDeleteProductMutation } = productsApi