import Image from 'next/image';


export default function Gallery() {
  return (<div>
     <div class="flex gap-4">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
     
    </div>
     <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
     <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
       <BlurImage />
     </div>
   </div>
  </div>
   
  );
}

function BlurImage() {

  return (
    <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          src="https://bit.ly/placeholder-img"
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