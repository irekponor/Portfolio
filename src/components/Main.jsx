import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Main = () => {
  return (
    <div id="main">
       <img className='h-screen w-full object-cover object-top' src="https://www.staffingfuture.co.uk/wp-content/uploads/images/ai-generated-professional-portrait-1170x686.jpeg" alt="" />
       <div className="absolute top-0 w-full left-0">
      <div className='max-w-[550px] w-full h-full pl-1 m-auto justify-center items-center lg:items-start flex flex-col'>
        <h3 className='sm:text-5xl text-4xl pt-56 font-bold text-black flex'>Hi, I'm Natasha Stark</h3>
        <h4 className='sm:text-3xl text-2xl pt-3 text-black'>I'm a 
            <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'System Analyst',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Data Scientist',
            1000,
            'Tech Enthusiast',
            1000,
            'Cloud Engineer',
            1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block', fontWeight: 'bold', paddingLeft: '10px', }}
        repeat={Infinity}
        />
        </h4>
        <div className='flex justify-between max-w-[200px] w-full pt-3'>
          <FaTwitter className='cursor-pointer text-black hover:scale-125' size={20} />
          <FaFacebook className='cursor-pointer text-black hover:scale-125' size={20} />
          <FaLinkedin className='cursor-pointer text-black hover:scale-125' size={20} />
          <FaInstagram className='cursor-pointer text-black hover:scale-125' size={20} />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Main

