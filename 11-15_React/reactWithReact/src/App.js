
// const App = () => {
    
//     return (
//         <h1>Hello World</h1>
//     )
// }


class App extends React.Component {

    constructor(){
        super()
    }

    //render returns JSX
    render(){
        console.log(this.props.cityName);
        return <h1>Hello {this.props.cityName}</h1>
    }
}