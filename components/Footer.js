const Footer = () => {
  return (
    <footer className='page-footer font-small'>
      {/* Footer Links */}
      <div className='container text-center text-md-left'>
        {/* Grid row */}
        <div className='row center'>
          {/* Grid column */}
          <div className='col-md-3 mx-auto'>
            {/* Links */}
            <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
              Address
            </h5>
            <ul className='list-unstyled'>
              <li>
                  25, Ashoka Park ext., East Punjabi Bagh, New Delhi-110026
              </li>
              <li>
                +91 11 28311113
              </li>
              <li>
                Email: info@zuriets.com
              </li>
            </ul>
          </div>
          {/* Grid column */}
          <hr className='clearfix w-100 d-md-none' />
          {/* Grid column */}
          <div className='col-md-3 mx-auto'>
            {/* Links */}
            <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
              Navigation
            </h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>
                <a href='#!'>About</a>
              </li>
              <li>
                <a href='#!'>Contact</a>
              </li>
            </ul>
          </div>
          {/* Grid column */}
          <hr className='clearfix w-100 d-md-none' />
          {/* Grid column */}
          <div className='col-md-3 mx-auto'>
            {/* Links */}
            <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
              Support
            </h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!'>Privacy Policy</a>
              </li>
              <li>
                <a href='#!'>Terms & conditions</a>
              </li>
              <li>
                <a href='#!'>Sitemap</a>
              </li>
            </ul>
          </div>
          {/* Grid column */}
          <hr className='clearfix w-100 d-md-none' />
          {/* Grid column */}
          <div className='col-md-3 mx-auto'>
           <img src="/logo.svg" alt="logo" width='200'/>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Footer Links */}
      {/* Copyright */}
      <div className='footer-copyright text-center py-3'>
        © 2020 Copyright
        <a href='http://www.zuriets.com'>&nbsp;Zuriets</a>
      </div>
      {/* Copyright */}
    </footer>
  )
}

export default Footer
