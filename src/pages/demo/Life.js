import React from 'react'
import Child from './Child'
import './index.less'

export default class Life extends React.Component { //ES6中增加了类的概念，其实ES5中已经可以实现类的功能了，只不过使用Class实现可以更加清晰，更像面向对象的写法。
    constructor(props) {
        // 执行：组件加载钱最先调用一次，仅调用一次。
        // 作用：定义状态机变量。
        // 注意：第一个语句必须为super(), 否则会报错：'this' is not allowed before super()
        super(props);
        this.state = {
            count:0
        }
    }
    headleAdd=()=>{
        this.setState({
            // setState 是一个方法
            //setState本质是通过一个队列机制实现state更新的。 执行setState时，会将需要更新的state合并后放入状态队列，而不会立刻更新state，队列机制可以批量更新state。
            count: this.state.count + 1
        })
    }

    headleClick() {
        this.setState({
            // setState 是一个方法
            //setState本质是通过一个队列机制实现state更新的。 执行setState时，会将需要更新的state合并后放入状态队列，而不会立刻更新state，队列机制可以批量更新state。
            count: this.state.count + 1
        })
    }

    render(){//生命周期函数
        //  执行：componentWillMount调用之后， componentDidMount调用之前。
        // 作用：渲染挂载组件。
        // 触发：1、初始化加载页面，2、状态机改变setState，3、接收新的props（父组件更新）
        // 注意：组件必要函数，不能在函数内使用setState改变状态机。
        return <div className="content">
            <p>React生命周期介绍</p>
            <button onClick={this.headleAdd}>点击一下</button>
            <button onClick={this.headleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}