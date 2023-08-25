import { SearchResult } from "@/app/gallery/page"
import addImageToAlbum from "@/components/ui/action"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import { useState } from "react"
import { idText } from "typescript"
import Folder from "./folder"

export function AddToAlbumDialog({image,onClose}:{image:SearchResult; onClose: () => void;}) {
    const [albumName,setAlbumName]=useState("")
    const [open ,setOpen]=useState(false);
  return (
    <Dialog open={open} onOpenChange={(newOpenState) => {
      setOpen(newOpenState);
      if (!newOpenState) {
        onClose();
      }
    }}
  >
      <DialogTrigger asChild>
       <div className="flex cursor-pointer">
        <Folder /> <span className="">Add to Album</span></div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/60 text-white">
        <DialogHeader>
          <DialogTitle>Add to an Album</DialogTitle>
          <DialogDescription>
          Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
            onChange={(e)=>setAlbumName(e.currentTarget.value)}
            id="album-name" value={albumName} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
          onClick={async()=>{
            setOpen(false);
            await addImageToAlbum(image, albumName)
          }}
          type="submit" className="bg-white/30 rounded-xl">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
