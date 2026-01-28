const featuredDevices=[
    {
        id:1,
        name:"Apple 2025 MacBook Pro Laptop with M5 chip",
        img:"https://m.media-amazon.com/images/I/615tKndaduL._SX425_.jpg",
       
    },
    {
        id:2,
        name:"Sony DualSense Wireless Controller White (PlayStation 5)",
        img:"https://m.media-amazon.com/images/I/61Q1Pa4X4-L._SX466_.jpg",
       
    },
    {
        id:3,
        name:"OBSBOT Tail 2 AI-Powered PTZR 4K Live Production Camera",
        img:"https://m.media-amazon.com/images/I/31SbwpgBoXL._SY300_SX300_QL70_FMwebp_.jpg",
       
    },
]

export default function FeaturedDevicesCarousel(){
    return(
        
        <section className="max-w-7xl mx-auto px-4 py-10 ">
            <h2 className="text-center text-5xl md:text-6xl font-extrabold">
                <span className="text-base-100">F</span>
                <span className="text-blue-400">eatured &nbsp;</span>
                <span className="text-base-100">D</span>
                <span className="text-blue-400">evices</span>
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
               
                {featuredDevices.map(device=>(
                    <div key={device.id} className="card bg-base-100 w-full shadow-sm">
                        <figure className="px-10 pt-10">
                            <img src={device.img} alt="Device Image" className="rounded-xl" /> 
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{device.name}</h2>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                            
                    </div>    
                ))}
               
            </div>
        </section>
    )
}