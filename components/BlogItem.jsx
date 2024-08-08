import Image from 'next/image'
import React from 'react'
import { assets, blog_data } from '../Assets/assets'
import Link from 'next/link'

const BlogItem = ({title, image, category, description, id} ) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0_#000000]'>
      <Link href={`/blogs/${id}`}> 
      <Image src={image} width={400} height={400} alt='blog-image' className='border-b border-black'></Image>

      </Link>
      <p className='ml-5 mt-5 px-1 bg-black text-white inline-block'>{category}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5> 
        <p className='mb-3 text-sm tracking-tight text-gray-900'>{description}</p>  
        <Link href={`/blogs/${id}`}>
        <div className='inline-flex items-center py-2 font-semibold text-center'>
        Read more <Image src={assets.arrow} className='ml-2' width={12} />
      </div> </Link>
      </div>
      
    </div>
  )
}

export default BlogItem
