

import ImageGrid from '@/components/ui/image-grid';
import ForceRefresh from '@/components/ui/force-refresh';
import cloudinary from 'cloudinary'
import CloudinaryImage from '../../components/ui/cloudinary-image'
import { SearchResult } from '../gallery/page';




const FavoritesPage = async () => {
  const result = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute() as { resources: SearchResult[] };
  return (
    // For refreshing 
    <><ForceRefresh />
    <div className=''>
      <div className='flex h-16 items-center px-4  container mx-auto gap-96 pt-8'>

        <div className='flex justify-between'>
          {/* Heading  */}
          <h1 className='text-4xl font-bold ml-auto flex items-center space-x-4'>
            Favortie Images
          </h1>
        </div>

      </div>


      <ImageGrid
        images={result.resources}
        getImage={(imageData: SearchResult) => {
          return (
            <CloudinaryImage
              path="/gallery"
              key={imageData.public_id}
              src={imageData.public_id}
              publicId={imageData.public_id}
              imageData={imageData}
              width={400}
              height={300}
              alt="an image of something"
            />
          )
        }} />
      {/* <div className='grid grid-cols-4 gap-4 pt-8'>

        {result.resources.map((results) => (
          <CloudinaryImage
            path="/favorites"
            key={results.public_id}
            src={results.public_id}
            publicId={results.public_id}
            imageData={results}
            width={400}
            height={300}
            alt="an image of something" />
        ))}

      </div> */}

    </div></>
  )
}

export default FavoritesPage