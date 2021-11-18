
import React, { Component } from 'react'

export default class Timer extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            articles: [] 
        }

        console.log("inside constructor");
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    async componentDidMount(){
        let results = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd")
        let data = await results.json()
        this.setState({
            articles: data.articles
        }, ()=> {
            // console.log("updated state", this.state.articles)
        })

        // console.log(data);
    }

    // componentWillUnmount(){

    // }

    componentDidUpdate(){
        console.log("component did update");
    }

    render() {

        const {articles} = this.state;
        console.log("mounted to screen");
        return (
            <>
                <h1>Hello World</h1><h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>Click</button>
                <ul>
                    {articles.map((article, index) => {
                        return <li key={index}>{article.title}</li>
                    })}
                </ul>
            </>
        )
    }
}
