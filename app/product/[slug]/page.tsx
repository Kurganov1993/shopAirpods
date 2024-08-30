"use client"

import { groq } from "next-sanity";
import { client } from '@/sanity/lib/client';
import { useParams } from 'next/navigation'
import { Navbar, ProductDetails } from '../../components'
import React from 'react'

const page = async () => {
    const { slug }: any = useParams();
    const products = await client.fetch(groq`*[_type=="product"]`);
    const product = products.find((product: any) => product.slug.current == slug)
    console.log(products)
    return (
        <>
            <Navbar />
            <ProductDetails product={product} />
        </>

    )
}

export default page
