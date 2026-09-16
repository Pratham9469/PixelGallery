import { MoveRight } from "lucide-react";

const Pagination = ({ nextData, setNextData }) => {
  return (
    <div className='flex items-center justify-center gap-6'>
      <button
        className='bg-[#d6d6d6] px-6 py-2 rounded-xl font-medium cursor-pointer'
        onClick={() => {
          if (nextData > 10) {
            setNextData(nextData - 1);
          }
        }}
      >
        Previous
      </button>

      <p className='text-gray-500 font-medium'>
        Page {nextData - 9}
      </p>

      <button
        className='bg-[#004AC6] px-10 py-2 text-white font-medium flex rounded-xl cursor-pointer gap-2'
        onClick={() => {
          setNextData(nextData + 1);
        }}
      >
        Load Next page
        <MoveRight className='pt-1' />
      </button>
    </div>
  );
};

export default Pagination;