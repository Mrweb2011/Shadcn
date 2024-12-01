import React from 'react'

function Start() {
  return (
    <div>
    <div className="bg-black text-white pl-44 pt-5 h-64">
      <h1 className='font-semibold'>Not sure where to start?</h1>
      <p className='mt-2 font-semibold text-gray-400'>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
      <div className="flex gap-5 mb-5">
        <div className="w-[270px] py-10 px-7 rounded border-1.5 border-gray-400 mt-7">
          <h3 className='font-semibold'>Workout Videos</h3>
          <p className='mt-2 text-gray-400'>Access to hundreds of free, full-length <br />workout videos. →</p>
        </div>
        <div className="w-[270px] py-10 px-7 rounded border-1.5 border-gray-400 mt-7">
          <h3 className='font-semibold'>Workout Programs</h3>
          <p className='mt-2 text-gray-400'>Affordable and effective workout <br />programs. →</p>
        </div>
        <div className="w-[270px] py-10 px-7 rounded border-1.5 border-gray-400 mt-7">
          <h3 className='font-semibold'>Meal Plans</h3>
          <p className='mt-2 text-gray-400'>Plans built with registered dietitians <br />and nutritionists. →</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Start