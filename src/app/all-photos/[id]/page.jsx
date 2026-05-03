import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaCalendarAlt, FaHeart, FaTag } from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-lovat.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find((f) => f.id == id);

  if (!photo) {
    return (
      <div className="flex justify-center items-center h-screen">
        Photo not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        <div className="lg:col-span-8 flex flex-col gap-6">

          <Card
            className="bg-content1/50 border-none overflow-hidden"
            shadow="lg"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={photo.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}
                className="rounded-xl object-cover"
              />
            </div>
          </Card>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">{photo.title}</h1>
            <div className="p-4 rounded-xl bg-default-100 border border-default-200">
              <p className="text-sm text-default-500 uppercase font-semibold mb-2 tracking-wider">
                Prompt
              </p>
              <p className="text-lg italic text-default-800 leading-relaxed">
                {photo.prompt}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 border-none bg-content1" shadow="md">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-xl">{photo.likes}</span>
                    <span className="text-xs text-default-400">Likes</span>
                  </div>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-xl">{photo.downloads}</span>
                    <span className="text-xs text-default-400">Downloads</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    variant="flat"
                    color="danger"
                    radius="full"
                  >
                    <FaHeart size={20} fill="currentColor" />
                  </Button>
                  <Button isIconOnly variant="flat" radius="full">
                    <FiShare2 size={20} />
                  </Button>
                </div>
              </div>

              <Button
                color="primary"
                size="lg"
                className="font-semibold shadow-lg"
                startContent={<FiDownload size={20} />}
              >
                Download Image
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Information</h3>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-default-500">
                  <MdMonitor size={16}>Model</MdMonitor>
                </span>
                <Chip size="sm" variant="flat" color="secondary">
                  {photo.model}
                </Chip>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-default-500">
                  <FaTag size={16}>Category</FaTag>
                </span>
                <span className="font-medium">{photo.category}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-default-500">
                  Resolution
                </span>
                <span className="font-medium">{photo.resolution}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-default-500">
                  <FaCalendarAlt size={16}>Created</FaCalendarAlt>
                </span>
                <span className="font-medium text-default-500">
                  {new Date(photo.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h3 className="font-semibold text-lg mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag) => (
                  <Chip key={tag} variant="dot" className="capitalize">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default PhotoDetailsPage;
