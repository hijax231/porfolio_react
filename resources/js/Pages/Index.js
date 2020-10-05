import React, { Component } from "react";


import { makeStyles, withStyles } from "@material-ui/core/styles";




import "../../css/reactslider.css";


import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'


import Typography from "@material-ui/core/Typography";

import "fontsource-roboto";


import Main from "./mainpage";
import Skills from "./skills";
import Porfolio from "./porfolio";
import Contact from "./contact";


const useStyles = theme => ({
    root: {
        height: "100vh"
    },

    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    divpara: {
        margin: theme.spacing(10, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    titlehead: {
        margin: theme.spacing(10, 1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper2: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },

    buttonProgress: {
        color: "#80ff80",

        top: "65%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12
    }
});


const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

class Home extends Component {
    constructor() {
        super();
        this.state = {
            renderSplashscreen: true,
            setOpen: false,
            open: false,
            redirect: false,
            contact: "",
            conatactstatus: "",
            password: "",
            passwordstatus: "",
            value: "",
            showPassword: false

            // newvalue: localStorage.getItem('myValueInLocalStorage') || '',
        };
    }

    render() {
        const { classes } = this.props;

        return (

  <div style={{overflow: "hidden"}}>   
<Main />

<Skills />

<Porfolio />

<Contact />

</div>

//             <Fullpage
//             scrollOverflow={true}
//             >

//             <FullPageSections>
    
//               <FullpageSection style={{
//                 backgroundColor: 'lime',
          
//                 padding: '1em',
//                 margin: 0 ,
//                 padding: 0 ,
//               }}>

// <Main />

//               </FullpageSection>
//               <FullpageSection 
           
//               style={{
//                 backgroundColor: 'coral',
//                 height: "100%",
//               }}>

// <Skills />


//               </FullpageSection>
//               <FullpageSection 
              
//               scrollMode="normal"
              
//               style={{
//                 backgroundColor: '#202C22',
              
//               }}>

// <Porfolio />

//               </FullpageSection>

// <FullpageSection style={{
//                 backgroundColor: '#2F4131',
          
//               }}>3</FullpageSection>


// <FullpageSection style={{
//                 backgroundColor: '#405742',
//                 padding: '1em',
//               }}>3</FullpageSection>
    
//             </FullPageSections>
    
//           </Fullpage>







        );
    }
}
export default withStyles(useStyles, { withTheme: true })(Home);
