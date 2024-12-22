
import Image from "next/image";
export default async function gallery () {
  
  const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)
  const musiumJSON = await data.json()

  return (
    <>
    <p>total in met db: {musiumJSON.total}</p>
    <FetchMetMusiumArt/>
    
  </>
  );
    

}
// async function FetchMetMusiumArt() {
//   let ids = [1,2,3,4,5,6,7,8,9]

//   try {
//     const promises = ids.map(id => fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`));
//     const responses = await Promise.all(promises);
//     const artJSON = await Promise.all(responses.map(response => response.json()));
//     return artJSON;
//   } catch (error) {
//     return (<>Error fetching museum data:{error}</>)
//   }
// }

async function FetchMetMusiumArt() {
  
  for (let i = 1; i < 10; i++) {
      const data = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}`)
      const artJSON = await data.json()
      if (artJSON.isPublicDomain === true) {
        return (
          <a href="#" className="group">
            <ul key={artJSON.objectID}>
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              alt={ artJSON.title }
              src={ artJSON.primaryImageSmall }
              layout="fill"
              objectFit='cover'
              className="group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{ artJSON.objectName	}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{ artJSON.title }</p>
          </ul>
        </a>
        )
      }
        
      }
    }
  
  