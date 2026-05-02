import PhotoCard from "./PhotoCard";

const Gallery = async () => {
  const res = await fetch("https://pixgen-lovat.vercel.app/data.json");

  const photos = await res.json();

  const topPhotos = photos.slice(0, 8);

  return (
    <div>
      <h1 className="font-medium text-2xl text-gray-500 my-8">Gallery Item</h1>
      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
