import React from 'react'
import logo from '../../assets/sakura.png'
import firstImg from '../../assets/img1.jpg'
import secondImg from '../../assets/img2.jpg'
import './style.css'
import {NavLink} from 'react-router-dom';
const HeaderImg = () =>{
    return (
      <div className="Post-latest">
        <div className="Pt-img">
          <img src={require("../../assets/sakura.png")} alt="" />
        </div>
        <div className="Pt-desc">
          <h1>title</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <div className="Pt-link">
            <NavLink exact to="/post">READ</NavLink>
          </div>
        </div>
      </div>
    );
    
}
export default HeaderImg;