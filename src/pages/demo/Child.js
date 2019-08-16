import React from 'react'

export default class Child extends React.Component { //ES6中增加了类的概念，其实ES5中已经可以实现类的功能了，只不过使用Class实现可以更加清晰，更像面向对象的写法。
    constructor(props) {
        // 执行：组件加载钱最先调用一次，仅调用一次。
        // 作用：定义状态机变量。
        // 注意：第一个语句必须为super(), 否则会报错：'this' is not allowed before super()
        super(props);
        this.state = {
            count:0
        }
    }
    componentWillMount(){
        console.log('will mount')
    }
    componentDidMount(){
        console.log('did mount')
    }
    componentWillReceiveProps(newProps){//接收从其他组件传过来的属性，，带参数
        console.log('will props'+newProps.name)
    }
    shouldComponentUpdate(){//更新api的方法 默认true
        console.log('should update')
        return true;
    }
    componentWillUpdate(){
        console.log('will update')
    }
    componentDidUpdate(){//组件更新之后
        console.log('did update')
    }
    
    render() {
       return <div>
           <p>这里是子组件，测试子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}