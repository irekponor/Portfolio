
const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className="ml-20 flex flex-col md:flex-row relative border-l border-stone-500">
        <li className="mb-10 ml-4">
            <div className="absolute h-3 w-3 bg-stone-500 rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-[16px] md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white bg-custom-color rounded-md">
                  {year}</span>
              <span className="text-lg font-semibold">
                  {title}</span>
              <span className="my-1 text-sm font-normal leading-none text-stone-600">
                  {duration}</span>
                </p>
                <p>
              <span className="my-2 text-base font-normal text-stone-600">
                {details}</span>
                </p>
        </li>
    </ol>
  )
}

export default WorkItem
