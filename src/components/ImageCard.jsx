import { Download } from "lucide-react";

const ImageCard = ({ images }) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col'>
      <img
        className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover'
        src={images.download_url}
        alt={images.author}
      />

      <div className='p-3 sm:p-4'>
        <p className='text-base sm:text-lg font-bold text-gray-900 truncate flex justify-between items-center'>
          {images.author}

          <a
            href={images.download_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Download className='cursor-pointer' />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;