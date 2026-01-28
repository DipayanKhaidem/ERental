import 'animate.css';
const categories = [
  {
    id: 1,
    name: "Laptops",
    img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60",
    desc: "Get the latest laptops for work, gaming or personal use"
  },
  {
    id: 2,
    name: "Consoles",
    img: "https://images.unsplash.com/photo-1637393994956-71758d70c0b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvbnNvbGVzfGVufDB8fDB8fHww",
    desc: "Get the latest consoles for gaming"
  },
  {
    id: 3,
    name: "Cameras",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FtZXJhfGVufDB8fDB8fHww",
    desc: "Get the latest cameras for photography or videography"
  },
  {
    id: 4,
    name: "Home Appliances",
    img: "https://images.unsplash.com/photo-1620051787208-a45bc64e32ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBhcHBsaWFuY2VzfGVufDB8fDB8fHww",
    desc: "Get the best home appliances for day to day personal use"
  }
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="animate__animated animate__fadeInDownBig animate__delay-200ms text-center text-5xl md:text-6xl font-extrabold">
        <span className="text-base-100">C</span>
        <span className="text-blue-400">ategories</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="card w-full max-w-sm backdrop-blur-lg border border-base shadow-lg shadow-blue-400 rounded-lg overflow-hidden"
          >
            <figure>
              <img src={cat.img} alt={cat.name} className="w-full h-56 object-cover" />
            </figure>

            <div className="card-body text-center px-4 py-5 space-y-3">
              <h3 className="card-title text-blue-400 justify-center font-extra-bold lg:text-2xl">{cat.name}</h3>
              <p className="text-sm text-base-100 font-bold">{cat.desc}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Check Out</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
