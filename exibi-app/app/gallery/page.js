'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default  function gallery () {

    return (<>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <BlurImage />
     
    </div>
  </div>
  </>
    )
    
}




function BlurImage({ imageUrl }) {

  async function images() {
    const data = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]')
    const musiumAPI = await data.json()
    return (
      
      <ul>
        {musiumAPI.map((musiumAPI) => (
          <a href="#" className="group">
            <li key={musiumAPI.id}>
          <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              alt={musiumAPI.title}
              src={ musiumAPI.imageUrl }
              layout="fill"
              objectFit='cover'
              className="group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">place</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">holder</p>
          </li>
        </a>
          
        ))}
      </ul>
    )
  }

  }

  