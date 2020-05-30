import React, { Component } from 'react';



//MUI
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';










  class SearchBar extends Component{
    render(){
        return (
            <div>
                <Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />





        
          <SearchIcon />
        <InputBase
          
        />
      </div>



);
            
  
}
        
    };

export default SearchBar;