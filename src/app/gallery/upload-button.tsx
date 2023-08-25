"use client";
import { CldUploadButton } from 'next-cloudinary'
import { UploadResult } from '../page'
import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const UploadButton = () => {
  const router=useRouter();
  return (
    <div>
      <div>
        <Button asChild className='bg-white text-black rounded-xl hover:bg-slate-200 hover:text-gray-900'>
          {/* Upload icon  */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 pl-2">
              <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
            </svg>


            <CldUploadButton
              onUpload={(result: UploadResult) => {
                // setImageId(result.info.public_id);
               setTimeout(()=>{
                router.refresh()
               },1000)
              }}
              uploadPreset="jlwy39yv"
            />
          </div>
        </Button>
      </div></div>
  )
}

export default UploadButton