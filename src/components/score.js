import React, {Component} from 'react'

class Score extends Component{
    constructor(props){
        super(props)
        this.state={playerOneScore:0, playerTwoScore:0, playTo:11, message:''}
    }

    increasePlayerOne=()=>{
        this.setState({playerOneScore:this.state.playerOneScore+1})
        if (this.state.playerOneScore>=this.state.playTo-1) {
            if ((this.state.playerOneScore- this.state.playerTwoScore)>=1){
                document.getElementById('player-one-button').disabled=true
                document.getElementById('player-two-button').disabled=true
                this.setState({message:'Player One Wins!'})
            }
        }
    }

    increasePlayerTwo=()=>{
        this.setState({playerTwoScore:this.state.playerTwoScore+1})
        if (this.state.playerTwoScore>=this.state.playTo-1) {
            if ((this.state.playerTwoScore- this.state.playerOneScore)>=1){
                document.getElementById('player-one-button').disabled=true
                document.getElementById('player-two-button').disabled=true
                this.setState({message:'Player Two Wins!'})
                }
            }
        }

    changePlayTo=()=>{
        let el = parseInt(document.getElementById('playto').value)
        this.setState({playTo: el})
        this.reset()
    }

    reset=()=>{
        this.setState({playerOneScore:0})
        this.setState({playerTwoScore:0})
        this.setState({message:''})
        document.getElementById('playto').disabled=false
        document.getElementById('player-one-button').disabled=false
        document.getElementById('player-two-button').disabled=false


    }

    render(){
        return(
            <div>
                <div>
                    <select defaultValue={this.state.playTo} id='playto' onChange={this.changePlayTo}>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='13'>12</option>
                        <option value='14'>13</option>
                        <option value='15'>14</option>
                        <option value='16'>15</option>
                        <option value='17'>16</option>
                        <option value='18'>17</option>
                        <option value='19'>18</option>
                        <option value='20'>19</option>
                        <option value='21'>21</option>
                    </select>
                </div>
                <div>
                    <h2><span data-testid='player-one-score'>{this.state.playerOneScore}</span> to
                    <span data-testid='player-two-score'>{this.state.playerTwoScore}</span></h2>
                </div>
                <div>
                    <button id ='player-one-button' data-testid='player-one-button' onClick={this.increasePlayerOne}>+1 Player One</button>
                    <button id ='player-two-button'  data-testid='player-two-button' onClick={this.increasePlayerTwo}>+1 Player Two</button>
                    <button data-testid='reset' onClick={this.reset}>Reset</button>
                </div>
                <h2>
                    {this.state.message}
                </h2>
            </div>
        )
    }

}

export default Score