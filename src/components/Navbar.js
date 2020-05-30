import React, { Component } from 'react';

//MUI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';


//components


const SearchBar = {
  
    paddingLeft: "50%",
    borderRadius: "5px solid white",
  

};






class Navbar extends Component {
    render() {
        return (

          <AppBar>
              <Toolbar className="Nav-continer">
                <div class="logo">
                  chuzbest
                
                </div>
                <div style={ SearchBar}>
                  search for best <SearchIcon />
                </div>

                {/* <SearchBar /> */}

               

                

            
          


              </Toolbar>

          </AppBar>
        );
            
  
}
        
    }




export default Navbar;