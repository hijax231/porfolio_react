import React, { Suspense, useEffect, useRef, useState } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactDOM from "react-dom";

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

import GridList from '@material-ui/core/GridList';
import waves from '../images/wavetop.svg'
import Lottie from 'react-lottie';

import  contact from '../images/about.json'
//lights

import SkillBar from 'react-skillbars';
import solaire from '../images/soliarehexa.png'; 
import Iframe from 'react-iframe'


const skills = [
    {type: "HTML", level: 90},
    {type: "CSS", level: 90},
    {type: "JavaScript", level: 80},
    {type: "jQuery", level: 80},
    {type: "Laravel", level: 80},
    {type: "React", level: 80},
    {type: "Vue", level: 60},
    {type: "Java", level: 70},
    {type: "PHP", level: 80},
    {type: "SQL", level: 80}
  ];



  const colors = {
    "bar": "#37b8d4",
    
    "title": {
      "text": "white",
      "background": "#0d6c80"
    }
  }


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
    }
});

const WhiteTextTypography = withStyles({
    root: {
        color: "white"
    }
})(Typography);

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            redirect: false,
            openmenu: false,
            redirect: false
        };
    }


    componentDidMount(){
        const script = document.createElement("script");
  script.src = "../js/TagCanvas.js";
  script.async = true;
  script.onload = () => this.scriptLoaded();
  document.body.appendChild(script);

    }

    scriptLoaded() {
        window.A.sort();
      }


    render() {
        const classes = useStyles();


        const defaultOptions = {
            loop: true,
            autoplay: true, 
          
            animationData: contact,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };


        return (
            <div
                style={{
                    // borderTop: "3px solid #202833",
                    position: "relative",
                    backgroundColor: "#202833",
                    height: "100%",
                          width: "100vw",
                        //   backgroundImage:`url(${waves})`,
                        //   backgroundRepeat  : 'no-repeat',
               
                }}
            >
                <div
                    style={{
                        position: "absolute",
                 
                        align: "center"
                    }}
                >
                  <Particles
                  height="100vh"
                  width="100vw"
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 400
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                "circle"
	            ],
	            "image": [
	                {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	                    "height": 20,
	                    "width": 30
	                },
                    {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg",
	                    "height": 20,
	                    "width": 25
                    },
                    {
	                    "src": " https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
	                    "height": 5,
	                    "width": 5
                    },
                    {
	                    "src": " https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
	                    "height": 20,
	                    "width": 30
                    },

                   

                   
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": true
	            }
	        }
	    },
	    "retina_detect": false
	}} />


                </div>

                <Grid
                    container
                    align="center"
                    direction="row"
                    alignItems="center"
                    justify="center"
                    
                    style={{ minHeight: "100vh" ,      padding: '1em', }}
                >




<Grid item xs={12}>
                    <WhiteTextTypography
                    variant="h4" component="h2">
 ABOUT

</WhiteTextTypography>

<WhiteTextTypography
                    variant="h4" component="h2">
___
</WhiteTextTypography>

</Grid>



                    <Grid item xs={12} md={6}  >


                    <img src={solaire}  style={{ height: "250px"  }} alt="Logo" />

                    <WhiteTextTypography variant="h5" gutterBottom>
                              Who's this guy?
                    </WhiteTextTypography>
                    <WhiteTextTypography variant="h6" gutterBottom>
                  
                        I'm a innovative fullstack Developer for Pylon International Corp. base in San Pablo City as a contractor with a year of experience managing all aspects of developement process for small to large scale projects.
                      
                        Let's make something special.
                    </WhiteTextTypography>
                    </Grid>
                

                    <Grid item xs={12} md={6} 
                    
                    style={{   padding: '1em', }}
                    
                    >
{/* 
                    <SkillBar
                    
                    colors={colors}
                    height={25}
                    skills={skills}/> */}

<Iframe url="/skills/skillschart"
        width="100%"
        height="400px"
        frameBorder="0"
        display="initial"
        position="relative"/>

                        
                    <WhiteTextTypography variant="h6" gutterBottom>
                        {/* <Typing speed={50}> */}
                        Feel free to take a look at my latest projects on the
                        web portfolio page.
                        {/* then this will be typed at 200ms/character. */}
                        {/* </Typing> */}
                    </WhiteTextTypography>

            </Grid>
     
      
            </Grid>
         
{/*  */}
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Skills);
