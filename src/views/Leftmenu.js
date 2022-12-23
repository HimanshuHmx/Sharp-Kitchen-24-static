import '../App.css';
// import Accordion  from './components/Accordion';
import Accordion from '../components/Accordion';
import AccordionHeading from '../components/AccordionHeading';
// import AccordionHeading from './components/AccordionHeading';
import AccordionContent from '../components/AccordionContent';
import { useState } from 'react';

function App() {

  const [toggle,setTogggle]=useState(true);

  const setExpand=()=>{
    setTogggle(!toggle);
  }
 
  const OpenV=()=>{
    console.log("the card click");
    // document.getElementById
  }
  

  return (
    <>
    <section className='container'>
      
      <div className='leftCol'>

          <div className='sharp-logo'>
             <img src="./images/SHARP_logo.svg" alt="Sharp Logo"/>
          </div>

          <nav  className={toggle ? 'mainMenu open' : 'MainMenu close'}>

            <div className='mainMenu-heading'>

                <img className='mainMenu-btn' src='./images/spacer.png' alt='Main Menu' onClick={setExpand}/>
                <span className='mainMenu-headingText'>Select Your Appliances Model</span>
            
            </div>

            <div className='menu'>


              <ul className='menuIcon'>
                <li>
                  <button className='leftbar-icons' id="drawerOven-category">

                        <img className="microwave-draweroven normal" src="./images/icons/drawer_oven.svg" alt="microwave-drawer" />
                        <img className="active" src="./images/icons2/drawer_oven.svg" alt="ICON1" />
                        <span className="tooltiptext ovenTooltip">Microwave Drawer™ Ovens</span>
                      
                  </button>
                </li>

                <li>
                    <button className='leftbar-icons' id='overRange-micro-category'>
                      
                      <img className="over-range-microwave normal" src="./images/icons/overtherange_oven.svg" alt="rangeover-microwave"  />
                      <img className="active" src="./images/icons2/overtherange_oven.svg" alt="ICON1" />
                      <span className="tooltiptext overTheRangeTooltip">Over-the-Range Microwave Ovens</span>

                    </button>
                </li>

                <li>
                    <button className='leftbar-icons' id='wallOven-category'>
                      
                      <img className="wall-ovens normal" src="./images/icons/wall_oven.svg" alt="wall-oven"  />
                      <img className="active" src="./images/icons2/wall_oven.svg" alt="ICON1" />
                      <span className="tooltiptext wallovenTooltip">Wall Ovens</span>

                  </button>
                </li>

                <li>
                    <button className='leftbar-icons' id='refrigerator-category'>

                      <img className="normal" src="./images/icons/refrigerator.svg" alt="ICON1"  />
                      <img className="active" src="./images/icons2/refrigerator.svg" alt="ICON1" />
                      <span className="tooltiptext">Refrigerators</span>

                  </button>
                </li>

                <li>
                    <button className='leftbar-icons' id='dishwasher-category'>
                       
                        <img className="normal" src="./images/icons/diswasher.svg" alt="ICON1"  />
                        <img className="active" src="./images/icons2/diswasher.svg" alt="ICON1" />
                        <span className="tooltiptext dishwasherTooltip">Dishwashers</span>
                  
                  </button>
                </li>

                <li>
                    <button className='leftbar-icons' id='cooktop-category'>
                      
                        <img className="normal" src="./images/icons/cooktop.svg" alt="ICON1"  />
                        <img className="active" src="./images/icons2/cooktop.svg" alt="ICON1" />
                        <span className="tooltiptext cooktopTooltip">Cooktops</span>

                    </button>
                </li>

                <li>
                    <button className='leftbar-icons' id='hoodRange-category'>

                        <img className="normal" src="./images/icons/hood range.svg" alt="ICON1"  />
                        <img className="active" src="./images/icons2/hood range.svg" alt="ICON1" />
                        <span className="tooltiptext rangeHoodsTooltip">Range Hoods</span>

                  </button>
                </li>

              </ul>
              
              
              <ul className='accordion-container'>
              
                <li className='menuAccordion microwave-accordion'>
                  <div className='title'>   
                      <label htmlFor="first">Microwave Drawer™ Ovens</label>
                      <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                  </div>  

                  <ul className='content'>
                      <li>

                        <div className='container-content microwave-content' onClick={OpenV}>

                           <div className='card-content'>

                              <div className='content-title'>                        
                                  <p>SMD2499FS</p>
                                  <img src='./images/icons/checkbox.png'/>
                              </div>

                              <div className='content-description'>
                                  <p>24 in. Built-In Smart Convection Microwave Drawer™ Oven</p>
                                  <div className='avatar-img'>
                                     <img  src='./images/final/SMD2449FS.png'/>
                                  </div>
                              </div>
                              
                            </div>  
                              <button>Add to My Kitchen</button>
                        </div>

                      </li>
                      
                      <li>
                        <div className='container-content microwave-content'>

                           <div className='card-content'>
                              <div className='content-title'>                        
                                  <p>SMD2499FS</p>
                                  <img src='./images/icons/checkbox.png'/>
                              </div>

                              <div className='content-description'>

                                  <p>24 in. Built-In Smart Convection Microwave Drawer™ Oven</p>
                                  <div className='avatar-img'>
                                     <img  src='./images/final/SMD2449FS.png'/>
                                  </div>
                                  
                              </div>
                            </div>  

                              <button>Add to My Kitchen</button>
                        </div>
                      </li>
                    
                      <li>
                        <div className='container-content microwave-content'>

                           <div className='card-content'>
                              <div className='content-title'>                        
                                  <p>SMD2499FS</p>
                                  <img src='./images/icons/checkbox.png'/>
                              </div>

                              <div className='content-description'>
                                  <p>24 in. Built-In Smart Convection Microwave Drawer™ Oven</p>
                                  <div className='avatar-img'>
                                     <img  src='./images/final/SMD2449FS.png'/>
                                  </div>
                              </div>
                            </div>  

                              <button>Add to My Kitchen</button>
                        </div>
                      </li>

                  </ul>



                </li>

                <li className='menuAccordion overRange-micro-accordion'>

                  <div className='title'>                    
                      <label htmlFor="second">Over-the-Range Microwave Ovens</label>
                      <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                  </div>
                 
                  <ul className='content'>

                      <div className='container-content overRange-micro-content'>

                          <div className='card-content'>  
                            <div className='content-title'>                        
                                <p>SMD2499FS</p>
                                <img src='./images/icons/checkbox.png'/>
                            </div>
                            <div className='content-description'>
                                <p>24 in. Built-In Smart Convection Microwave Drawer™ Oven</p>
                                <img className='avatar-img' src='./images/final/SMD2449FS.png'/>
                            </div>
                          </div>

                            <button>Add to My Kitchen</button>
                      </div>

                  </ul>

                </li>

                <li className='menuAccordion wallOven-accordion'>

                    <div className='title'>   
                        <label htmlFor="third">Wall Ovens</label>
                        <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                    </div>

                    <ul className='content'>
                      <div className='container-content wallOven-content'>
                          <p>
                            content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                          </p>
                      </div>
                    </ul>

                </li>

                <li className='menuAccordion refrigerator-accordion'>
                  
                  <div className='title'>   
                      <label htmlFor="fourth">Refrigerators</label>
                      <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                  </div>   

                  <ul className='content'>
                     <div className='container-content refrigerator-content'>
                          <p>
                            content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                          </p>
                      </div>
                  </ul>

                </li>

                <li className='menuAccordion dishwasher-accordion'>

                  <div className='title'>   
                      <label htmlFor="fifth">Dishwashers</label>
                      <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                  </div>

                  <ul className='content'>
                    <div className='container-content dishwasher-content'>
                        <p>
                          content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                          content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                          content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                        </p>
                    </div>
                  </ul>

                </li>

                <li className='menuAccordion cooktop-acccordion'>
                  
                  <div className='title'>   
                      <label htmlFor="sixth">Cooktops</label>
                      <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                  </div>

                  <ul className='content'>
                    <div className='container-content cooktop-content'>
                      <p>
                        content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                        content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                        content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                      </p>
                    </div>
                  </ul>
                </li>

                <li className='menuAccordion rangeHoods-accordion' >
                  
                  <div className='title'>   
                      <label htmlFor="seventh">Range Hoods</label>
                      <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                  </div> 

                  <ul className='content'>
                    <div className='container-content rangeHoods-content'>
                        <p>
                          content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                          content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                          content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                        </p>
                    </div>
                  </ul>
                </li>

              </ul>

                {/* <li>
                  <div className='accordion'>Accordion 2
                    <ul>
                      <li>Product 1</li>
                      <li>Product 2</li>
                      <li>Product 3</li>
                    </ul>
                  </div>
                </li> */}

                {/* <li>
                  <Accordion>
                    <AccordionHeading>
                      <div>This will be AccordionHeading for Hotspot </div>
                    </AccordionHeading>
                    <AccordionContent>
                      <div>This will be AccordionContent for Hotspot </div>
                    </AccordionContent>
                  </Accordion>
                </li> */}

              
            </div> 
            
          </nav>
    </div>



      {/* <button className='navigate-button'>
        <img className='navigate-icon' src='./images/spacer.png'/>
      </button>

      <div className='navigate'>
          
          <div className='navigate-body close'>
            <div className='title-nav-header'>
              <p>How to navigate</p>
            </div>
        

                

              <div className='navigate-slide' id='navigateDiv'>
                
                  <div className='navigate-row'> 
                    <div className='navigate-row-content navigate-row-rotate'>   
                        <div className='navigate-title'>ROTATE</div>
                        <img src='./images/final/navigation_rotate.png' alt=''/>
                    </div>
                  </div>

                  <div className='navigate-row'>
                      <div className='navigate-row-content navigate-row-zoom'>
                          <div className='navigate-title'>ZOOM</div>
                          <img src='./images/final/navigation_zoom.png' alt=''/>
                      </div>
                  </div>

                  <div className='navigate-row'>
                        <div className='navigate-row-content navigate-row-move'>
                                <div className='navigate-title'>MOVE</div>
                                <img src='./images/final/navigation_move.png' alt=''/>
                        </div>
                  </div>

              </div>
          </div>

    </div> */}

        <div className="howToNavigate show">
              <button className='Navigate-btn'>
                <img className='icon-howToNavigate' src='./images/spacer.png'/>
              </button>

              <div className='howToNavigate-content'>
            
                <h3>How to navigate</h3>
         
                <div className='nav-description rotate'>   
                    <span className="text">ROTATE</span>
                    <img src='./images/final/navigation_rotate.png' className='htn-icon icon-rotate' alt=''/>
                </div>
          
                <div className='nav-description zoom'>
                    <span className="text">ZOOM</span>
                    <img src='./images/final/navigation_zoom.png' className='htn-icon icon-zoom' alt=''/>
                </div>
        
                <div className='nav-description move'>
                    <span className="text">MOVE</span>
                    <img src='./images/final/navigation_move.png' className='htn-icon icon-move' alt=''/>
                </div>
          
            </div>

        </div>




        <div className='hotspots-cont'>

                <li className='menuAccordion wallOven-accordion'>
                      <div className='title'>   
                          <label htmlFor="third">Wall Ovens</label>
                          <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                      </div>

                      <ul className='content'>
                        <div className='container-content wallOven-content'>
                            <p>
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            </p>
                        </div>
                      </ul>
                </li>

                <li className='menuAccordion wallOven-accordion'>
                      <div className='title'>   
                          <label htmlFor="third">Wall Ovens</label>
                          <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                      </div>

                      <ul className='content'>
                        <div className='container-content wallOven-content'>
                            <p>
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            </p>
                        </div>
                      </ul>
                </li>

                <li className='menuAccordion wallOven-accordion'>
                      <div className='title'>   
                          <label htmlFor="third">Wall Ovens</label>
                          <img className='arrowIcon' src="./images/arrow.svg" alt='' />
                      </div>

                      <ul className='content'>
                        <div className='container-content wallOven-content'>
                            <p>
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                              content sdfsdf sdfjshdfk skdjf skdfhsdhfskdfhsk s dfssd fs
                            </p>
                        </div>
                      </ul>
                </li>

          </div>



      {/* </div> */}



    </section>
    </>
  );
}



export default App;
