import { AddToAlbumDialog } from "@/app/component/icons/add-to-album"
import Folder from "@/app/component/icons/folder"
import Menu from "@/app/component/icons/menu"
import { SearchResult } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pencil } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div  className='absolute top-2 left-2'>
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-8 h-8 p-0 bg-black rounded-xl"><Menu/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 bg-black text-white">
          <DropdownMenuItem asChild >
           <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild >
            <Button variant="ghost" asChild className="cursor-pointer flex justify-start pl-1">
           <Link   href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
            <Pencil className="w-4 h-4 mr-2 "/>
            Edit</Link></Button>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
