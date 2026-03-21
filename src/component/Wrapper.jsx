import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[1120px] mx-auto px-4 sm:px-8 md:px-12'>
      {children}
    </div>
  )
}

export default Wrapper
 