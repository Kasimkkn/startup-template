
const Cards = () => {
  return (
    <div
    className="absolute left-32 flex flex-col rounded-lg bg-white shadow bg-slate-100-700 md:max-w-xl md:flex-row">
    <img
      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC08a0z_3QFNGWjiKwSLRTk1m6T1clDX5_X3tENIF&s"
      alt="" />
    <div className="flex flex-col justify-start p-6">
      <h5
        className="mb-2 text-xl font-medium text-black">
        Card title
      </h5>
      <p className="mb-4 text-base text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eius, culpa officia velit quod assumenda illo accusantium tempore corporis a, repellat autem consequuntur reiciendis.
         Et nobis dolore eaque, consequuntur reiciendis earum?
       </p>
      <p className="text-xs text-black">
        Last updated 3 mins ago
      </p>
    </div>
  </div>
  )
}

export default Cards
