import ServiceItem from './ServiceItem'


const Services = () => {
  return (
    <div className='container my-5'>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Section */}
      <section>
        <h6 className='font-weight-bold text-center grey-text text-uppercase small mb-4'>
          Services
        </h6>
        <h1 className=' text-center dark-grey-text pb-2'>
          Our Services
        </h1>
        <hr className='w-header my-4' />
        <p className='lead text-center text-muted pt-2 mb-5'>
          Join thousands of satisfied customers using our services globally.
        </p>
        <div className='row center'>
          <ServiceItem
            title='Books & Journals'
            img='/digitisation.png'
            desc='We provide a wide range of writing, editing, and design services'
          />
          <ServiceItem
            title='Content/ Document Conversion'
            img='/art-rendiring.png'
            desc='Document digitization is the process of converting manual documents into digital formats'
          />
          <ServiceItem
            title='e-Learning'
            img='/ebook.png'
            desc='At Zuriets , We develop interactive multimedia activities designed to enhance learner’s'
          />
          <ServiceItem
            title='K-12 & Higher Education'
            img='/HigherEducation.png'
            desc='At Zuriets, We create Informative Learning Content for K-12 & Higher Studies learners'
          />
          <ServiceItem
            title='Printing'
            img='/printer.png'
            desc='A design, customized printing and timely delivery are what an extended publication house should excel in'
          />
          <ServiceItem
            title='Software Development'
            img='/softwaredev.png'
            desc='At Zuriets , We develop interactive multimedia activities designed to enhance learner’s'
          />
        </div>
      </section>
      {/* Section */}
    </div>
  )
}

export default Services
