import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../image/center2.jpg";

const Overview = () => {
   return(
        
      <Root>
       <div className='flex'>
       {/* <h2>Company Overview</h2> */}
           <div className="flex2">
       <div className="image">     
       {/* <img src='https://raisingchildren.net.au/__data/assets/image/0033/48786/healthy-food-school-age-children.jpg' alt="props"/> */}
       <img src={image} style={{height: '400px', width: '450px'}} alt="prop"/>
       </div>
       <div className="flex3">
        <h1><b>ABOUT AM CarMates CAR MATS</b></h1>
        <br />
           <p>CliMats ® are luxury car mats that are digitally measured for
             a perfect fit. Unlike others in the market, these all-weather/waterproof
              custom car mats cover the entire floor and side panels to provide maximum 
              protection. They are made with an anti-skid surface to provide long-lasting
              traction and durability. CliMats ® are designed with the highest grade 
              synthetic leather to provide a luxurious interior finish to further enhance
               your driving experience.</p>
               {/* <div className="two_button">
                   <a href="https://www.w3schools.com/cssref/css3_pr_box-shadow.asp" target="blank" className="btn3">About Us</a>
                   <a href="#" className="btn4">Our Story</a>
                  
 
               </div> */}
              </div>
            </div>
          </div>
          </Root>
   )
};
export default Overview;
 
 
const Root = styled.section`
.flex {
   background:url(images/new1.jpg);
   background-size: cover;
   height: auto;
   color: black;
   margin-top: 0px
}
.flex2{
  display: flex;
  margin: 22px 100px 22px 100px;
  flex: 1;
  align-items: center;
  & > div{
    flex:1;
  }
  img{
    margin:auto;
  }
}

  `
