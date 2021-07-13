import React, { Component } from 'react' /*pq importar componnet??*/
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


export default class Calculador extends Component{

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigito  = this.addDigito.bind(this)

    }

    clearMemory(){
        console.log('limpar')
    }

    setOperation(operetion){
        console.log(operetion)
    }

    addDigito(digito){
        console.log(digito)
    }



    render(){
        return(
            <div className="calculator">
                <Display value="100"/>
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