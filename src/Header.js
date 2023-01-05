import React from 'react';
import { AppBar,Typography } from '@mui/material';


const Header = () => {
    return (
        <div className="headerConatiner">
            <AppBar>
            <Typography style={{padding:15,backgroundColor:'white',fontSize:22,color:'#499557',fontWeight:30}}>QuillBot</Typography> 
            </AppBar>
        </div>
    )
}
export default Header;