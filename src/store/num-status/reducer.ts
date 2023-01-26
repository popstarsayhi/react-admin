import handleNum from "./index";

const reducer = (state = {...handleNum.state},
                 action: { type: string, val: number }) => {

    //深拷贝
    let newState = JSON.parse(JSON.stringify(state))

    //优化思路
    //switch的做法是拿着小括号里面action.type的和case后面的每一个进行对比， 很像遍历
    //把case后面的值做成对象

    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState)
    //         break
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState, action)
    //         break
    //     default:
    //         break
    // }

    for(let key in handleNum.actionNames){
        //判断是不是相等
        if(action.type === handleNum.actionNames[key]){
            handleNum.actions[handleNum.actionNames[key]](newState,action)
            break
        }
    }

    return newState
}

export default reducer