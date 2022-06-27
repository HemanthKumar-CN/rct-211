import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoes,
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";

import styles from './Shoes.module.css'


import axios from 'axios';
import ShoeCard from "./ShoeCard/ShoeCard";
const Shoes = () => {

  const dispatch=useDispatch()

  const [data, setData] = useState([])

  const shoes=useSelector(state=> state.shoes)
  console.log(shoes)

  useEffect(() => {

    dispatch(getShoes())
    

  }, [])
  
// console.log(data)



  return <div className={styles.flex}>{/* Map through the shoes list here */}
    {
      shoes.map(item=> (
        <ShoeCard key={item.id} item={item}/>
      ))
    }
  </div>;
};

export default Shoes;
