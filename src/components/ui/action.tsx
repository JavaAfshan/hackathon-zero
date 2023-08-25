"use server";
import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary"
const addImageToAlbum = async(image:SearchResult,album:string) => {
 await cloudinary.v2.api.create_folder(album);
  
// get root directory 
let parts=image.public_id.split("/");
if(parts.length>1)
{
  parts=parts.slice(1)
}

const publicId=parts.join('/')

 await  cloudinary.v2.uploader.rename(
    image.public_id,
    `${album}/${publicId}`
  )
}

export default addImageToAlbum