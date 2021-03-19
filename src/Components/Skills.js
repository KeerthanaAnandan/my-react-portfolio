import React from 'react';
import "./Skills.css"

function Skills() {
    return (
        <div className="skills">
        
    
      <h2 className="text-center">My Skills</h2>
      <div class="bottom-line"></div>
    

      <div class="skills-row row"  data-aos="zoom-in-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                     

               <div class="skillContent jsSkill col-md-4 text-center" >
                      <i class="fab fa-react fa-5x"></i>
                      <h5><strong>React Js</strong></h5>
                      
                  </div>
     
                  <div class="skillContent jsSkill col-md-4 text-center">
                      <i class="fab fa-js-square fa-5x"></i>
                      <h5><strong>JavaScript</strong></h5>
                  </div>


                  <div class="skillContent html col-md-4 text-center">
                      <i class="fab fa-html5 fa-5x"></i>
                      <h5 ><strong>HTML5</strong></h5>
                  </div> 
                  

                  <div class="skillContent css col-md-4 text-center">
                      <i class="fab fa-css3-alt fa-5x"></i>
                      <h5 ><strong>CSS3</strong></h5>
                  </div>
                     

                 
                  <div class="skillContent bootstrap col-md-4 text-center">
                    <i class="fab fa-bootstrap fa-5x"></i>
                      <h5 ><strong>React Bootstrap</strong></h5>
                  </div> 

                  <div class="skillContent jsSkill col-md-4 text-center">
                      <i class="fab fa-medium fa-5x"></i>
                      <h5><strong>Material UI</strong></h5>
                  </div>
                  
                  <div class="skillContent jquery col-md-4 text-center">
                    <i class="fab fa-js fa-5x"></i>
                    <h5 ><strong>JQuery</strong></h5>
                </div>
            


                  <div class="skillContent github col-md-4 text-center">
                      <i class="fab fa-github fa-5x"></i>
                      <h5 ><strong>Github</strong></h5>
                  </div>
                

                
              </div> 
              </div>
              
        

    )
}

export default Skills;
