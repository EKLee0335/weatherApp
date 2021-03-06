import React, {Component} from 'react'
import './searchbar.css'
import Showout from '../Showout/showout'
import api from '../../Api/key'

class Searchbar extends Component{
   constructor(props){
     super(props);
     this.state = {
         input: '',
         dataSet: {},
     }
   }
   handelInput = (event) =>{
        this.setState({input: event.target.value});
   }
   getCityWeather = (event) =>{
       if(event.key === "Enter" ){
         fetch(`${api.url}${this.state.input}&appid=${api.key}`)
         .then((res) => res.json())
         .then((result) => {
           console.log(result);
           this.setState({input: '',dataSet: result});
         }).catch(
            (error)=>{ console.log(error)
                       this.setState({dataSet: error});
            }
         );
       }
   }
   render(){
      return(   <section className = 'main'>
                  <div className='searchBar'>
                     <input placeholder= ' Input a city name' value={this.state.input} onChange={this.handelInput} onKeyPress={this.getCityWeather}/>
                  </div>
                  <Showout dataSet={this.state.dataSet}></Showout>
               </section>
            )
             
   }
}
export default Searchbar;