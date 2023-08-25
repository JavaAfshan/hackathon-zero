import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
    return (
        <div>  <div className="border-b">
            {/* Logo  */}
            <div className="flex h-16 items-center px-4  container mx-auto">
                PHOTOS APP
                {/* Avatar  */}
                <div className="ml-auto flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                </div>
            </div>
        </div></div>
    )
}

export default Header