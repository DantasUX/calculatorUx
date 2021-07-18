import React, { Component } from 'react' /*pq importar componnet??*/
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'



const initialState = {
    displayValue: '0',
    clearDisplay: false,
    som: false,
    operetion: '',
    values: [0,0],
    historic: '',
    current:0,
}

export default class Calculador extends Component{

    state ={...initialState}
   
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigito  = this.addDigito.bind(this)
        this.somBtn = this.somBtn.bind(this)
        this.addSom = this.addSom.bind(this)
       
    }

    clearMemory(x){
        this.somBtn(x)
        this.setState({...initialState})
    }

    

    setOperation(operetion){
    this.somBtn(operetion)
        if( this.state.current===0){
            const historic = this.state.values[0] + operetion

            if(operetion==="="){
                return
            }
           else{
                this.setState({operetion, current: 1, clearDisplay: true,
                historic})
            }
            
        }
        else{
            const currenteOperation = this.state.operetion
            const values = {...this.state.values}

            if( operetion==="="){
                switch (currenteOperation) {
                    case "+":
                        values[0]=values[0] + values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            current:0,
                            operetion,
                            values
                        })
                        break;
                    case "-":
                        values[0]=values[0] - values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            current:0,
                            operetion,
                            values
                        })
                        break;
                    case "x":
                        values[0]=values[0] * values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            current:0,
                            operetion,
                            values
                        })
                        break;
                    case "/":
                        values[0]=values[0] / values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            current:0,
                            operetion,
                            values
                        })
                        break;

                    
                    default:
                        console.log('deu erro a oreacao foi '+ currenteOperation);
                }
                
            }else{
                switch (currenteOperation) {
                    case "+":
                        values[0]=values[0] + values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            clearDisplay: true,
                            operetion,
                            values
                        })
                        break;
                    case "-":
                        values[0]=values[0] - values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            clearDisplay: true,
                            operetion,
                            values
                        })
                        break;
                    case "x":
                        values[0]=values[0] * values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            operetion,
                            clearDisplay: true,
                            values
                        })
                        break;
                    case "/":
                        values[0]=values[0] / values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            operetion,
                            clearDisplay: true,
                            values
                        })
                        break;

                    case "/":
                        values[0]=values[0] / values[1]
                        values[1]=0
                        this.setState({
                            displayValue: values[0],
                            operetion,
                            clearDisplay: true,
                            values
                        })
                        break;
                    
                    default:
                        console.log('deu erro a oreacao foi '+ currenteOperation);
                }

            }
            
        }

    }


    

    addDigito(digito){
        this.somBtn(digito)
        const n = digito
        console.log(this.state)

        if (n=== '.' && this.state.displayValue.includes('.')){
            return
        }
        if (n==='0' && this.state.displayValue ===0){
            return
        }
        if (digito=== '.' && this.state.displayValue ==="0"){
            this.state.displayValue = 0.
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay 

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState ({displayValue, clearDisplay: false})


        if (n !=='.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = {...this.state.values}
            values [i] = newValue
            this.setState({values})
        }
    }
    
    addSom(digito){
        this.somBtn(digito)
        if(this.state.som){
            this.state.som=false
            console.log("deligado")
        }
        else{
            this.state.som=true
            console.log("ligado")
        }
    }

    somBtn(frequency){

        let context = new AudioContext(),
        oscillator = context.createOscillator(),
        contextGain = context.createGain();
/*sine square triangle*/

        oscillator.type = 'triangle';
        oscillator.connect(contextGain);
        contextGain.connect(context.destination);

        switch (frequency) {
            case "0":
                oscillator.frequency.value="261.6"
                break;
            case "1":
                oscillator.frequency.value="277.2"
                break;
            case "2":
                oscillator.frequency.value="293.7"
                break;
            case "3":
                oscillator.frequency.value="311.1"
                break;
            case "4":
                oscillator.frequency.value="329.6"
                break; 
            case "5":
                oscillator.frequency.value="349.2"
                break; 
            case "6":
                oscillator.frequency.value="370.0"
                break;
            case "7":
                oscillator.frequency.value="392.0"
                break;
            case "8":
                oscillator.frequency.value="415.3"
                break;
            case "9":
                oscillator.frequency.value="440.0"
                break;
            
            case "AC":
                oscillator.frequency.value="466.2"
                break;
            case ".":
                oscillator.frequency.value="493.9"
                break;
            case "son":
                oscillator.frequency.value="523.3"
                break;     
            case "cor":
                oscillator.frequency.value="554.4"
                break;
            case "+":
                oscillator.frequency.value="587.3"
                break;
            case "-":
                oscillator.frequency.value="622.3"
                break;  
            case "x":
                oscillator.frequency.value="659.3"
                break;  
            case "/":
                oscillator.frequency.value="698.5"
                break;  
    
            }

        oscillator.start(0);
        
        if (this.state.som){
            contextGain.gain.exponentialRampToValueAtTime(
             0.00001, context.currentTime + 0)
        }
        else{
            contextGain.gain.exponentialRampToValueAtTime(
             0.00001, context.currentTime + 1)
        }

        
    }




    render(){
        return(
            <div className="calculator">
                
                <Display value={this.state.displayValue}/> 
                <Button label="AC" click={this.clearMemory} fn/>
                <Button label="cor" click={this.addSom} fn/>
                <Button label="som" click={this.clearMemory} fn/>
                <Button label="+" click={this.setOperation} operetion/>
                <Button label="7" click={this.addDigito} />
                <Button label="8" click={this.addDigito} />
                <Button label="9" click={this.addDigito} />
                <Button label="-"click={this.setOperation} operetion/>
                <Button label="4" click={this.addDigito}/>
                <Button label="5" click={this.addDigito}/>
                <Button label="6" click={this.addDigito}/>
                <Button label="x"click={this.setOperation} operetion/>
                <Button label="1" click={this.addDigito}/>
                <Button label="2" click={this.addDigito} />
                <Button label="3" click={this.addDigito}/>
                <Button label="/"click={this.setOperation} operetion/>
                <Button label="0" click={this.addDigito} />
                <Button label="." click={this.addDigito}/>
                <Button label="="click={this.setOperation} triple/>



            </div>
        )
    }
}