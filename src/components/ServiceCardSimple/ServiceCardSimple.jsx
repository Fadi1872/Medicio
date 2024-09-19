import React from 'react'

const ServiceCardSimple = ({icon, title, description}) => {
  return (
    <div className='custom_shadow p-3 py-4 h-100'>
        <p className='text-blue fs-1'>{icon}</p>
        <p className='fs-4'>{title}</p>
        <p className='opacity-75'>{description}</p>
    </div>
  )
}

export default ServiceCardSimple