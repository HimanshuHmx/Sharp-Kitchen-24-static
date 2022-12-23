import React, { useEffect, useState } from 'react';
import AccordionContent from './AccordionContent';



const AccordionHeading = (props) => {

    // const {onClick1}=prop;

    const [selected,setselected]=useState(false);

    const toggleacc=()=>{
        setselected(!selected);
    }

    console.log("ewfewefwe",selected);

    return(
        <>
                <div onClick={toggleacc}>  

                    {props.children}  
                        <div className={selected ? 'content show' :'content'}>
                            <AccordionContent/>
                        </div>

                </div>   
        </>
    )
} 


export default AccordionHeading;