import React, { Component } from 'react';
import './serviceSec.css';
import serv_seo from '../images/serv_seo.jpg';
import serv_app from '../images/serv_app.jpg';
import serv_web from '../images/serv_web.jpg';
import serv_web_ui from '../images/serv_web_ui.jpg';
import serv_app_ui from '../images/serv_app_ui.jpg';
import serv_branding from '../images/serv_branding.jpg';
import seo_icon from '../images/seo_icon.svg';
import web_icon from '../images/web_icon.svg';
import web_ui_icon from '../images/web_ui_icon.svg';
import app_ui_icon from '../images/app_ui_icon.svg';
import branding_icon from '../images/branding_icon.svg';
import app_icon from '../images/app_icon.svg';


export default class ServiceSec extends Component {
    render() {
        return (
            <div className="service_s_con">
                <div id="serviceSec"/>

                <div className="sec_title_con">
                    <div className="sec_title_t">{"خدمات"}</div>
                    <div className="sec_subtitle">{"چه چیزی برای شما فراهم کرده ایم؟"}</div>
                    <div className="sec_title_undline"><div className="sec_title_innerLine"/></div>
                </div>

                <div className="service_s_grid">
                    <ServiceCard src={serv_seo} icon={seo_icon} bgColor="#A1BF0C" title="بهینه سازی سئو"/>
                    <ServiceCard src={serv_app} icon={app_icon} bgColor="#BF0C0C" title="طراحی اپلیکیشن حرفه ای"/>
                    <ServiceCard src={serv_web} icon={web_icon} bgColor="#0CB3BF" title="طراحی سایت حرفه ای"/>
                    <ServiceCard src={serv_web_ui} icon={web_ui_icon} bgColor="#0CBF83" title="طراحی رابط کاربری سایت"/>
                    <ServiceCard src={serv_app_ui} icon={app_ui_icon} bgColor="#950CBF" title="طراحی رابط کاربری اپلیکیشن"/>
                    <ServiceCard src={serv_branding} icon={branding_icon} bgColor="#0C7DBF" title="برندینگ شبکه های اجتماعی"/>
                </div>
                
            </div>
        )
    }
}

function ServiceCard(props){
    return(
        <div className="service_card_con">
            <img src={props.src} className="service_card_bgimg"/>
            <div className="service_card_bgimg_overlay" style={{backgroundColor:props.bgColor}}/>
            <img className="service_logo" src={props.icon} />
            <div className="service_title">{props.title}</div>
            
        </div>
    )
}
