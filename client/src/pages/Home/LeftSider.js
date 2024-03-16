import React from 'react'

function LeftSider() {
  return (
    <div className="w-40 fixed left-0 bottom-0 sm:static sm:mb-7 sm:w-full md:w-20">
        <div className="flex flex-col justify-center items-center gap-10 sm:flex-row">
            <i class="ri-whatsapp-fill text-gray-700 text-xl hover:text-tertiary cursor-pointer"></i>
            <i class="ri-twitter-fill text-gray-700 text-xl hover:text-tertiary cursor-pointer"></i>
            <i class="ri-linkedin-box-fill text-gray-700 text-xl hover:text-tertiary cursor-pointer"></i>
            <i class="ri-mail-fill text-gray-700 text-xl hover:text-tertiary cursor-pointer"></i>
            <i class="ri-github-fill text-gray-700 text-xl hover:text-tertiary cursor-pointer"></i>
            <div className="sm:hidden h-[15vh] w-[1px] bg-gray-700"></div>
        </div>
    </div>
  )
}

export default LeftSider