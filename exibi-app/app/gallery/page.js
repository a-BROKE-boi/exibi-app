
export default async function gallery () {
  for (let i = 1; i < 3; i++) { 
  const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
  const posts = await data.json()

    return (<>
    <p>{JSON.stringify(posts)}</p>
    
   
  
  </>
    )
    
}
}
// export default async function Page() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }
// iterate over 10 at a time we could only iterate over the fetch function 10 calls at a time.


// trying to figure out the json





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
  