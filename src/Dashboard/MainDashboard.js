import React from 'react';
import imagesen from "../Images/imagese.png"
import simple_full from '../Images/simple_full.png'

const MainDashboard = () => {
    return(
        <div className='maindashb'>
            <div className='topsection'>
                <div className='input-box'>
                    <input placeholder='Search...'/>
                    <div>
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div className='action-icon'>
                        <div className='action-icon-one'></div>
                        <div className='action-icon-two'></div>
                    </div>
            </div>
            
           <h3>A content should be here</h3>
           <div className='grid-container'>
                <div className='grid-item one'>
                    <p>19</p>
                    <p>Total Places</p>
                </div>
                <div className='grid-item two'>
                    <p>4</p>
                    <p>Scheduled Trip Cancelled</p>
                </div>
                <div className='grid-item three'>
                    <p>3850</p>
                    <p>Cash </p>
                </div>
           </div>
           <div className='picture-grid'>
               <div className='grid-box'> <img src ={imagesen} className='img'/> </div>
               <div className='grid-box'> <img src ={simple_full} className='imgs'/> </div>

                    {/* <div className='second-grid-item'>
                        <p>Registration Chart</p>
                         <img src ={imagesen} className='img'/> 
                    </div>
                    <div className='second-grid-item'>
                        <p>Payment Chart</p>
                        <img src ={simple_full} className='imgs'/>
                    </div> */}
            </div>
            
        </div>
    )
}

export default  MainDashboard;