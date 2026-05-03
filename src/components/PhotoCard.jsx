import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="rounded-xl object-cover"
        />
        <Chip className="absolute right-2 top-2">{photo.category}</Chip>
      </div>
      <h3>{photo.title}</h3>
      <div>
        <h2>{photo.like}</h2>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <IoMdDownload />
          </p>
          <p>{photo.likes}</p>
        </div>
      </div>
      <Link href={`/all-photos/${photo.id}`}>
        <Button variant="outline" className="w-full">
          View
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
