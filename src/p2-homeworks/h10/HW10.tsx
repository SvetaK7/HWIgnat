import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {isLoadingType, loadingAC, loadingReducer} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import preloader from "./img/preloader.svg"

function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    console.log(loading)
    const dispatch = useDispatch();

    const setLoading = () => {
        const action= loadingAC(!loading);
        console.log(action)
        dispatch(action);
        setTimeout(() => {
            dispatch(loadingAC(false));
        }, 1000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader} height={'70px'}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
