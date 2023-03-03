import { Fragment } from "react"

const Header = () => {
  return (
    <Fragment>
      <div className='row center'>
        <div className='col-md-6 col-sm-12 hide'>
          <div className='bird-container bird-container--one'>
            <div className='bird bird--one' />
          </div>
          <div className='bird-container bird-container--two'>
            <div className='bird bird--two' />
          </div>
          <div className='bird-container bird-container--three'>
            <div className='bird bird--three' />
          </div>
          <div className='bird-container bird-container--four'>
            <div className='bird bird--four' />
          </div>
          <img
            className='center mt-5 header'
            src='/header.svg'
            alt='headerbg'
            width='700px'
          />
        </div>
        <div className='col-md-6 col-sm-12 cr'>
          <h1 className='text-left my-5 display-5'>
            Best Design agency <br /> for develop your digital business
          </h1>
          <p className='text-left'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aut
            cumque, accusantium quibusdam quia nesciunt nemo omnis optio
            dolorum, pariatur deleniti aspernatur necessitatibus? Voluptatibus
            doloremque magni, eligendi facere harum tempora similique nulla
            labore.
          </p>
        </div>
      </div>
      <img src='/wave.svg' alt='wave' />
      <style jsx>{`
        margin-right: 0;
      `}</style>
    </Fragment>
  )
}

export default Header
