
//类型声明里面不要直接使用import..from..， 而是使用import("./store")这种语法
//TS中提供了 ReturnType用来获取函数的返回值
type RootState = ReturnType<typeof import("../store").getState>

interface Window{
    __redux_devtools_extension__ : function
}