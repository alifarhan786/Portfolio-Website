import React from 'react'

const About = () => {
  return (
    <div id="About" className=' pt-32 h-screen w-full  bg-gradient-to-b from-pink-900 to-black text-white'>
      <div className='max-w-screen-lg  p-4 mx-auto flex flex-col justify-center  w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About </p>
        </div>

        

          <div>

            <p className='px-6  text-4xl'>I am a BTech Grad Student from JECRC, Jaipur (Rajasthan) </p>
          </div>
          <div>

            <br />
            <p className=' px-2'>As a frontend developer with experience in ReactJS, HTML, Tailwind CSS, and JavaScript, I have a passion for creating beautiful and functional user interfaces. My focus is always on building responsive and accessible web applications that provide an exceptional user experience.

              I have a strong understanding of ReactJS and its core concepts, including state management, components, and the virtual DOM. I am also proficient in HTML and CSS, which allows me to create clean and well-structured markup and styles.

              Additionally, I have experience using Tailwind CSS, a popular utility-first CSS framework, to quickly and efficiently style web applications. </p>
          </div>
        

      </div>


    </div>
  )
}

export default About
