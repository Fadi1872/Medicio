import React from 'react'

const DoctorCard = ({img, name, section}) => {
  return (
    <div className='custom_shadow rounded-2 w-100 h-100'>
        <div style={{height: 300}}>
            <img src={img} alt="doctor" className='w-100 h-100 object-fit-cover' />
        </div>
        <div className='px-3 py-4'>
            <h4>{name}</h4>
            <p className='mb-0 opacity-75'>{section}</p>
        </div>
    </div>
  )
}

export default DoctorCard