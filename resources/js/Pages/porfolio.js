import React, { useState, useEffect  } from "react";

import {
    makeStyles,
    withStyles,
    createMuiTheme
} from "@material-ui/core/styles";

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

import Button from "@material-ui/core/Button";


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import InfoIcon from '@material-ui/icons/Info';


import Container from '@material-ui/core/Container';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
        height: 450,
      },
      
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },

   
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
     
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
        title: 'Image',
        author: 'author',
    },
    {
        name: "My favorite case",
        category: ["all", "mobile", "ux-ui"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "A old job",
        category: ["all", "frontend"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "It is a really cool website",
        category: ["all", "frontend", "ux-ui"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: 'Image',
        author: 'author',
    },
    {
        name: "Something more",
        category: ["all", "others"],
        img: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        title: 'Image',
        author: 'author',
    }
];











class Porfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : portfolio,
            filter: "all",
        };
    }




componentDidMount(){

    this.setfilter();
}




  
setfilter(fil){

console.log('asd');
    this.setState({
        projects :  [],
        filter: fil,
    }, () =>{

        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(this.state.filter) }));

        this.setState({
            projects :  filtered
        });

    }
    );  
}


   
    render() {
        const classes = useStyles();

        return (
            <div
                style={{
                    borderTop: "10px solid #C5C6C8",
                    position: "relative",
                    backgroundColor: '#46A29F',
                    height: "100%"
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
                    <Grid container justify="center" spacing={2} style={{paddingBottom: 20}}>
                      

                        <Grid item>
                            <Button 
                                onClick={() => {
                                    this.setfilter('all');
                                }}
                            variant="contained" color="primary">
                              All
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button 
                               onClick={() => {
                                this.setfilter('frontend');
                            }}
                              
                            variant="contained" color="primary">
                                REACT
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button 
                               onClick={() => {
                                this.setfilter('mobile');
                            }}
                             
                            variant="contained" color="primary">
                               ANDROID
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button 
                                  onClick={() => {
                                    this.setfilter('ux-ui');
                                }}
                                 
                             
                            variant="contained" color="primary">
                                LARAVEL
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button 
                                onClick={() => {
                                    this.setfilter('others');
                                }}
                           
                            variant="contained" color="primary">
                               CODEIGNITER
                            </Button>
                        </Grid>
                    </Grid>



                


<Container>
          

<Grid container 
align="center"
justify="center"
xs={12} 

 >


                
  {this.state.projects.map(item => item.filtered === true ? (



<img src={item.img}
      style={{height: 250 , width: 350  }}
      alt={item.title} />


 

   




    
  ) : '')}


</Grid>

</Container>


                </Grid>
                

      
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(Porfolio);
