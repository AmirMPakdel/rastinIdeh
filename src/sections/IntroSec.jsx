import React, { Component } from 'react';
import intro_left_bg from '../images/intro_left_bg.svg';
import intro_right_bg from '../images/intro_right_bg.svg';
import intro_pic from '../images/intro_pic.svg';
import "./introSec.css"

export default class IntroSec extends Component {

    onResume =()=>{
        window.location.href = "#resumeSec"
    }


    render() {
        return (
            <div className="intro_sec_con">

                <img src={intro_left_bg} className="intro_left_bg" alt=""/>
                <img src={intro_right_bg} className="intro_right_bg" alt=""/>

                <div className="intro_sec_holder1">

                    <div className="intro_sec_holder1_t1">{"با راستین ایده"}</div>

                    <div className="intro_sec_holder1_t2">{"ایده هات رو عملی کن!"}</div>

                    <div className="intro_sec_holder1_t3">{"طراحی و ساخت وب سایت / طراحی و ساخت اپلیکیشن"}</div>

                    <div className="intro_sec_holder2">
                        {/* <div className="main_btn_bl">{"دکمه"}</div> */}
                        <div className="main_btn_gr" onClick={this.onResume}>{"نمونه کار ها"}</div>
                    </div>

                </div>

                <img src={intro_pic} className="intro_pic" alt=""/>
                
                
            </div>
        )
    }
}
