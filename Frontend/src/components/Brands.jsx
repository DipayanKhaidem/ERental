//Display available brands of devices for rent in  Card format
export default function Brands(){
    return(
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-center text-5xl md:text-6xl font-extrabold">
                <span className="text-base-100">B</span>
                <span className="text-blue-400">rands we offer</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="card max-w-sm backdrop-blur-lg border border-base-100  shadow-lg shadow-blue-400 rounded-lg overflow-hidden">
                    <div className="card-body">
                    <h2 className="text-center text-blue-400 font-extrabold lg:text-xl">Apple</h2>
                    </div>
                </div>

                 <div className="card max-w-sm backdrop-blur-lg border border-base-100  shadow-lg shadow-blue-400 rounded-lg overflow-hidden">
                    <div className="card-body">
                    <h2 className="text-center text-blue-400 font-extrabold lg:text-xl">Samsung</h2>
                    </div>
                </div>

                 <div className="card max-w-sm backdrop-blur-lg border border-base-100  shadow-lg shadow-blue-400 rounded-lg overflow-hidden">
                    <div className="card-body">
                    <h2 className="text-center text-blue-400 font-extrabold lg:text-xl">Microsoft</h2>
                    </div>
                </div>

                 <div className="card max-w-sm backdrop-blur-lg border border-base-100  shadow-lg shadow-blue-400 rounded-lg overflow-hidden">
                    <div className="card-body">
                    <h2 className="text-center text-blue-400 font-extrabold lg:text-xl">Xiaomi</h2>
                    </div>
                </div>

                 <div className="card max-w-sm backdrop-blur-lg border border-base-100  shadow-lg shadow-blue-400 rounded-lg overflow-hidden">
                    <div className="card-body">
                    <h2 className="text-center text-blue-400 font-extrabold lg:text-xl">Sony</h2>
                    </div>
                </div>

                 <div className="card max-w-sm backdrop-blur-lg border border-base-100  shadow-lg shadow-blue-400 rounded-lg overflow-hidden">
                    <div className="card-body">
                    <h2 className="text-center text-blue-400 font-extrabold lg:text-xl">Viper</h2>
                    </div>
                </div>

            </div>


        </section>
    )
}