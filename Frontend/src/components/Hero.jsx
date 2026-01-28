export default function Hero(){
    return <div>
        <div className="hero min-h-screen"
        style={{
            backgroundImage:"url(https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl md:text-6xl font-extrabold">
  Welcome to
</h1>
<h2 className="text-5xl md:text-6xl font-extrabold">
  <span className="text-white">E</span>
  <span className="text-blue-400">Rental</span>
</h2>
<p className="mt-3 text-base md:text-lg text-gray-300 font-medium">
  Unlock access to laptops, cameras, consoles and more.
</p>
<br></br>
{/* <p className="text-sm md:text-base text-gray-300">
  Rent premium tech devices on demand.
</p> */}

       {/* <p className="mb-5">
        Rent the tech you need, only when you need it — from laptops to cameras and everything in between.
       </p> */}
       <button className="btn btn-primary">Get Started</button>
        </div>
        </div>
        </div>
    </div>
}