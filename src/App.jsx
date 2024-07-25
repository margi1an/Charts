import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Piechart from './Components/Piechart'

function App() {
  const [repos , setRepos] = useState(null)

  const getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const datas = data
        setRepos(datas)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if(repos) {
      console.log(repos)
    } 
  },[repos])
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div>
        <Form getData={getData}></Form>
      </div>
    </div>
  );
}

export default App;
