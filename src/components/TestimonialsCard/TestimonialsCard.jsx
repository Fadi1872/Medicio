import './TestimonialsCard.css'

const TestimonialsCard = ({text, img, name, job}) => {
  return (
    <div>
        <div className='bg-light rounded-4 px-4 pt-4 pb-5'>
            <p>{text}</p>
        </div>
        <div className='px-4 pb-4'>
            <img src={img} alt="person" className='rounded-circle mb-4 person_img' />
            <p className='mb-1'>{name}</p>
            <p className='mb-0 opacity-75'>{job}</p>
        </div>
    </div>
  )
}

export default TestimonialsCard