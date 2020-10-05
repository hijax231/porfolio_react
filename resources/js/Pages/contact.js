import React, { useState, useEffect } from "react";

import {
    makeStyles,
    withStyles,
    createMuiTheme
} from "@material-ui/core/styles";

import ReactDOM from "react-dom";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router-dom";

import Fullpage, {
    FullPageSections,
    FullpageSection
} from "@ap.cx/react-fullpage";

import Grid from "@material-ui/core/Grid";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Typing from "react-typing-animation";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import Particles from "react-particles-js";

import Button from "@material-ui/core/Button";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

import InfoIcon from "@material-ui/icons/Info";

import Container from "@material-ui/core/Container";

import Lottie from 'react-lottie';

import  contact from '../images/contact.json'

import waves from '../images/wave.svg'


import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/ArrowUpward';


//lights

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    menuButton: {
        marginRight: 100
    },
    title: {
        flexGrow: 1
    },
    gridList: {
        width: 500,
        height: 450
    },

    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },

    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    }
});

const WhiteTextTypography = withStyles({
    root: {
        color: "white"
    }
})(Typography);

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
            filter: "all",
            zoom: false
        };
    }


 
    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
          
            animationData: contact,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
    
          

          

        const classes = useStyles();

        return (
            <div
                style={{
                    borderTop: "10px solid #202833",
                    position: "relative",
                  
                    backgroundColor: "white",
                    height: "100%",
                    backgroundImage:`url(${waves})`,
                    backgroundRepeat  : 'no-repeat',
                }}
            >
                <div
                    style={{
                        position: "absolute",

                        align: "center"
                    }}
                >
                    {/* particle area */}

                    {/* end of particle area */}
                </div>


      <Lottie options={defaultOptions}
                            height={300}
                            width={300}

                            />

                <Grid
                    container
                    align="center"
                    direction="row"
                    style={{ minHeight: "30vh" ,
                   }}
                >
                    
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">
                                CONTACT
                            </Typography>

                            <Typography variant="h6"   color="primary" component="h2">
                            Have a question or want to work together?
                            </Typography>

                           <Typography onClick={()=>{
                               window.location.href = "mailto: pasajol231@gmail.com";
                           }} variant="overline" component="h2">
                          Pasajol231@gmail.com 
                            </Typography>


               <Button color="primary" onClick={()=>{
            document.documentElement.scrollTop = 0;
               }}>
                    <PhotoCamera />
                    </Button>




                    </Grid>
                    </Grid>


                    <Grid
                    container
                    align="center"
                    direction="row"
                    style = {{ backgroundColor: "#202833"}}
                  
                >
                    
                      
                    <Grid item xs={12}>
                           <WhiteTextTypography variant="overline" component="h2">
                          Jan Dean Pasajol @ 2020
                            </WhiteTextTypography>
                            </Grid>
                    </Grid>
              



              </div>
            
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Contact);
