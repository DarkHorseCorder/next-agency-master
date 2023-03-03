const ServiceItem = ({ img, title, desc }) => {
  return (
    <div className='col-md-4 col-sm-12 mb-5'>
      <div className='card text-center'>
        <div className='card-body'>
          <p className='mt-4 pt-2'>
            <img src={img} alt='serviceimg' />
          </p>
          <h5 className='font-weight-normal my-4 py-2'>
            <a className=''>{title}</a>
          </h5>
          <p className='mb-4'>
            {desc}
          </p>
          <a to='/' className='mb-4 link'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
