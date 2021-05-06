import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./header.css";
import logo from '../images/logo-512.png';
import menu from '../images/menu.svg'; 
import menu_close from '../images/menu_close.svg'; 

export default class Header extends Component {

    state = {
        showBackdrop:false,
        menu_img : menu
    }

    componentDidMount(){
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.onResize);
    }

    onHome = ()=>{
        window.location.href="/"
    }

    onResize = ()=>{
        if(window.innerWidth>768 && this.state.showBackdrop){
            this.closeMenu();
        }
    }

    onMenu = ()=>{
        if(this.state.showBackdrop){
            this.closeMenu();
        }else{
            this.openMenu();
        }
    }

    openMenu = ()=>{
        this.nav_bar.style.right = "0rem";
        this.header_con.style.boxShadow = "none";
        this.header_con.style.opacity = 1;
        this.setState({showBackdrop:true, menu_img:menu_close})
    }

    closeMenu = ()=>{
        this.nav_bar.style.right = "-14rem";
        this.header_con.style.boxShadow = "0 0.1rem 4rem 0.1rem #0cb3bf5d";
        this.header_con.style.opacity = 0.97;
        this.setState({showBackdrop:false, menu_img:menu})
    }

    
    render() {
        return (
            <React.Fragment>
            <div className="header_con" ref={r=>this.header_con=r}>

                <img className="header_icon" onClick={this.onHome} src={logo} alt="راستین ایده"/>

                {/* <a className="header_link" style={{color:"#0CB3BF"}} href="/">{"خانه"}</a> */}
                <a className="header_link" href="#serviceSec">{"خدمات"}</a>
                <a className="header_link" href="#resumeSec">{"نمونه کارها"}</a>
                {/* <a className="header_link" href="/">{"سفارش محصول"}</a> */}
                <a className="header_link" href="#teamSec">{"تیم ما"}</a>
                <a className="header_link" href="#contactSec">{"تماس با ما"}</a>

                <img className="header_menu_icon" src={this.state.menu_img} onClick={this.onMenu}/>

                <Backdrop show={this.state.showBackdrop} onClick={this.closeMenu}/>

            </div>
            <div id="nav_bar" ref={r=>this.nav_bar=r}>

                <a className="nav_bar_link" href="/">{"خانه"}</a>
                <a className="nav_bar_link" href="#serviceSec">{"خدمات"}</a>
                <a className="nav_bar_link" href="#resumeSec">{"نمونه کارها"}</a>
                {/* <a className="nav_bar_link" href="/">{"سفارش محصول"}</a> */}
                <a className="nav_bar_link" href="#teamSec">{"تیم ما"}</a>
                <a className="nav_bar_link" href="#contactSec">{"تماس با ما"}</a>

            </div>
            </React.Fragment>
        )
    }
}

function Backdrop(props){
    let jsx = null;
    
    if(props.show){
        jsx = (
            <div className="nav_backdrop" onScroll={props.onClick} onTouchStart={props.onClick} onClick={props.onClick} 
            style={{position:"fixed", zIndex:50,top:0, width:"100vw",
            height:"100vh", backgroundColor:"black", opacity:0.75}}/>
        )
    }
    return(
        ReactDOM.createPortal(jsx, document.getElementById("backdrop_hook"))
    )
}
