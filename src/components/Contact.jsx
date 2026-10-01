import React from 'react'

const Contact = ({handleclick}) => {
  console.log('Child Re-Rendered')
  return (
    <div>
      <button onClick={handleclick}>Child Increase</button>
    </div>
  )
}

export default React.memo(Contact);