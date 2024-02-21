import React from 'react'


const Developer = () => {

  const projectIntodo = () =>
  {
    alert("project is in todo");
  }

  const projectInProgress = () =>
  {
    alert("project is in progress")
  }

  const projectDone = () =>
  {
    alert("project is completed!!")
  }



  return (
    <div>
        <h1 className='dev'>Developer Portal</h1>
        <h1 className='dev1'>Tasks</h1>
        <button className='devbtn' onClick={projectIntodo}>Todo</button>
        <button className='devbtn' onClick={projectInProgress}>In Progress</button>
        <button className='devbtn' onClick={projectDone}>done</button>
    </div>
  )
}

export default Developer