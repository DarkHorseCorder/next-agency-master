const Header = () => {
  return (
    <nav className='d-flex justify-content-between align-items-center px-5 py-2 shadow-sm flex-wrap'>
      <img src="/logo.svg" alt="logo" width='130px'/>
        <ul className='list-unstyled d-flex justify-content-between mt-3'>
          <li className='link'>Home</li>
          <li className='ml-5 link'>About</li>
          <li className='ml-5 link'>Technologies</li>
          <li className='ml-5 link'>Contact</li>
        </ul>
    </nav>
  )
}

export default Header
