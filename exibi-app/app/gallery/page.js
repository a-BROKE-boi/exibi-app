'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function gallery () {

    return (<>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <FetchMetMusium />
     
    </div>
  </div>
  </>
    )
    
}
// iterate over 10 at a time we could only iterate over the fetch function 10 calls at a time.


// trying to figure out the json
function FetchMetMusium() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
      const data = await response.json();
      setJsonData(data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {Object.keys(jsonData).forEach(key => {(
        <li key={item.objectID}>{item.primaryImageSmall}</li>
)})}
    </ul>
  );
}








//   async function FetchMetMusium() {
//     const artId = 1
//     const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
//     const musiumJSON = await data.json()
//     Object.keys(musiumJSON).forEach(key => {      
  
  
//     return (
//       <>
//       <p>
//       `${key}: ${obj[key]}`
//       </p>
//       </>


//       // <ul>
//       //   {musiumJSON.map((Art) => (
//       //     <a href="#" className="group">
//       //       <li key={Art.objectID}>
//       //     <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
//       //       <Image
//       //         alt={ Art.title }
//       //         src={ Art.primaryImageSmall }
//       //         layout="fill"
//       //         objectFit='cover'
//       //         className="group-hover:opacity-75"
//       //       />
//       //     </div>
//       //     <h3 className="mt-4 text-sm text-gray-700">{ Art.objectName	}</h3>
//       //     <p className="mt-1 text-lg font-medium text-gray-900">{ Art.title }</p>
//       //     </li>
//       //   </a>
//       //   ))}
//       // </ul>
//     )
//   })
// }
  