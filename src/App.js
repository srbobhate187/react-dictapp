import React,{useEffect,useState}from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import "./style.css";
import Header from './comp/Header';
import Definitions from './comp/Def/Definitions';

export default function App() {
  const [meanings, setMeanings] =  useState([]);
  const [words, setWords] = useState("");
  const [category, setCategory] = useState("en");
  const DictAPI = async() =>{
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${words}`);
      console.log(data)
      setMeanings(data.data);
     }catch(error){
       console.log(error)

     }
  }
  // console.log(meanings)
  console.log(words)
  useEffect(() => {
    DictAPI();
  },[words, category])
  return (
    <div className = "app"  style ={{height : "100vh" , background : "grey", color : "whitesmoke"}}>
      <Container maxWidth = "md" style ={{display : "flex", flexDirection : "column"}}>
        <Header  words = { words} 
      setWords = {setWords}
      meanings = {meanings}
      setMeanings = {setMeanings}
      category={category} 
      setCategory ={setCategory} 
      />{meanings && (<Definitions words = {words} meanings = {meanings} category = {category}/>)}
        <Definitions words = {words} meanings = {meanings} category = {category}/>
        <p>Start editing to see some magic happen :)</p>
      </Container> 
    </div>
  );
}
