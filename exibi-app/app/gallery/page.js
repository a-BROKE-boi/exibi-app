import React from 'react';
import Image from 'next/image';


export default  function gallery () {

    return (<>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <BlurImage />
      {/* Add more BlurImage components here */}
    </div>
  </div>
  </>
    )
    
}

function BlurImage() {

    return (
      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            alt=""
            src="https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg"
            layout="fill"
            objectFit='cover'
            className="group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">place</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">holder</p>
      </a>
    )
  }