"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const EditPage = (
    { searchParams: { publicId } }: { searchParams: { publicId: string } }
) => {
    const [transformation, setTransformation] = useState<undefined | "shear" | "generative-fill" | "grayscale" | "blur" | "removeBackground" | "zoomLoop" | "pixelate" | "tint">()
    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");

    return (
        <div className=''>
            <div className='flex h-16 items-center px-4  container mx-auto gap-96 pt-8'>

                <div className='flex justify-between'>
                    {/* Heading  */}
                    <h1 className='text-4xl font-bold ml-auto flex items-center space-x-4' >
                        Edit {publicId}
                    </h1>
                </div>

            </div>
            <div className="flex flex-col gap-4 w-1/2 pt-4">
                    <Button className="bg-white text-black rounded-xl hover:bg-white/70"
                        onClick={() => {
                            setTransformation("generative-fill");
                            setPrompt(pendingPrompt);
                        }}
                    >
                        Apply Generative Fill
                    </Button>
                    <Label>Prompt</Label>
                    <Input
                        value={pendingPrompt}
                        onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                    />
                </div>
            <div className="grid gap-4 grid-cols-5 pt-10">
                <Button onClick={() => setTransformation(undefined)}
                    variant="ghost" className="bg-white text-black rounded-xl hover:bg-white/75 ">Clear All</Button>

               
                <Button onClick={() => setTransformation("blur")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Blur</Button>


                <Button onClick={() => setTransformation("pixelate")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Pixelate</Button>


                <Button onClick={() => setTransformation("grayscale")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Grayscale</Button>
                <Button onClick={() => setTransformation("tint")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Tint</Button>
                <Button onClick={() => setTransformation("shear")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Shear</Button>

                <Button onClick={() => setTransformation("zoomLoop")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Zoom Loop</Button>


                <Button onClick={() => setTransformation("removeBackground")}
                    variant="default" className="bg-white text-black rounded-xl hover:bg-white/75">Remove Background</Button>

            </div>
            <div className="grid grid-cols-2 gap-11">
                <div className="pt-10">
                    <CldImage
                        src={publicId}
                        width="300" height="300"
                        alt="Image of Something"
                    />
                </div>
                {
                    transformation === 'generative-fill' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="1400"
                            height="900"
                            alt="some image"
                            crop="pad"
                            fillBackground={{
                                prompt,
                            }}
                        />
                    </div>
                }
                {
                    transformation === 'blur' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            blur="800"
                        />
                    </div>
                }
                {
                    transformation === 'shear' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            shear="40:0"
                        />
                    </div>
                }
                {
                    transformation === 'grayscale' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            grayscale
                        />
                    </div>
                }
                {
                    transformation === 'tint' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            tint="equalize:80:blue:blueviolet"
                        />
                    </div>
                }
                {
                    transformation === 'removeBackground' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            removeBackground
                        />
                    </div>
                }
                {
                    transformation === 'zoomLoop' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            zoompan="loop"
                        />
                    </div>
                }
                {
                    transformation === 'pixelate' &&
                    <div className="pt-10">
                        <CldImage
                            src={publicId}
                            width="300" height="300"
                            alt="Image of Something"
                            pixelate
                        />
                    </div>
                }
            </div>

        </div>
    )
}

export default EditPage