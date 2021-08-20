import React ,{useEffect , useState} from "react";
import Navbar from "./Cards";
// import Allmw from "./Allmw";
const Mcards = () => {
  //     const Marr = [
  //         {
  //             id : 1,
  //             link : 'https://www.themoviedb.org/t/p/w220_and_h330_face/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
  //             title : 'The Tomorrow War',
  //             what : "Movie",
  //             Date : 'Jul 02, 2021',
  //             Watch : "https://www.themoviedb.org/movie/588228"
  //         },
  //         {
  //             id : 2,
  //             link : "https://www.themoviedb.org/t/p/w220_and_h330_face/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
  //             title : "Luca",
  //             what : "Movie",
  //             Date : "Jun 17, 2021",
  //             Watch : "https://www.themoviedb.org/movie/508943"
  //         },
  //         {
  //             id : 3,
  //             link : "https://www.themoviedb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  //             title : "The Dark Knight",
  //             what : "Movie",
  //             Date : "JUl 16, 2008",
  //             Watch : "https://www.themoviedb.org/movie/155"
  //         },
  //         {
  //             id : 4,
  //             link : "https://www.themoviedb.org/t/p/w220_and_h330_face/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
  //             title : "Loki",
  //             what : "Movie",
  //             Date : "Jun 09,2021",
  //             Watch : "https://www.themoviedb.org/tv/84958"
  //         },
  //         {
  //             id : 5,
  //             link : "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  //             title : "Avengers: Endgame",
  //             what : "Movie",
  //             Date : "April 24,2019",
  //             Watch : "https://www.themoviedb.org/tv/84958"
  //         }
  // ]
  // const movie = Allmw.filter((value) => {
  //   return (value.what === "Movie");
  // });

  const [css , setcss] = useState([])

  const getdatas = async () =>{
     const ress = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
     const actuals = await ress.json();
     setcss(actuals.top.slice(0,20));
     // setcaa(actual.results);
  };
  useEffect(()=>{
    getdatas();
  },[]);
 console.log(css);

  return (
    css.map((val, index) => {
      return (<>
        <Navbar
          key={index}
          images={val.image_url}
          title={val.title}
          date={val.start_date}
          btao={`Rank: ${val.rank}`}
          links={val.url}
        />

      </>
      )
    }))
};
export default Mcards;