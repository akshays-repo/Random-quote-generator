import React, { Component } from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from './components/appbar'


const styles =(theme=> ( {
  App:{
    background:'#EAF0F1'
  },
 container:{
   display:'flex',
   height:'100vh',
   alignItems:'center'
 },
 card: {
  minWidth: 275,
  background:'#EAF0F1',
 },
 
bullet: {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
},
title: {
  fontSize:20,
},
pos: {
  marginBottom: 12,
},
button: {
  margin: theme.spacing(),
},
}));

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quotes:[],
      auther:[],
      selectedQuoteIndex:null,
    }
    this.assignNewQuoteIndex=this.assignNewQuoteIndex.bind(this)
    this.selectedQuoteIndex=this.selectedQuoteIndex.bind(this)
  }
  componentDidMount(){
     fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex));
  }
  
  selectedQuoteIndex(){
    if(!this.state.quotes.length){
      return
    }
    let min =Math.ceil(0);
    let max = this.state.quotes.length-1;
    let value =  Math.random() * (max- min) + min;
    return Math.floor(value)

  };
  get selectedQuote() {
    return this.state.quotes[this.state.selectedQuoteIndex];
 }
 assignNewQuoteIndex(){
   this.setState({selectedQuoteIndex:this.selectedQuoteIndex()});
 }
  
  render() {
    console.log(this.state.quotes[this.state.selectedQuoteIndex])
   
    return (
      <div className={this.props.classes.App}>
      <AppBar> </AppBar>
      <Grid className={this.props.classes.container} id='quote-box' justify='center' container>
      <Card className={this.props.classes.card}>
      <CardContent>
           
      {this.selectedQuote ? 
        <Typography className={this.props.classes.title} variant="h6" color="inherit" >
         {this.selectedQuote.quote}
        </Typography> :null}
        {this.selectedQuote ? 
          <Typography className={this.props.classes.pos} color="textSecondary">
            -{this.selectedQuote.author} 
          </Typography> :null} 
      <CardActions>
      <Button variant="contained" size="small" onClick={this.assignNewQuoteIndex}>Next Quote</Button>
      </CardActions>
      </CardContent></Card></Grid>
      </div>
    );
  }}
 export default withStyles(styles)(App);
