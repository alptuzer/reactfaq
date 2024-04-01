import React from 'react'
//rfc 

function Accordion({title,active,setActive}) {


  return (
    <div>
      <div className='accordion'>
        <div className='accordionHeading' >
            <div className='container'>
                <p>{title}</p>
                <span onClick={()=> setActive(title)}> Click ME</span>
            </div>
        </div>
        <div className={(active===title ? "show" : "" ) + "accordionContent" }>
            <div className='container'>
                <p>Lorem İpsus Sjfru Mokfr Ajjfj jfjjf kfjrj</p>
            </div>
        </div>
      </div> 
    </div>
  )
}


export default Accordion;
