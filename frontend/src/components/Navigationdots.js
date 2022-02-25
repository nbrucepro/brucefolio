import React from 'react'

const Navigationdots = ({active}) => {
  return (
    <div className='navigation'>
        {['home','about','work','test'].map((item,index)=>(
<a 
    href={'#'+item}
    key={item+index}
    className='navigation-dots' 
    style={active === item ?{background:'#313BAC'}:{}}
/>
        ))}
    </div>
  )
}

export default Navigationdots