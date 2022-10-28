import React from 'react'
import Featrured from './featured'
import Image from './image'
import Navbar from './navbar'
import Recently from './Recently'

const Home = () => {
  return (<>
  <Navbar />
<Image/>
<Featrured/>
<Recently/>

  </>

  )
}

export default Home