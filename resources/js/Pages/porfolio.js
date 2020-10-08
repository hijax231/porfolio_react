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

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Zoom from "@material-ui/core/Zoom";


import ubilis from '../images/porfolio/ubilis1.png'
import ecris from '../images/porfolio/ecris.png'
import atin from '../images/porfolio/atin.png'
import esgc from '../images/porfolio/ecosavers.png'
import humanar from '../images/porfolio/humanar.png'
import apoint from '../images/porfolio/apoint.png'
import companyweb from '../images/porfolio/companyweb.png'
import pylonproj from '../images/porfolio/pylonproj.png'
import hire from '../images/porfolio/hire.png'
import back from '../images/porfolio/back.png'
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

const portfolio = [
    {
        name: "EBPLS",
        category: ["Boostrap"," / ", "Codeigniter"],
        realcat: ["all", " / ","Boostrap"," / ", "Codeigniter"],
        img: ubilis,
        title: "Electronic Business Processing And Licensing System ",
        author: "EBPLS",
        description: "A integrated multi platform software solution that utilizes data analytics which is designed to assist in data gathering, business registration, renewal, automated assessment, approval of  business applications and printing of Business Permit."  
     },
    {
        name: "ECRIS",
        category: ["Boostrap"," / ", "Codeigniter"],
        realcat: ["all", " / ","Boostrap"," / ", "Codeigniter"],
        img: ecris,
        title: "Electronic Civil Registry Information System 2.0",
        author: "ECRIS",
        description: "Web based solution used in the creation of an electronic data base and is capable of releasing requested documents in real time manner. Handles online request system and uses data analytics to release pertinent reports and statistics." 
   },
    {
        name: "ATIN",
        category: ["React"," / ", "Laravel"],
        realcat: ["all", " / ","React"," / ", "Laravel", "android"],
        img: atin,
        title: "ATIN COVID19 Tracker",
        author: "ATIN",
        description: "ATIN COVID TRACKER is an easy-to-use progressive web app that can: alert you if you have been in close contact with someone who has tested positive for coronavirus. advise you on what to do to protect yourself and others."   
    },
    {
        name: "ESGC",
        category: ["C#"," / ", "UX-Ui"],
        realcat:["all", " / ","C#"," / ", "UX-Ui"],
        img:esgc,
        title: "ESGC Inventory System",
        author: "ESGC",
        description:  "A Stand Alone Software used in tracking goods for the entire supply chain, from adding new inventory to end sales and reports", 
    },
    {
        name: "HumanAR ",
        category: ["C#"," / ", "Unity"],
        realcat: ["all", " / ","C#"," / ", "Unity", "android"],
        img: humanar,
        title: "HumanAR",
        author: "HumanAR",
        description: "The HumanAR is an augmented reality application that improves the retention of the students in which the students uses android camera to capture the image target from the book that they are using" 
    },
    {
        name: "Appointment",
        category: ["React"," / ", "Laravel"],
        realcat: ["all", " / ","React"," / ", "Laravel", "android"],
        img: apoint,
        title: "HR Appointment System",
        author: "Appointment",
        description: "The Appointment system is a web based solution that allows the users to set apointment/schedule for releasing of their ID and it is also used in order to minimize waiting times, prioritize appointments and optimize the utilization of resources.  "    
    },
    {
        name: "Pylon website",
        category: ["Boostrap"," / ", "Codeigniter"],
        realcat:["all", " / ","Boostrap"," / ", "Codeigniter"],
        img: companyweb,
        title: "Pylon Company Website",
        author: "Pylon",
        description: "A Company Website that tells  visitors all about your business and the Contact Us page informs everyone how to get in touch with you. It legitimizes your business and improves your credibility. It gives your business an identity and is virtual proof that it exists."    
    },
    {
        name: "Pylon Project Management",
        category: ["Boostrap"," / ", "Codeigniter"],
        realcat:["all", " / ","Boostrap"," / ", "Codeigniter"],
        img: pylonproj,
        title: "Pylon Project Management SYS",
        author: "Pylonproj",
        description: "Pylon Project Management is a web based solution that used for managing a project by planning, organizing, and managing its different required aspects"     
},
//     {
//         name: "Have any Projects in Mind?",
//         category: ["Hire Me!"],
//         realcat:["all", " / ","Boostrap"," / ", "Codeigniter","React","android","C#","Laravel"],
//         img: hire,
//         title: "Have any Projects in Mind?",
//         author: "Have any Projects in Mind?",
//         description: "Pasajol231@gmail.com "
    
// }
];

class Porfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: portfolio,
            filter: "all",
            zoom: false
        };
    }

    componentDidMount() {
        this.setfilter();
    }

    showdata(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";

            setTimeout(() => {
                this.setState(
                    {
                        zoom: true
                    },
                    () => {
                        console.log("asdasd");
                    }
                );
            }, 20);
        } else {
            x.style.display = "none";

            this.setState({
                zoom: false
            });
        }
    }

    setfilter(fil = "all") {
        this.setState(
            {
                projects: [],
                filter: fil
            },
            () => {
                const filtered = portfolio.map(p => ({
                    ...p,
                    filtered: p.realcat.includes(this.state.filter)
                }));

                this.setState({
                    projects: filtered
                });
            }
        );
    }

    render() {
        const classes = useStyles();

        return (
            <div
                style={{
                    borderTop: "10px solid #202833",
                    position: "relative",
                    backgroundColor: "#202833",
                    height: "100%",
                
                 
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

                <Grid
                    container
                    align="center"
                    direction="row"
                    style={{ minHeight: "100vh", padding: "1em"  , 
                    }}
                >
                    <Grid
                        container
                        justify="center"
                        spacing={2}
                        style={{ paddingBottom: 20 }}
                    >
                        <Grid item xs={12}>
                            <WhiteTextTypography variant="h4" component="h2">
                                PROJECTS
                            </WhiteTextTypography>

                            <WhiteTextTypography variant="h4" component="h2">
                                _______
                            </WhiteTextTypography>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => {
                                    this.setfilter("all");
                                }}
                                variant="contained"
                                color="primary"
                            >
                                All
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                onClick={() => {
                                    this.setfilter("C#");
                                }}
                                variant="contained"
                                color="primary"
                            >
                            C#
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                onClick={() => {
                                    this.setfilter("React");
                                }}
                                variant="contained"
                                color="primary"
                            >
                                REACT
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                onClick={() => {
                                    this.setfilter("android");
                                }}
                                variant="contained"
                                color="primary"
                            >
                                ANDROID
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                onClick={() => {
                                    this.setfilter("Laravel");
                                }}
                                variant="contained"
                                color="primary"
                            >
                                LARAVEL
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                onClick={() => {
                                    this.setfilter("Codeigniter");
                                }}
                                variant="contained"
                                color="primary"
                            >
                                CODEIGNITER
                            </Button>
                        </Grid>
                    </Grid>

                    <Container>
                        <Grid container align="center" justify="center" xs={12}>
                            {/* <img
onMouseEnter={(e) => {
    e.currentTarget.src = this.showdata(item.title)
    // console.log(item.title);
}}

onMouseLeave={(e) => {
    e.currentTarget.src = item.img;
}}

onClick={()=>{
}}  src={item.img}
      style={{height: 250 , width: 350  }}
      alt={item.title} /> */}

                            {this.state.projects.map(item =>
                                item.filtered === true ? (
                                    <div
                                        onMouseEnter={e => {
                                            this.showdata(item.title);
                                        }}
                                        onMouseLeave={e => {
                                            this.showdata(item.title);
                                        }}
                                        className="home-card-view flex-center"
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                            height: 260,
                                            margin: 10,
                                     
                                           minWidth: 390,
                                         
                                            backgroundSize: "cover"
                                        }}
                                    >
                                        <Zoom in={this.state.zoom}>
                                            <div
                                                className="hidenwords"
                                                id={item.title}
                                                style={{
                                                    display: "none",
                                                    backgroundImage:`url(${back})`,
                                                 
                                                    backgroundSize: "cover",
                                                    height: "100%",
                                                    width: 390,
                                                    marginTop: 10,
                                                    // borderTop:
                                                    //     "10px solid #303F9F"
                                                }}
                                            >
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    style={{
                                                        paddingBottom: 20,
                                                        paddingLeft: 20,
                                                        paddingRight: 20,
                                                    }}
                                                >
                                                    <Grid item xs={12}>
                                                        <Typography
                                                       
                                                            variant="overline"
                                                            component="h2"
                                                        >
                                                            {" "}
                                                            {item.title}{" "}
                                                        </Typography>

                                                        <Typography
                                                         color="secondary"
                                                            variant="overline"
                                                            display="block"
                                                            gutterBottom
                                                        >
                                                            {" "}
                                                            {item.category}{" "}
                                                        </Typography>
                                                 
                                                    <Typography
                                                            color=""
                                                            variant="body2"
                                                            display="block"
                                                            gutterBottom
                                                        >
                                                   {item.description}
                                                   </Typography>
                                                    </Grid>
                                                </Grid>

                                                <div></div>
                                            </div>
                                        </Zoom>
                                    </div>
                                ) : (
                                    ""
                                )
                            )}



<div
                                        onMouseEnter={e => {
                                            this.showdata('static');
                                        }}
                                        onMouseLeave={e => {
                                            this.showdata('static');
                                        }}
                                        className="home-card-view flex-center"
                                        style={{
                                            backgroundImage:`url(${hire})` ,
                                            height: 260,
                                            margin: 10,
                                            minWidth: 390,
                                            backgroundSize: "cover"
                                        }}
                                    >
                                        <Zoom in={this.state.zoom}>
                                            <div
                                                className="hidenwords"
                                                id="static"
                                                style={{
                                                    display: "none",
                                                    backgroundImage:`url(${back})`,
                                                    backgroundSize: "cover",
                                                    backgroundColor: "white",
                                                    height: "100%",
                                                    marginTop: 10,
                                                    width: 390,
                                            
                                                }}
                                            >
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    style={{
                                                        paddingBottom: 20,
                                                        paddingLeft: 20,
                                                        paddingRight: 20,
                                                    }}
                                                >
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            variant="overline"
                                                            component="h2"
                                                        >
                                                        Have any Projects in Mind?
                                                        </Typography>

                                                        <Typography
                                                            color="secondary"
                                                            variant="overline"
                                                            display="block"
                                                            gutterBottom
                                                        >
                                                          HIRE ME!
                                                        </Typography>
                                                 


                                                   

                                                <Typography
                                                       
                                                            variant="overline"
                                                            display="block"
                                                            gutterBottom
                                                        >
                                                 Whether you have any projects in mind ,features, demo or anything else im ready to answer all your questions. Please free to contact me!
                                                        </Typography>
                                                
                                                    </Grid>
                                                </Grid>

                                                <div></div>
                                            </div>
                                        </Zoom>
                                    </div>
                        </Grid>
                    </Container>
                </Grid>

</div>




        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Porfolio);
