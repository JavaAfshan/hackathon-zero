
import { SearchResult } from '@/app/gallery/page'
import React, { ReactNode } from 'react'

const ImageGrid = ({ images, getImage }: {
  images: SearchResult[],
  getImage: (imageData: SearchResult) => ReactNode;
}) => {

  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % 4 === colIndex
    })
  }
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-8 pr-2'>
      {
        [
          getColumns(0),
          getColumns(1),
          getColumns(2),
          getColumns(3),
        ].map((column, idx) =>
          <div key={idx} className='flex flex-col gap-4'>
            {column.map(getImage)}
          </div>
        )
      }
    </div>
  )
}

export default ImageGrid