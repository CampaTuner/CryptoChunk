import React, { useState } from 'react';
import { useSelector } from "react-redux";
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

function CoinDescription() {
  const coinDetails = useSelector(state => state.details.details);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='mx-7 flex flex-col justify-start items-start gap-2 mb-7'>

      <p className=' text-yellow-500 dark:text-white font-bold text-lg'>Description</p>

      {/* Coin Image and Name */}
      <div className='flex items-center justify-between gap-3'>
        <img className='w-16 object-contain' src={coinDetails.coinImage} alt={coinDetails.coinName} />
        <span className='text-xl font-extrabold text-gray-900 dark:text-yellow-500' >{coinDetails.coinName}</span>
        <span className='bg-yellow-500 text-base font-bold text-white px-3 rounded-md '>{coinDetails.coinSymbol.toUpperCase()}</span>
      </div>

      {/* Official Page Link */}
      <a href={coinDetails.coinOfficialPage} target="_blank" className='text-blue-500 font-medium flex items-center gap-1 hover:underline'>
        Official Page
        <LaunchRoundedIcon fontSize='small' sx={{ color: '#3b82f6' }} />
      </a>

      {/* Coin Description with Read More / Read Less */}
      <p className={isExpanded ? "dark:text-white" : "line-clamp-6 dark:text-white"}>
        {coinDetails.coinDescription}
      </p>

      {/* Read More / Read Less Button */}
      {coinDetails.coinDescription.length > 300 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline "
        >
          {isExpanded ? "Read Less" : "Read More..."}
        </button>
      )}

    </div>
  );
}

export default CoinDescription;
