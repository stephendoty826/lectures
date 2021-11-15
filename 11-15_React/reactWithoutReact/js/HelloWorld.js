
class HelloWorld{
    constructor(text){
        this.props = {
            text: text
        }
    }

    render(){
        // return a DOM node

        let domNode = document.createElement("h1")
        domNode.innerText = this.props.text

        let root = document.getElementById("root")

        root.appendChild(domNode)

        return domNode
    }
}