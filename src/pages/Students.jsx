import React from 'react'

const Students = () => {
  return (
    <>
    <section>
      <div className=" homeText"> 
        <p className="Student">Students Details</p>

        <div className="table">
          <div className="box a">Name</div>
          <div className="box b">Age</div>
          <div className="box c">Course</div>
          <div className="box d">Batch</div>
          <div className="box e">Change</div>
        </div>
       <button className='add'>
        Add New Student
       </button>

      </div>
    </section>
  </>
  )
}

export default Students;