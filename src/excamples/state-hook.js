import React, { useState, useEffect } from 'react'
import  ReactDOM  from 'react-dom';

// export default class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tikladiniz.</p>
//                 <button onClick={()=> this.setState({count: this.state.count +1})}>+1</button>
//             </div>
//         )
//     }
// }

const App = (props) => { 
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);

    //text
    useEffect(() => {
        console.log('text');
    }, [text])

    //count
    useEffect(() => {
        console.log('count');

        localStorage.setItem('count', count)
    }, [count])

    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount');

        const countData = localStorage.getItem('count');
        if(countData){
            setCount(Number(countData))
        }
    }, [])

    //componentDidMount componentDidUpdated
    useEffect(() => {
        console.log('componentDidMount - componentDidUpdated');
    })

    return (
        <div>
            <p>Butona {count} kez tikladiniz.</p>
            <p>Girilen text: {text}</p>
            <button onClick={()=> setCount(count +1)}>+1</button>
            <button onClick={()=> setCount(count -1)}>-1</button>
            <button onClick={()=> setCount(props.count)}>reset</button>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: ''
}


ReactDOM.render(<App/>, document.getElementById('root'));