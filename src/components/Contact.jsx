

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-custom-color">Contact</h1>
      <form action="https://getform.io/f/adrykyna" method="POST" encType="multipart/form-data">
        <div className="pl-20 pr-10 grid md:grid-cols-2 gap-4"> 
            <div className="flex flex-col">
                <label className="uppercase text-sm py-2 font-semibold">Name</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-500" type="text" name="name" />
            </div>
            <div className="flex flex-col">
                <label className="uppercase text-sm py-2 font-semibold">Phone No.</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-500" type="text" name="phone no" />
            </div>
        </div>
        <div className="pl-20 pr-10">
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2 font-semibold">Email ID</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-500" type="email" name="email" />
     
  )
}

export default Contact
