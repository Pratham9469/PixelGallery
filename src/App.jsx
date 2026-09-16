import { useEffect, useState } from 'react'
import { Camera, Heart, Images, Menu, Shapes, Sparkles, UserRound, X } from 'lucide-react'
import axios from 'axios'
import ImageCard from './components/ImageCard';
import Pagination from './components/Pagination';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imagesData, setImagesData] = useState([]);
  const [nextData, setNextData] = useState(10);

  useEffect(() => {
    async function fetchImage() {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${nextData}&limit=8`);
      const apiData = response.data;
      setImagesData(apiData);
    }
    fetchImage();
  }, [nextData]);

  return (
    <>
      {/* Header */}
      <header className='h-20 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-b-gray-400 relative z-50 bg-white'>
        <div className='flex justify-between items-center w-full h-full'>

          <div className='flex items-center gap-4 sm:gap-8 lg:gap-20 xl:gap-30 min-w-0'>
            <h2 className='flex gap-1 text-xl sm:text-2xl font-medium items-center cursor-pointer shrink-0'>
              <Camera color='#004AC6' size={30} />
              PixelGallery
            </h2>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-6 lg:gap-10 xl:gap-30'>
              <h2 className='text-[20px] font-semibold text-[#054EC7] cursor-pointer'>
                Gallery
              </h2>

              <h2 className='text-[20px] font-semibold cursor-pointer'>
                Favorites
              </h2>

              <h2 className='text-[20px] font-semibold cursor-pointer'>
                About
              </h2>
            </div>
          </div>

          <div className='flex items-center gap-2 sm:gap-4 shrink-0'>
            <input
              placeholder='Search captures, tags, artists...'
              className='border-2 w-28 sm:w-48 md:w-56 lg:w-64 xl:w-70 h-10 lg:h-12 rounded-md px-2 sm:px-3 lg:px-4 tracking-widest font-medium text-xs sm:text-sm lg:text-base'
            />

            <div className='w-10 h-10 rounded-2xl bg-[#004AC6] flex items-center justify-center cursor-pointer shrink-0'>
              <UserRound color='white' strokeWidth='3' />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 text-gray-700 hover:text-[#004AC6] focus:outline-none'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-300 shadow-md py-4 px-6 flex flex-col gap-4 z-50'>
            <h2
              className='text-base font-semibold text-[#054EC7] cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </h2>
            <h2
              className='text-base font-semibold cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </h2>
            <h2
              className='text-base font-semibold cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </h2>
          </div>
        )}
      </header>

      {/* Main Container */}
      <div className='flex flex-col lg:flex-row items-start justify-start lg:justify-between p-6 sm:p-8 md:p-10 gap-8 lg:gap-4'>

        {/* Left Hero Section */}
        <div className='flex flex-col gap-3 max-w-2xl'>
          <h2 className='flex bg-[#DAE2FD] w-fit items-center gap-1 px-4 py-1 rounded-2xl text-[#2b3142] text-xs sm:text-sm md:text-base'>
            <Sparkles size={15} />Images Worth Remembering.
          </h2>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide'>
            Discover Beautiful Moments
          </h1>
          <p className='text-sm sm:text-[16px] text-gray-800'>
            Explore a curated collection of photos from around the world.
          </p>
        </div>

        {/* Right Stats Container */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto shrink-0 lg:pt-15'>
          <div className='flex items-center gap-5 bg-white w-full sm:w-fit px-6 py-2 rounded-2xl'>
            <div className='w-11 h-11 bg-[#DBE1FF] flex items-center justify-center rounded-2xl shrink-0'>
              <Images />
            </div>

            <div className='flex flex-col gap-0'>
              <p className='font-bold text-[18px] tracking-wider'>4,280</p>
              <h3 className='text-gray-600 text-[15px]'>Total Photos</h3>
            </div>
          </div>

          <div className='flex items-center gap-5 bg-white w-full sm:w-fit px-6 py-2 rounded-2xl'>
            <div className='w-11 h-11 bg-[#DBE1FF] flex items-center justify-center rounded-2xl shrink-0'>
              <Shapes />
            </div>
            <div className='flex flex-col gap-0'>
              <p className='font-bold text-[18px] tracking-wider'>6</p>
              <h3 className='text-gray-600 text-[15px]'>Categories</h3>
            </div>
          </div>

          <div className='flex items-center gap-5 bg-white w-full sm:w-fit px-6 py-2 rounded-2xl'>
            <div className='w-11 h-11 bg-[#FFDAD6] flex items-center justify-center rounded-2xl shrink-0'>
              <Heart color='#95050E' />
            </div>
            <div className='flex flex-col gap-0'>
              <p className='font-bold text-[18px] tracking-wider'>12</p>
              <h3 className='text-gray-600 text-[15px]'>Favorites</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 lg:p-10'>
        {imagesData.map((images) => (
          <ImageCard key={images.id} images={images} />
        ))}
      </div>

      <Pagination
        nextData={nextData}
        setNextData={setNextData}
      />

      <footer className='pt-4'>
        <div className='flex items-center justify-center w-full h-12 bg-white'>
          <h2 className='font-bold tracking-wider'>PixelGallery. All rights reserved</h2>
        </div>
      </footer>
    </>
  )
}

export default App