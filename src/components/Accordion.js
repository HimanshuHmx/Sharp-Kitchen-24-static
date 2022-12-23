import React, { useEffect, useState } from 'react';
import AccordionHeading from './AccordionHeading';


const Accordion = (props) => {
    
    return(
        <>
         <div className="acc-title">
             {props.children}    
        </div>
        </>
    )
} 

export default Accordion;