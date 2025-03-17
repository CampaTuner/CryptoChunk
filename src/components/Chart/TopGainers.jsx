import React from 'react'
import Slider from "react-slick";
import CoinCard from '../trendingcoins/CoinCard';
import { useSelector } from "react-redux";

function TopGainers() {

    const topGainers = useSelector(state => state.topGainer.topGainer);

    const settings = {
        // dots: true,
        // fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        waitForAnimate: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
        ]
    };

    return (
        <>
            <p className='mx-5 m-auto mt-20 md:mx-16 xl:mx-24 text-yellow-500 dark:text-white font-bold text-lg'>Top Gainers <span className='text-sm'>(24h)</span></p>
            <div className="slider-container mx-7 m-auto my-10 mt-4 md:mx-16 xl:mx-24">
                <Slider {...settings} id="slider">
                    {
                        topGainers?.map((coinsData, idx) => {
                            return <CoinCard key={idx} name={coinsData.symbol} difference={coinsData.market_cap_change_percentage_24h} image={coinsData.image} price={coinsData.current_price} />
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export default TopGainers