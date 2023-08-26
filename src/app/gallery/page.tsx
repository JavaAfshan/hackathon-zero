
import UploadButton from './upload-button'
import cloudinary from 'cloudinary'
import ImageGrid from '@/components/ui/image-grid'
import CloudinaryImage from '../../components/ui/cloudinary-image'
import SearchForm from './search-form'

export type SearchResult = {
  public_id: string
  tags: string[]
  path: string
}


const GalleryPage = async ({ searchParams: { search } }: { searchParams: { search: string } }) => {
  const result = await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}`:"" }`)
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(30)
    .execute() as { resources: SearchResult[] };

  return (
    <div className=''>
     <div className='flex flex-col lg:flex-row lg:h-16 items-center px-4 container mx-auto lg:gap-96 pt-8'>

  {/* Heading */}
  <h1 className='text-2xl lg:text-4xl font-bold flex pb-4 items-center space-x-2'>
    Gallery
  </h1>


<div className='flex-grow'></div>

{/* Upload Button Div */}
<UploadButton />

</div>

     <div className='md:w-1/2 w-full lg:mt-8 mt-4 pr-5 '>
     <SearchForm initialSearch={search}/>
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
    </div>
  )
}

export default GalleryPage