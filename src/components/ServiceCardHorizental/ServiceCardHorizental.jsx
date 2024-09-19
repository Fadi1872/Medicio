import './ServiceCardHorizental.css'

const ServiceCardHorizental = ({icon, title, number, info}) => {
  return (
    <div className={`d-flex gap-4 ${info? "py-4 align-items-start": "p-4 align-items-center custom_shadow"}`}>
        <p className={`mb-0 text-blue ${info? "rounded-2 custom_shadow square d-flex align-items-center justify-content-center fs-3": "fs-1"}`}>{icon}</p>
        <div>
            <h1 className={info? "fs-4": ""}>{number}</h1>
            <p className='mb-0'>{title}</p>
        </div>
    </div>
  )
}

export default ServiceCardHorizental