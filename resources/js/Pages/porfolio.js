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
        name: "My best client",
        category: ["all", "frontend", "ux-ui"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        title: "EBPLS",
        author: "author"
    },
    {
        name: "My favorite case",
        category: ["all", "mobile", "ux-ui"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        title: "ECRIS",
        author: "ECRIS"
    },
    {
        name: "A old job",
        category: ["all", "frontend"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
        title: "QRPASS",
        author: "QRPASS"
    },
    {
        name: "It is a really cool website",
        category: ["all", "frontend", "ux-ui"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
        title: "ATIN",
        author: "ATIN"
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: "COMPANY",
        author: "COMPANY"
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: "Image",
        author: "author"
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: "Image",
        author: "author"
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: "Image",
        author: "author"
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: "Image",
        author: "author"
    }
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
                    filtered: p.category.includes(this.state.filter)
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
                    style={{ minHeight: "100vh", padding: "1em" }}
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
                                    this.setfilter("frontend");
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
                                    this.setfilter("mobile");
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
                                    this.setfilter("ux-ui");
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
                                    this.setfilter("others");
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
                                            height: 250,
                                            width: 350,
                                            backgroundSize: "cover"
                                        }}
                                    >
                                        <Zoom in={this.state.zoom}>
                                            <div
                                                className="hidenwords"
                                                id={item.title}
                                                style={{
                                                    display: "none",
                                                    backgroundColor: "white",
                                                    height: "100%",
                                                    width: 350,
                                                    borderTop:
                                                        "10px solid #303F9F"
                                                }}
                                            >
                                                <Grid
                                                    container
                                                    spacing={4}
                                                    style={{
                                                        paddingBottom: 20,
                                                        paddingTop: 20
                                                    }}
                                                >
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            variant="h5"
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
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Button
                                                            variant="outlined"
                                                            color="secondary"
                                                        >
                                                            Learn More
                                                        </Button>
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
                        </Grid>
                    </Container>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Porfolio);
