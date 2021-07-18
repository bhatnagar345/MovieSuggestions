
import React , {useEffect, useState} from 'react'
import Watchlist from './Watchlist';
// import Navbar from './Navbar';
import Cards from './Cards';
import Mcards from './Mcards';
import Wcards from './Wcards';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Popular from './Popular';


function App() {
  
 
  
  const Home = () => {
    return (<>
    <div className = "myfav">
    <h2 className= "filter">Filter</h2>
    
        <NavLink exact to="/" activeClassName="selected" className = "fav"> Trending </NavLink>
        <NavLink exact to="/movies" activeClassName="selected" className = "fav"> Anime </NavLink>
        <NavLink exact to="/popular" activeClassName="selected" className = "fav"> Popular </NavLink>
        <NavLink exact to="/web" activeClassName="selected" className = "fav"> Web-Series </NavLink>
         {/* <NavLink exact t0 = "/wl"  activeClassName = "selected" className = "fav" > WatchList</NavLink> */}
         <NavLink exact to="/watch" activeClassName="selected" className = "fav"> Watch-Lists </NavLink>
         
        </div> 
        
    </>
    );
}

  
  return (<>
    <h1 className = "tittle">Top Movies , Anime and Web-Series to Watch in 2021</h1>
    <div className = "WholeSection">
    <div className = "leftmenu">
     <Home/>
     
    </div>
    <div className = "cards">
    <Switch>
    <Route exact path= "/" component = {Cards} />
    
    <Route exact path= "/movies" component ={Mcards} />
    <Route exact path= "/web" component ={Wcards} />
    <Route exact path= "/watch" component ={Watchlist} />
    <Route exact path= "/popular" component ={Popular} />
    
    </Switch>
    </div>
    </div>
    <h3 className = "tittle1">@2021 Harsh Bhatnagar all Rights Reserved Terms and Conditions</h3>
    </>
  );
}

export default App;
