const Home = () => {


    return(
        <div className="flex h-screen">
            {/*Left Pane*/}
            <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                <div className="max-w-md text-center">
                    <h1>Image Here</h1>
                </div>
            </div>
            {/*Right Pane*/}
            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">ME REAN KH</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">User ID</label>
                            <input type="text" id="username" name="" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Login</button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Don't have account? <a href="#" className="text-black hover:underline">Sign Up here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home