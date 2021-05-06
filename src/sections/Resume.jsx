import React, { Component } from 'react';
import './resume.css';
import resume_left_bg from '../images/resume_left_bg.svg';
import intro_right_bg from '../images/intro_right_bg.svg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import online_mahta_img from '../images/online_mahta_img.png';
import mahta_img from '../images/mahta_img.png';
import mahta_app from '../images/mahta_app.png';

export default class Resume extends Component {
    render() {
        return (
            <div className="resume_con">

                <div id="resumeSec"/>

                <img src={resume_left_bg} className="resume_left_bg" alt=""/>
                <img src={intro_right_bg} className="resume_right_bg" alt=""/>

                <div className="sec_title_con">
                    <div className="sec_title_t">{"نمونه کارها"}</div>
                    <div className="sec_subtitle">{"آخرین کارهای مارو مشاهده کنید"}</div>
                    <div className="sec_title_undline"><div className="sec_title_innerLine"/></div>
                </div>

                <Slider classNames={{slider:"slider"}}>
                    {content.map((article, index) => <div className="resume_page_con" key={index}>
                        <img src={article.img} className="online_mahta_img"/>
                        <div style={{position:"absolute", width:"100%", height:"100%"}}/>
                    </div>)}
                </Slider>
                
            </div>
        )
    }
}

const content = [
    {
        title:"1",
        description:"2",
        img:online_mahta_img
    },
    {
        title:"1",
        description:"2",
        img:mahta_app
    },
    {
        title:"1",
        description:"2",
        img:mahta_img
    }
]
