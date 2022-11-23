import React from 'react'
import { XMasonry, XBlock} from "react-xmasonry"; 
import everLastingSky from '../Components/images/everlastingsky_2.jpg'
import cloudyFuse from '../Components/images/cloudyfuse.jpg'
import cloudyKnoxville from '../Components/images/cloudyknoxville_1.jpg'
import cloudySwitch from '../Components/images/cloudyswitch.jpg'
import cochiti from '../Components/images/cochiti_1.jpg'
import everLastingCap from '../Components/images/everlastingcap.jpg'
import heavyFinal from '../Components/images/heavyfinal.jpg'
import peach from '../Components/images/peach_1.jpg'
import peachReal from '../Components/images/peachrealestate.jpg'
import winterHarlem from '../Components/images/winterharlem.jpg'
import winterNeva from '../Components/images/winterneva_1.jpg'
import heavyRain from '../Components/images/heavyrain_2.jpg'


function Events(){
  
        return (
            <XMasonry>   
                <XBlock>
                     <div className='card'>
                        <img src={winterHarlem} width='100%' />
                    </div>
                </XBlock>
                <XBlock>
                    <div className='card'>
                    <img src={heavyFinal} width='100%' />
                    </div>
                </XBlock>
                <XBlock>
                    <div className='card'>
                        <img src={everLastingCap} width='100%' />
                    </div>
                </XBlock>
                <XBlock>
                    <div className='card'>
                        <img src={cloudyKnoxville} width='100%' />
                    </div>
                </XBlock>
                
                <XBlock>
                    <div className='card'>
                        <img src={everLastingSky} width='100%' />
                    </div>
                </XBlock>
                <XBlock>
                    <div className='card'>
                    <img src={peach} width='100%' />
                    </div>
                </XBlock>
                    
                <XBlock>
                     <div className='card'>
                        <img src={cloudyFuse} width='100%' />
                    </div>
                </XBlock>

                <XBlock>
                    <div className='card'>
                        <img src={cloudySwitch} width='100%' />
                    </div>
                </XBlock>

                <XBlock>
                    <div className='card'>
                    <img src={peachReal} width='100%' />
                    </div>
                </XBlock>


                <XBlock>
                    <div className='card'>
                        <img src={cochiti} width='100%' />
                    </div>
                </XBlock>

                <XBlock>
                    <div className='card'>
                        <img src={winterNeva} width='100%' />
                    </div>
                </XBlock>
                    
                <XBlock>
                    <div className='card'>
                        <img src={heavyRain} width='100%' />
                    </div>
                </XBlock>
                   
            </XMasonry>
              
        )
}

export default Events




