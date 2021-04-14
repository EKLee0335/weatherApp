import React, {Component} from 'react'
import './searchbar.css'
import Showout from '../Showout/showout'

const api = {
   key : '6646794ec66741f001a57cf5b39d52e1',
   url : 'https://api.openweathermap.org/data/2.5/weather?q=',
};
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