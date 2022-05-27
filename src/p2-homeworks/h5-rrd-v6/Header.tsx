import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css';

function Header() {
    const [isHover, setIsHover] = useState(true);

    const hoverMouseOver = ()=>{
        setIsHover(false)
    }
    const hoverMouseOut = ()=>{
        setIsHover(true)
    }

    const classMouseHover = `${s.navigateLinks} ${isHover ? '' : s.menuLinksActive }`

    return (
        <div style={{display: 'flex'}}>
            <div className={classMouseHover}  onMouseOver={hoverMouseOver} onMouseOut={hoverMouseOut}>
                <div className={s.links}>
                    <NavLink to={PATH.PRE_JUNIOR} // для примера со style
                             style={(params) => {
                                 return {color: params.isActive ? 'brown' : 'burlywood'}
                             }}>Pre junior</NavLink>
                    <NavLink to={PATH.JUNIOR}
                             className={({isActive}) => isActive ? s.act : s.def}>Junior</NavLink>
                    <NavLink to={PATH.JUNIORPLUS}
                             className={({isActive}) => isActive ? s.act : s.def}>Junior+</NavLink>
                </div>
                <div className={s.menuLinks}></div>
            </div>
        </div>


    )
}

export default Header
