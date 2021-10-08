import React, { useState, useEffect } from 'react'
import Watchlist from './Watchlist/Watchlist';
import Cards from './All Movies/Cards';
import Mcards from './All Movies/Anime';
import Wcards from './All Movies/Wcards';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Popular from './All Movies/Popular';
import './index.css';
import Header from './header/Header';
import firebase from 'firebase';


function App1() {

  const [blogs, setBlogs] = useState([]);
  const fetching = () => {
    let list = [];

    firebase.database().ref('hbsuggest').on("value", snapshot => {

      snapshot.forEach((snap, id) => {

        var key = snap.key;
        var data = snap.val();
        list.push({ key: key, tit: data.tit, img: data.img , watchs : data.watchs});

      });
    });

    setBlogs(list);
    

  }

  useEffect(() => {

    fetching();
  },[]);


  const value = (add) => {

    document.getElementById("chnge").innerHTML = `${add}`;

  }
  const [colors, setcolors] = useState(false)

  const theme = () => {
    if (colors) {
      if (document.getElementById("filter")) {
        document.getElementById("filter").classList.toggle("filter12")
      }
      document.getElementById("right").style.backgroundColor = "#ffffff";
      document.getElementById("Whole").style.backgroundColor = "#ffffff";

      document.getElementById("dark").style.color = "black";
      document.getElementById("chnge").style.color = "black";


      setcolors(!colors);
    }
    else if (!colors) {
      document.getElementById("right").style.backgroundColor = "#181818";
      document.getElementById("Whole").style.backgroundColor = "#181818";
      document.getElementById("dark").style.color = "white";
      document.getElementById("chnge").style.color = "#d3d31e";
      // document.getElementById("alag").style.color ="white";
      if (document.getElementById("filter")) {
        document.getElementById("filter").classList.toggle("filter12")
      }

      setcolors(!colors);
    }


  }

  const Home = () => {
    return (<>
      <div className="myfav">
        <h2 className="filter" id="filter">Filter</h2>


        <NavLink exact to="/" activeClassName="selected" className="fav" onClick={(() => { value("Trending Movies/Web-Series") },fetching)}> Trending </NavLink>
        <NavLink exact to="/movies" activeClassName="selected" className="fav" onClick={(() => { value("Top Rank Animes") },fetching)}> Anime </NavLink>
        <NavLink exact to="/popular" activeClassName="selected" className="fav" onClick={(() => { value("Popular On Social Media") },fetching)}> Popular </NavLink>
        <NavLink exact to="/web" activeClassName="selected" className="fav" onClick={(() => { value("Best Web-Series") },fetching)}> Web-Series </NavLink>
        {/* <NavLink exact t0 = "/wl"  activeClassName = "selected" className = "fav" > WatchList</NavLink> */}
        <NavLink exact to="/watch" activeClassName="selected" className="fav" onClick={(() => { value("") } ,fetching)}> Watch-Lists </NavLink>

      </div>

    </>
    );
  }


  return (<>
    <Header />
    <div className="right" id="right">
      <span className="tittle" >
        <h1 id="chnge" style={{ color: "black" }}>Trending Movies/Web-Series</h1>
      </span>
      <div className="dark">
        <span style={{ margin: "0px 5px" }} id="dark">Dark Mode</span>
        <label class="switch" >
          <input type="checkbox" onClick={theme} />
          <span class="slider round"></span>
        </label>
      </div>
      {/* <span >
      <button  >Dark Mode</button>
    </span> */}

    </div>

    <div className="WholeSection" id="Whole">
      <div className="leftmenu" id="left">
        <Home />

      </div>

      <div className="cards" id="mydiv">

        <Switch>
          <Route exact path="/" component={Cards} />

          <Route exact path="/movies" component={Mcards} />
          <Route exact path="/web"  >
            <Wcards />
          </Route>
          <Route exact path="/watch" > <Watchlist blog ={blogs} /> </Route>
          <Route exact path="/popular" component={Popular} />

        </Switch>

      </div>
    </div>
    <h3 className="tittle1">@2021 Harsh Bhatnagar all Rights Reserved Terms and Conditions</h3>
  </>
  );
}

export default App1;
