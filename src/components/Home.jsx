import React from 'react'

const Home = () => {


  localStorage.setItem('Age','26')
  const hh= localStorage.getItem('Age')
  console.log(hh)


  const OB={
    name:"Sreeram",
    Age:26
  }

  localStorage.setItem('Obj', JSON.stringify(OB))

  const ram = JSON.parse(localStorage.getItem('Obj')) 
  console.log(ram.Age)
  return (
    <div className="home">
      Home
    </div>
  )
}

export default Home