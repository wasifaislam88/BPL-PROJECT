function Newsletter() {
    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            <form className="container mx-auto flex flex-col items-center space-y-5 
            rounded-3xl p-6 md:p-12 lg:px-60 lg:py-20 
            relative z-50 top-30  bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                
                <div>
                    <h6 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                    Subscribe to our Newsletter
                    </h6>
                </div>

                <fieldset className="form-control items-center w-full">
                    <label className="label pb-3">
                        <span className="font-medium text-sm sm:text-lg md:text-xl text-black mx-70">
                            Get the latest updates and <br /> news right in your inbox!
                        </span>
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4  lg:w-full items-center sm:w-auto justify-center">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="input  input-bordered p-2 lg:w-full w-30 rounded-lg"
                        />
                        <button className="btn font-bold text-white px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Subscribe
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Newsletter;

