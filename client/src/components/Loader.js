import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
        <div className="flex gap-5 text-5xl sm:text-4xl font-semibold">
            <h1 className='text-secondary s'> Saad </h1>
            <h1 className='text-white m'> M. </h1>
            <h1 className='text-tertiary r'> Ranjha </h1>
        </div>
    </div>
  )
}

export default Loader