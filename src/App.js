import React from 'react';

import Person from './Components/Person';
import Water from './Components/Water';
import HeartRate from './Components/HeartRate';
import Temperature from './Components/Temperature';

class App extends React.Component{


    constructor(state) {  

        document.title = "Elsy - Bonus";

        super(state)
        this.state = {
            water: 1.5,
            heart : 120,
            temperature : -10,
            steps : 3000,
            waterStep : 0,
            waterHeart : 0,
            waterTemperature : 0,
            gender: "male",
            toggle: true,
            rbgHeart : "rgb(58, 133, 255)",
        };

        this.onStepsChange = this.onStepsChange.bind(this);
        this.onHeartChange = this.onHeartChange.bind(this);
        this.onTemperatureChange = this.onTemperatureChange.bind(this);

        this.onToggleChange = this.onToggleChange.bind(this);
        this.incChange = this.incChange.bind(this);
        this.decChange = this.decChange.bind(this); 
  
    }

    onStepsChange(val){
        this.onCalculateWater(val,"steps");
        this.setState({
            steps: val,
        });
    }
    onHeartChange(val){
        this.onCalculateWater(val,"heart");
        this.setState({
            heart: val,
        });
    }
    onTemperatureChange(val){
        this.onCalculateWater(val,"temperature");
        this.setState({
            temperature: val,
        });
        if ( val < 0 ){
            val = val*(-1)
        }
        let rapp = 60/val;
        let res1 = 58  + (((58 - 255) / 60) * rapp);
        let res2 = 133 + (((232 - 133) / 60) * rapp);
        let res3 = 255 - (((255 - 58) / 60) * rapp);
        if ( res1 < 0 ){
            res1 = res1*(-1)
        }
        if ( res2 < 0 ){
            res2 = res2*(-1)
        }
        if ( res3 < 0 ){
            res3 = res3*(-1)
        }
        console.log( parseInt(res1), parseInt(res2), parseInt(res3) )
        this.setState({
            rbgHeart: `rgb(${parseInt(res1)}, ${parseInt(res2)}, ${parseInt(res3)})`,
        });
    }

    onCalculateWater(val,swf){
        if( swf === 'steps' ){            
            if( val > 10000 ){            
                let temp = (val - 10000) * 0.00002;       
                this.setState({
                    waterStep: temp,
                });       
            }else{
                this.setState({
                    waterStep: 0,
                }); 
            }
        }

        if( swf === 'heart' ){
            if( val > 120 ){
                let temp = (val - 120) * 0.0008;  
                this.setState({
                    waterHeart: temp,
                });  
            }else{
                this.setState({
                    waterHeart: 0,
                });  
            }  
        }

        if( swf === 'temperature' ){              
            if( val > 20 ){              
                let temp = (val - 20) * 0.02;  
                this.setState({
                    waterTemperature: temp,
                });   
            }else{
                this.setState({
                    waterTemperature: 0,
                });  
            }
        }
           // console.table(1.5,"|", this.state.waterHeart,"|", this.state.waterStep,"|", this.state.waterTemperature )
        var tot_water = this.state.waterHeart + this.state.waterStep + this.state.waterTemperature + 1.5;

        this.setState({
            water : tot_water
        });
    }

    onToggleChange(val){
        this.setState({
            toggle: ( val.target.value === 'true' ? false : true ),
            gender:  ( this.state.toggle !== true ? 'male' : 'female' )
        })
    }
    incChange(){        
        this.setState({
            steps: this.state.steps + 1000,
        })
        this.onCalculateWater(this.state.steps,"steps");
    }
    decChange(){
        if ( this.state.steps > 1000 ) {
            this.setState({
                steps: this.state.steps - 1000,
            })
        }
        this.onCalculateWater(this.state.steps,"steps");
    }

    render(){

        const MIN_TEMPERATURE = -20;
        const MAX_TEMPERATURE = 40;

        const MIN_HEART = 80;
        const MAX_HEART = 180;

        const MIN_STEPS = 0;
        const MAX_STEPS = 50000;

        return(
            <div className="row mx-0">
                <Water
                    water={this.state.water.toFixed(2)}
                />
                <Person 
                    min={MIN_STEPS} 
                    max={MAX_STEPS} 
                    onChange={this.onStepsChange} 
                    steps={this.state.steps}
                    btnInc={this.incChange}
                    btnDec={this.decChange}
                    toggle={{ gender : this.state.gender, action : this.onToggleChange, value : this.state.toggle }}
                />
                <HeartRate 
                    min={MIN_HEART} 
                    max={MAX_HEART} 
                    onChange={this.onHeartChange} 
                    heart={this.state.heart}
                />
                <Temperature 
                    min={MIN_TEMPERATURE} 
                    max={MAX_TEMPERATURE} 
                    onChange={this.onTemperatureChange} 
                    temperature={this.state.temperature}                     
                    rbg={this.state.rbgHeart} 
                />
            </div>
        );
    }

}

export default App;