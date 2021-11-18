
import React, {useState, useEffect} from 'react'

function Timer() {
    
    const [articles, setArticles] = useState([])
    const [filteredArr, setFilteredArr] = useState([])
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(5)
    const [filterText, setFilterText] = useState("")

    // like componentDidUpdate // when second argument of useEffect is left off
    // useEffect(()=>{
    //     console.log("use effect was called componentDidUpdate")
    // })

    // useEffect(func, []) // with empty [] this acts as componentDidMount
    // useEffect(func, [count]) // will be called when count is updated

    // useEffect(()=>{
    //     console.log("use effect was called")
    // }, [count, count2]) // this will be called when either count or count2 is updated

    useEffect(() => {
        
        const newsData = async () => {
            
            let response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd")
            let data = await response.json()
            // console.log(data);

            // set our state
            setArticles(data.articles)
            setFilteredArr(data.articles)

        }

        newsData()

    }, [])

    useEffect(() => {
        console.log(articles, filteredArr);
    })
    
    const handleChange = (e) => {
        setFilterText(e.target.value)

        let filteredList = articles.filter(article => {
            return article.title.toLowerCase().includes(filterText.toLowerCase())
        })

        setFilteredArr(filteredList)
    }

    return (
        <>
            <input type="text" value={filterText} onChange={handleChange}/>

            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Click</button>
            <h1>{count2}</h1>
            <button onClick={()=> setCount2(count2 + 1)}>Click</button>
            <ul>
                {filteredArr.map((article, index)=>{
                    return <li key={index}>
                                <h3>{article.title}</h3>
                                <img src={article.urlToImage} alt="" height="150px"/>
                                <p>{article.description}</p>
                            </li>
                })}
            </ul>
        </>
    )
}

export default Timer
