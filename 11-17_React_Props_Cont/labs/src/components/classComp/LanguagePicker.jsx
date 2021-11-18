
import React, { Component } from 'react'

export default class LanguagePicker extends Component {
    constructor() {
        super()

        this.state = {
            language: "🇬🇧",
            hidden: true
        }
    }

    showHideLanguages = (e) => {
        if(this.state.hidden === true){
            this.setState(
                {hidden: false}
            )
            console.log("hidden state " + this.state.hidden);
            console.log(e.target.textContent);
        }
        else if(this.state.hidden === false){
            this.setState(
                {hidden: true}
            )
            this.setState(
                {language: e.target.textContent}
            )
            console.log("hidden state " + this.state.hidden);
            console.log(e.target.textContent);
        }
    }

    render() {
        return (
            <>
                <br />
                <button style={{marginLeft: "110px"}} onClick={this.showHideLanguages}>{this.state.language}</button><br />
                <div style={{display: this.state.hidden ? "none" : "block"}}>
                    <button style={{margin: "10px"}} onClick={(e)=>{this.showHideLanguages(e)}}>🇬🇧</button>
                    <button style={{margin: "10px"}} onClick={(e)=>{this.showHideLanguages(e)}}>🇰🇷</button>
                    <button style={{margin: "10px"}} onClick={(e)=>{this.showHideLanguages(e)}}>🇯🇵</button>
                    <button style={{margin: "10px"}} onClick={(e)=>{this.showHideLanguages(e)}}>🇲🇽</button>
                    <button style={{margin: "10px"}} onClick={(e)=>{this.showHideLanguages(e)}}>🇩🇪</button>
                </div>
            </>
        )
    }
}
