import cloudinary from "cloudinary";
import { AlbumCard } from "./album-card";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section className="py-14 sm:pr-2 ">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between ">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}