import React, { Component } from 'react' /*pq importar componnet??*/
import './BtnLuz.css'
import Button from '../components/Button'
import Display from '../components/Display'

import {  BiMoon,
        BiSun,
        
} from "react-icons/bi";



const initialState = {
    icone: "",
    ativo: true
}

export default class BtnSom extends Component{

    state ={...initialState}
   
    constructor(props){
        super(props)
        this.render = this.render.bind(this)
        this.mudarIncone = this.mudarIncone.bind(this)
        

    }

    mudarIncone(){
        if(this.state.ativo){
            
            this.setState({
            ativo:false
        })
        }else{
            this.setState({
            ativo:true
        })
        }
        

    }
    

    render(){
        if(this.state.ativo){
            return(
            <button className="button fn" onClick={this.mudarIncone}>
                <BiSun  />
            </button>
            )

        }else{
            return(
            <button className="button fn" onClick={this.mudarIncone}>
                <BiMoon />
            </button>
            )
        }
        
            
        
    }
}