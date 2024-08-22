import { AiOutlineLink } from "react-icons/ai"


const ProjectItem = ({img, title}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-l from-gray-200 to-custom-color">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10"/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="font-bold text-white tracking-wider text-center">{title}</h3>
            <p className="pb-0 pt-2 text-white text-center font-semibold">More Info
            </p>
            <AiOutlineLink size={20} className="ml-6 mt-0 rounded-full text-black text-center
             cursor-pointer bg-white h-8 w-20"/>
        </div>
    </div>
  )
}

export default ProjectItem
