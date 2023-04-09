import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, initStateType} from "./bll/themeReducer";
import {AppStoreType} from "p2-homeworks/hw10/bll/store";

function HW12() {
    // const {themes, activeTheme} = useSelector<AppStoreType, initStateType>(state => state.theme)

    const dispatch = useDispatch();
    const onChangeCallback = (activeTheme: string) => {
        const action = changeThemeC(activeTheme)
        dispatch(action)
    }

    return (
      <div></div>
        // <div className={s[activeTheme]}>
        //     <hr/>
        //     <span className={s[activeTheme + '-text']}>
        //         homeworks 12
        //     </span>
        //
        //     <SuperSelect options={themes} value={activeTheme} onChangeOption={onChangeCallback}/>
        //
        //     <hr/>
        // </div>
    );
}

export default HW12;
