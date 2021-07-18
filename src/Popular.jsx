import {useEffect, useState} from 'react';
import Navbar from './Navbar';

const Popular = () =>{
    const [caa, setcaa] = useState([]);
    const getdata = async () =>{
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c9df0bb1b55da2720c721bcb3c0b5833");
        const actual = await res.json();
        // console.log(actual.results);
        setcaa(actual.results);
     };

     const [css , setcss] = useState([])

     const getdatas = async () =>{
        const ress = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
        const actuals = await ress.json();
        setcss(actuals.top.slice(0,5));
        // setcaa(actual.results);
     };
    



   useEffect(()=>{
       getdata();
      
   } , []);
   

    return (
        caa.map((val, index) => {
            return (<>
                <Navbar
                    key={index}
                    images = {`https://image.tmdb.org/t/p/w300${val.poster_path}`}
            title = {val.title}
            date = {val.release_date}
            btao = {` Rating : ${val.vote_average}`}
            links = "#"
                />

            </>
    )
            }))
};

export default Popular;