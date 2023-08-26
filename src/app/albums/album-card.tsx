import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Folder } from "./page"
import Link from "next/link"


export function AlbumCard({folder}:{folder:Folder}) {
  return (
    <Card className="rounded-xl md:pr-20 sm:pr-15">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} images</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild className="bg-white text-black rounded-xl hover:bg-white/70 ">
            <Link href={`/albums/${folder.name}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
