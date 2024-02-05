import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

function Track() {
    const {purchasedProductsData}=useContext(MyContext)
  return (
    <div>
{purchasedProductsData.map((item)=>{
    <>item.title</>
    
})}
    </div>
  )
}

export default Track