function TodoItem() {
    return (

        <div className='grid grid-cols-12 '>
            <div className='col-span-6'>
                Bye Milk
            </div>
            <div className='col-span-4 '>
                4/10/2025
            </div>
            <div className='col-span-2 '>
                <button>add</button>
            </div>
        </div>

    )
}

export default TodoItem;