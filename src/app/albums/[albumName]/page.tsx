

import cloudinary from 'cloudinary'
import CloudinaryImage from '@/components/ui/cloudinary-image'
import AlbumGrid from './album-grid'

export type SearchResult = {
  public_id: string
  tags: string[]
  path: string
}


const AlbumPage = async (
    {params:{albumName},}:{
        params:{
            albumName:string
        }
    }
) => {
  const result = await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute() as { resources: SearchResult[] };

  return (
    <div className=''>
      <div className='flex h-16 items-center px-4  container mx-auto gap-96 pt-8'>

        <div className='flex justify-between'>
          {/* Heading  */}
          <h1 className='text-4xl font-bold ml-auto flex items-center space-x-4' >
            Album {albumName}
          </h1>
        </div>
      </div>
      <AlbumGrid
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
    </div>
  )
}

export default AlbumPage