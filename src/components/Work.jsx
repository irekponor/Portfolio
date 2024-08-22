import { BsAmazon, BsFacebook } from "react-icons/bs"
import WorkItem from "./WorkItem"
import { AiOutlineGoogle, AiOutlineX } from "react-icons/ai"


const data = [
    {
        year: 2021,
        title: <AiOutlineX />,
        duration: '3years',
        details: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        year: 2017,
        title: <AiOutlineGoogle />,
        duration: '4years',
        details: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        year: 2015,
        title: <BsAmazon />,
        duration: '2years',
        details: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        year: 2010,
        title: <BsFacebook />,
        duration: '5years',
        details: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
]
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">Work</h1>
           {data.map((item, idx)=> (
                <WorkItem 
                key={idx}
                year={item.year} 
                title={item.title}
                 duration={item.duration} 
                 details={item.details} 
                 />
           ))}
    </div>
  )
}

export default Work
