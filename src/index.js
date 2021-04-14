import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Searchbar from '../src/component/Searchbar/searchbar'
import './index.css'
function Title(){
    return <h3 className='title'>Weather App</h3>
}
function Foot(){
    return <p className='foot'>copy right Evan Lee 2020</p>
}
class App extends Component{

    render(){
        return <div className='shell'>
                   <Title/> 
                   <Searchbar/>
                   <Foot/>
               </div>
    }
}
ReactDom.render(<App />, document.getElementById('root'));