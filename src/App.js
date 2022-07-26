import {useState,useEffect} from "react"
import Card from "./components/Card"

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNewsList(data)
      })
  },[])

  return (
    <div className="text-4xl font-[arial] py-5 text-center bg-[#1f1122] bg-[url('/src/assets/download.svg')]">
      <div className="py-5">
        <h1 className="text-[#e1d8ee]">Space News</h1>
      </div>
      <div className="flex flex-wrap gap-4 p-5 rounded">
        {newsList.map((item) => (
          <Card item={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
