function AddTodo() {
    return (
        <div className='container text-center'>

            <div className='grid grid-cols-12 '>
                <div className='col-span-6'>
                    <input type="text" placeholder='Enter Todo here' />
                </div>
                <div className='col-span-4 '>
                    <input type="date" />
                </div>
                <div className='col-span-2 '>
                    <button>add</button>
                </div>
            </div>
        </div>
    )

}

export default AddTodo;