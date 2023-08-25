"use client";
import { CldImage } from 'next-cloudinary';
import Heart from '../../app/component/icons/heart';
import { useState, useTransition } from 'react';
import { SearchResult } from '../../app/gallery/page';
import { setAsFavoriteAction } from '../../app/gallery/action';
import { ImageMenu } from './image-menu';

const CloudinaryImage = (props: any & {imageData:SearchResult ,path:string}) => {
  const {imageData}=props;
  const [transition, startTransition] = useTransition();
  const [isFavorited, setIsFavorited]=useState(imageData.tags && imageData.tags.includes("favorite"));
  return (
    <div className='relative'>
      <CldImage
        {...props}
      />
      {
        isFavorited? 
        <Heart className='absolute top-2 right-2 hover:text-white text-red-500' onClick={() => {
          setIsFavorited(false);
          startTransition(() => {
            setAsFavoriteAction(imageData.public_id,false,props.path)
          })
        }} 
        /> 
        :
        <Heart className='absolute top-2 right-2 hover:text-red-500 text-white' onClick={() => {
          setIsFavorited(true);
          startTransition(() => {
            setAsFavoriteAction(imageData.public_id,true,props.path)
          })
        }} 
        />
      }
      <ImageMenu image={imageData}/>
    </div>
  )
}

export default CloudinaryImage