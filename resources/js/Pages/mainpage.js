import React, { Suspense, useEffect, useRef, useState } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";

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


import Lottie from 'react-lottie';

import  contact from '../images/scroll.json'


import waves from '../images/top.svg'
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
    }
});

const WhiteTextTypography = withStyles({
    root: {
        color: "white"
    }
})(Typography);

class mainpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            redirect: false,
            openmenu: false,
            redirect: false
        };
    }

    render() {
        const classes = useStyles();


        const defaultOptions = {
            loop: true,
            autoplay: true, 
            padding : 100,
            animationData: contact,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };



        return (
            <div
                style={{
                    position: "relative",
                    backgroundColor: "#0B0C10",
                    height: "100%",
                    width: "100vw",
                    backgroundRepeat  : 'no-repeat',
                    backgroundImage:`url(${waves})`,
                    backgroundPosition: "center bottom",

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
                    width= "100vw"
                     params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    
                    />
                </div>




                <Grid
                    container
                    align="center"
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" ,   padding: '1em', borderBottom: "10px solid #202833",
 
                }}
                >

                    
            

                    <WhiteTextTypography variant="h4" gutterBottom>
                        <Typing speed={50}>
                            Hello, my name is Jan Dean Pasajol
                        </Typing>

                        <TypistLoop interval={1500}>
                            {["Creative", "Adaptable ", "Independent" , "Resourceful"].map(text => (
                                <Typist key={text} startDelay={1000}>
                                    {text}
                                    <Typist.Backspace
                                        count={text.length}
                                        delay={1000}
                                    />
                                </Typist>
                            ))}
                        </TypistLoop>
                    </WhiteTextTypography>
                    <WhiteTextTypography variant="h6" gutterBottom>
                        {/* <Typing speed={50}> */}
                        Feel free to take a look at my latest projects on the
                        web portfolio page.
                        {/* then this will be typed at 200ms/character. */}
                        {/* </Typing> */}
                    </WhiteTextTypography>

                    <WhiteTextTypography
                        variant="overline"
                        display="block"
                        gutterBottom
                    >
                        Fullstack Developer
                    </WhiteTextTypography>
                    <Lottie options={defaultOptions}
                            height={50}
                            width={50}

                            />
                </Grid>

            

            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(mainpage);
