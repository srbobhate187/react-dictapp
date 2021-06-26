import React from 'react'
import './Header.css';
import TextField from '@material-ui/core/TextField';
import Categories from '../data/Categories';
import MenuItem from '@material-ui/core/MenuItem';

 const Header = ({words, setWords, category, setCategory, meanings,setMeanings}) =>{
   const handleChange = (lang) =>{
     setCategory(lang);
     setWords("");


   }

  return(
    <div className ="header">
      <span className = "title">{words? words : "WOrd Hunt"}</span>
      <TextField id="standard-basic" label="Standard" value = {words} 
        onChange = {(e) => setWords(e.target.value)} />
      <TextField
          value = {category}
          onChange = {(e) => handleChange(e.target.value)}
          select
          label="Search A word" >{Categories.map((option) =>(
            <MenuItem key = {option.label}
            value = {option.label} >{option.value}   </MenuItem>
          ))}
          
          
        </TextField>  
    </div>

  )
  
}
export default Header;