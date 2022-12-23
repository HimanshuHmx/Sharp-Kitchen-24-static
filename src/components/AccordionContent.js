import React, { useEffect, useState } from 'react';
import AccordionHeading from './AccordionHeading';

const AccordionContent = (props) => {

    return(
        <>   
            <div>{props.children}</div>
        </>
    )
   
} 


export default AccordionContent;