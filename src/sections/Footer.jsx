import React, { Component } from 'react';
import './footer.css';
import co_telegram from '../images/co_telegram.svg';
import co_instagram from '../images/co_instagram.svg';
import linkedin from '../images/linkedin.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_con">
                <div id="contactSec" style={{position:"absolute", top:"-4.5rem"}}/>
                <div className="footer_sm_con">
                    <img className="footer_sm" src={co_telegram} 
                    onClick={()=>{openLink("https://t.me/rastinIdeh")}}/>
                    <img className="footer_sm" src={linkedin}
                    onClick={()=>{openLink("https://linkedin.com/in/rastinideh-company-33b1721b9")}}/>
                    <img className="footer_sm" src={co_instagram}
                    onClick={()=>{openLink("https://www.instagram.com/rastinideh")}}/>
                </div>
                
                <div className="footer_reserved">
                    {"تمامی حقوق این سایت به شرکت ایده پردازان فناورگستر راستین تعلق دارد"}
                </div>
            </div>
        )
    }
}

const openLink = (link)=>{
    if(link){
        window.open(link)
    }
}