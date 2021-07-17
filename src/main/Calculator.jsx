import React, { Component } from 'react' /*pq importar componnet??*/
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current:0.

}

export default class Calculador extends Component{

    state ={...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigito  = this.addDigito.bind(this)

    }

    clearMemory(){
        this.setState({...initialState})
    }

    setOperation(operetion){
        console.log(operetion)
    }

    addDigito(n){
        console.log(" o digito digitado é")
        console.log(n)
        if (n=== '.' && this.state.displayValue.includes('.')){
            return
        }
        if (n=== '.' && this.state.displayValue === '0'){

            return
        }
        //boleano
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
            console.log(values)


        }



    }


    render(){
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/> 
                <Button label="AC" click={this.clearMemory} fn/>
                <Button label="cor" click={this.clearMemory} fn/>
                <Button label="som" click={this.clearMemory} fn/>
                <Button label="+" click={this.setOperation} operetion/>
                <Button label="7" click={this.addDigito}/>
                <Button label="8" click={this.addDigito}/>
                <Button label="9" click={this.addDigito}/>
                <Button label="-"click={this.setOperation} operetion/>
                <Button label="4" click={this.addDigito}/>
                <Button label="5" click={this.addDigito}/>
                <Button label="6" click={this.addDigito}/>
                <Button label="x"click={this.setOperation} operetion/>
                <Button label="1" click={this.addDigito}/>
                <Button label="2" click={this.addDigito}/>
                <Button label="3" click={this.addDigito}/>
                <Button label="/"click={this.setOperation} operetion/>
                <Button label="0" click={this.addDigito} />
                <Button label="." click={this.addDigito}/>
                <Button label="="click={this.setOperation} triple/>



            </div>
        )
    }
}