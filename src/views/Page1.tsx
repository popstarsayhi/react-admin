import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import store from "../store";
import NumStatus from "../store/num-status";

const Page1 = () => {

    const dispatch = useDispatch()

    //获取仓库数据
    const {num, sarr} = useSelector((state:RootState) => ({
        num: state.handleNum.num,
        sarr: state.handleArr.sarr
    }))

    const changeNum = ()=>{
        dispatch({type:"add1"})
    }

    const changeNumFive = ()=>{
        dispatch({type:'add3', val:5})
    }

    const changeNum2 = ()=>{
        //异步
        dispatch(NumStatus.asyncActions.asyncAdd1)
    }

    return (
        <div>
            <p>This is Page 1 </p>
            <hr/>
            <p>{num}</p>
            <br/>
            <button onClick={changeNum}>Click to plus 1</button>
            <button onClick={changeNum2}>Click to plus 1 async</button>
            <button onClick={changeNumFive}>Click to plus 5</button>
            <br/>
            <br/>
            <p>{sarr}</p>
        </div>
    );
};

export default Page1;
