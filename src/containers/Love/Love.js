import React, {Component} from 'react';
import axios from 'axios'
import './Love.css'
import  Match from './Matches/Match'
import MatchWrapper from './HOC/MatchWrapper';

class Love extends Component{
   
    state= {
        inputName: '',
        inputSname: '',
        percentage: 0,
        result: '',
        showResult: false
    }

    componentDidMount(){
        console.log('hello')
    }

    findMatchHandler = () =>{
    axios.get(`https://love-calculator.p.mashape.com/getPercentage?fname=${this.state.inputName}&sname=${this.state.inputSname}`,{
        headers: {
           "X-Mashape-Key": "cZA91FBSWlmshegV4IsGJIcGoc3yp1Eq9cCjsnjMGOVB35Z1Ud",
           "Accept": "application/json"
        }
       }).then(res =>
           this.setState({
               name: res.data.fname,
               sName: res.data.sname,
               percentage: res.data.percentage,
               result: res.data.result,
               showResult: true
           })
           )
           }

render(){
    
      console.log(this.state.percentage)
      console.log(this.state.showResult)
        return(

            <div className={"main-div " + (this.state.percentage > 75 && this.state.showResult ? "match " : ' ') + (this.state.percentage > 50  && this.state.percentage < 75 && this.state.showResult === true ? 'semi ' : ' ') + (this.state.percentage < 50 && this.state.showResult ? 'no-match': '')}>

                    <button onClick={this.findMatchHandler}>Find love!</button>
                    <input type="text" value={this.state.inputName} onChange={(event) => this.setState({inputName: event.target.value, showResult: false})} placeholder="enter your name"/>
                    <input type="text" value={this.state.inputSname} onChange={(event) => this.setState({inputSname: event.target.value, showResult: false})} placeholder="enter your name"/>


                    
                    <Match
                    inputName={this.state.inputName}
                    inputSname={this.state.inputSname}
                    percentage={this.state.percentage}
                    result={this.state.result}
                    show={this.state.showResult}
                    />
               </div>
        )
}
}
export default Love