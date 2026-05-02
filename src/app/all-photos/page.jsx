import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async () => {
    const res = await fetch("https://pixgen-lovat.vercel.app/data.json");
    const photos = await res.json()

    return (
        <div>
            <h1 className="font-medium text-2xl text-gray-500 my-8">All Photos</h1>

            <div className="grid grid-cols-4 gap-5">
                {photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default AllPhotosPage;