import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <section className='nav'>
        {/* navbar section */}
      <div className="navsec">
          <Navbar/>

      </div>

      {/* navPage section */}
      <div className="pagemain">
          <NavPage/>

      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage