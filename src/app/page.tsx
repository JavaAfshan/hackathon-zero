"use client";
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

// Define type of UploadResult 
export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState(""); 
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      {/* Button  */}

      <div >
        <CldUploadButton className='bg-white text-black hover:bg-white rounded-xl  py-2 px-5 md:px-10 m-3 md:m-5'
         onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="jlwy39yv" />
      </div>

      {/* Image  */}
      <div>
 
      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
      </div>

    </main>
  )
}
