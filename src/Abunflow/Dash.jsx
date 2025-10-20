import React from 'react'
import { BiHome } from 'react-icons/bi'

function Dash() {
  return (
         <div className='fullscreen'>
      <div className='sideleft'>
        <div>
          <div></div>
        </div>
        <nav className='navigation'>
          <ul className='grid gap-[30px] justify-center mt-36 text-center'>
            <li className='flex gap-2 font-semibold text-gray-700 ml-4 text-lg'>
              <span className='flex'> <BiHome style={{ fontSize: "2rem" }} />Dashboard</span>
            </li>
            <li className='flex gap-2 font-semibold text-gray-700 ml-4 text-lg'>
              <span>Loans</span>
            </li>
            <li className='flex gap-2 font-semibold text-gray-700 ml-4 text-lg'>
              <span>Customers</span>
            </li>
            <li className='flex gap-2 font-semibold text-gray-700 ml-4 text-lg'>
              <span>User Management</span>
            </li>
            <li className='flex gap-2 font-semibold text-gray-700 ml-4 text-lg'>
              <span>Reports</span>
            </li>
            <li className=' line flex gap-2 font-semibold text-gray-700 text-lg'>
              <span>_________________________________</span>
            </li>
            <li className='flex gap-2 font-semibold text-gray-700 ml-4 text-lg'>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className='sideright'>
        <div className='flex justify-between items-center p-4 mb-4 mt-4'>
          <h1 className=' font-bold text-3xl mx-4'>Dashboard</h1>
          <div className='flex space-x-4 mr-7'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg nl'>New Loan</button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg gr'>Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash