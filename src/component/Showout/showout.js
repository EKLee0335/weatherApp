import React, {Component} from 'react'
import Proptypes from 'prop-types'
import './showout.css'

class Showout extends Component{
    render(){
        const dataSet = this.props.dataSet;
        
        let weatherIcon ;
        if(typeof dataSet.name !== 'undefined' ){
            if(dataSet.weather[0].main==='Rain'){
                weatherIcon = <i className="fas fa-cloud-rain fa-3x icon"></i>          
            }
            else if(dataSet.weather[0].main==='Clouds'){
                weatherIcon = <i className="fas fa-cloud fa-3x icon"></i>
            }
            else if(dataSet.weather[0].main==='Snow'){
                weatherIcon = <i class="fas fa-snowflake fa-3x icon"></i>
            }
            else{
                weatherIcon = <i class="fas fa-sun icon"></i>
            }

           const temperture = (dataSet.main.temp - 273.15).toFixed(0);
           const feelslike = (dataSet.main.feels_like - 273.15).toFixed(0);
           const tempmax = (dataSet.main.temp_max - 273.15).toFixed(0);
           const tempmin = (dataSet.main.temp_min - 273.15).toFixed(0);
           return <section className='information'>
                    <p className='smallTitle'>Current Weather</p>
                    <div className='mainInf'>
                        <div className='left'>
                           <h4>{dataSet.name}&nbsp;&nbsp;&nbsp;<span >{dataSet.sys.country}</span></h4>
                           <div className='left-info'>
                                {weatherIcon}
                                <p>{temperture}&deg;C</p>
                           </div>
                          
                        </div>
                        <div className='right'>
                            <div className='right-top'>
                                <p>Feels like {feelslike}&deg;C</p>
                                <p><i className="fas fa-temperature-high icon"></i> {tempmax}&deg;C&nbsp;&nbsp;&nbsp;
                                   <i className="fas fa-temperature-low icon"></i> {tempmin}&deg;C
                                </p>
                            </div>
                            <div className='right-bottom'>
                                <p><i className="fas fa-tint icon"></i> Humidity {dataSet.main.humidity}%</p>
                                <p><i className="fas fa-wind icon"></i> Wind {dataSet.wind.speed}kph</p>
                                <p><i className="fas fa-road icon"></i> Pressure {dataSet.main.pressure}hPa</p>
                            </div>
                        </div>
                  </div>
                </section>
        }
        else if(dataSet.cod === "404"){
            return <section className="information"><h1>City Not Found</h1></section>
        }
        else{ 
            return <section className='information'>
                    <p className='smallTitle'>Current Weather</p>
                   </section>
        }
    }
}
Showout.propTypes = {
    dataSet :  Proptypes.object,
}
export default Showout;