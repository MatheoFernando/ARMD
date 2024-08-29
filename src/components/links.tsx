import { imageDataLinks } from "@/constants";

export function Links() {
  return (
    <div className="bg-cover bg-center bg-parallex02 py-16 ">
    
        <h1 className="flex items-center justify-center  font-bold text-2xl z-30 relative mb-12 ">
          LINKS
        </h1>
     
      <div className="container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 justify-items-center ">
        {imageDataLinks.map((image) => (
          <a
            key={image.id}
            href="#"
            className="relative overflow-hidden group items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="h-full w-24 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
