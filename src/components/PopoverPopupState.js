import React, { Component } from "react";

//MUI
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";




class PopoverPopupState extends Component{
    render(){
  return (
  
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            
            {...bindTrigger(popupState)}
          >
            Create Your Best
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            
            <Box p={2}>
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="primary">
                Text/Link
              </Button>
              <Button variant="contained" color="secondary">
                YouTube
              </Button>
              <Button variant="contained" disabled>
                Product
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                More
              </Button>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
    
  );
}

};



// class PostButton extends Component{
//     render(){
//         return (

//             <div className="PostButton">

//             <Button variant="contained" color="secondary">
//         Create Your Best
//       </Button>
//       </div>

// );

//         }
//       }



export default PopoverPopupState;