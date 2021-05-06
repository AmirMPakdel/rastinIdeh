import React, { Component } from 'react';
import './ourTeam.css';
import telegram from '../images/telegram.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import team_rastin from '../images/team_rastin.jpg';
import team_amirm from '../images/team_amirm.jpg';
import team_amirh from '../images/team_amirh.jpg';
import team_hooshang from '../images/team_hooshang.jpg';


export default class OurTeam extends Component {
    render() {
        return (
            <div className="ourteam_con">

                <div id="teamSec"/>

                <div className="sec_title_con">
                    <div className="sec_title_t">{"تیم ما"}</div>
                    <div className="sec_subtitle">{"اعضای تیممون رو بشناسید و باهاشون در ارتباط باشید"}</div>
                    <div className="sec_title_undline"><div className="sec_title_innerLine"/></div>
                </div>

                <div className="team_card_row">

                    <div className="ourteam_blue_bar"/>
                    <TeamCard img={team_amirh} name="امیرحسین دانشمند" title="Co-Founder & CEO"
                    telegram="https://t.me/Daneshmand_amir" 
                    linkedin="" 
                    instagram="https://www.instagram.com/amir.hossein.daneshmand/"/>

                    <TeamCard img={team_rastin} name="علیرضا بامداد" title="Co-Founder & CTO"
                    telegram="https://t.me/Rastin_B"
                    linkedin="" 
                    instagram="https://www.instagram.com/rastin.bm"/>

                    <TeamCard img={team_amirm} name="امیرمحمد پاکدل" title="Front-End Developer"
                    telegram="https://t.me/AmirMPakdel" 
                    linkedin="https://www.linkedin.com/in/amirmohammad-pakdel-915b0914b" 
                    instagram="https://www.instagram.com/amirmohammadpackdel/"/>

                    <TeamCard img={team_hooshang} name="علیرضا رمضانی" title="UX/UI Designer"
                    telegram="https://t.me/zsezs4" 
                    linkedin="https://www.linkedin.com/in/alireza-ramezani-a05083162" 
                    instagram="https://www.instagram.com/alirezaa.ramezaniii/"/>

                </div>
                
            </div>
        )
    }
}

function TeamCard(props){
    return(
        <div className="team_card_con">
            
            <div className="team_card_frame">
                <img className="team_card_img" src={props.img}/>
            </div>

            <div className="team_card_holder1">
                <div className="team_card_name">{props.name}</div>
                <div className="team_card_title">{props.title}</div>
            </div>

            <div className="team_card_holder2">
                <img className="team_card_sm" onClick={()=>openSMLink(props.telegram)} src={telegram}/>
                <img className="team_card_sm" onClick={()=>openSMLink(props.linkedin)} src={linkedin}/>
                <img className="team_card_sm" onClick={()=>openSMLink(props.instagram)} src={instagram}/>
            </div>

        </div>
    )
}

const openSMLink = (link)=>{
    if(link){
        window.open(link)
    }
}