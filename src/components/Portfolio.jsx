import React from 'react'
import YoutubeClone from '../assets/portfolio/YoutubeClone.jpg'
import movieApp from '../assets/portfolio/movieApp.jpg'
import portfolio from '../assets/portfolio/portfolio.jpg'



const Portfolio = () => {
    const card = [{
        id: 1,
        src: movieApp,
        linkDemo : "https://alifarhan786.github.io/Movie-App/",
        linkCode : "https://github.com/alifarhan786/Movie-App",
       
    },
    {
        id: 2,
        src: YoutubeClone,
        linkDemo : "https://alifarhan786.github.io/Youtube-Clone/",
        linkCode : "https://github.com/alifarhan786/Youtube-Clone",
    },
    {
        id: 3,
        src: portfolio,
        linkDemo : "",
        linkCode : "https://github.com/alifarhan786/Portfolio-Website",
    },
    
    ]
    return (
        <div  id="Portfolio" className=' pt-20 w-full  md:h-screen bg-gradient-to-b from-black to-pink-900 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 gap-8 sm:p-0'>
                    {card.map(({ id, src , linkDemo , linkCode}) => (
                        <div key={id} className='shadow-md shadow-gray-300 rounded-lg'>
                            <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                            <div className='flex items-center justify-center text-gray-300 font-bold  '>
                           
                                <a href={linkDemo} className={"w-1/2 px-3 text-center py-3 m-4 duration-200 rounded-md hover:scale-105 bg-gradient-to-r from-red-600  to-pink-700"}>Demo</a>
                           
                                <a href={linkCode} className={"w-1/2 px-3 py-3 m-4 text-center duration-200 rounded-md hover:scale-105 bg-gradient-to-r from-red-600  to-pink-700"}>Code</a>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Portfolio
