const todo = () => {
    return (
        <div className='flex items-center justify-between p-4 bg-rose-200 border-b border-solid border-gray-600'>
            <div className="flex items-center">
                <span className='border border-gray-500 border-solid p-3 rounded-full'>

                </span>
                <p className="pl-3">
                    todo item
                </p>

            </div>

            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in " src ="close-icon.svg"alt="close icon"/>
            
            
        </div>
    )
} 

export default todo;