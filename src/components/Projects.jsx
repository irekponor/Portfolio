import ProjectItem from "./ProjectItem"
import car from '../assets/car.jpg'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-custom-color">Projects</h1>
      <p className="text-center py-8 px-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
         ut aliquip ex ea commodo consequat</p>
         <div className="pl-16 pr-16 grid gap-16 sm:grid-cols-2">
            <ProjectItem img={car} title='Car1 App' />
            <ProjectItem img={car} title='Car2 App' />
            <ProjectItem img={car} title='Car3 App' />
            <ProjectItem img={car} title='Car4 App' />
         </div>
    </div>
  )
}

export default Projects
