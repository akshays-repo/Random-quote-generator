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
 container:{
   display:'flex',
   height:'100vh',
   alignItems:'center'
 },
 card: {
  minWidth: 275,
  background:  'linear-gradient(to right bottom, #26D0CE, #F45C43,#A6FFCB)',
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
      <div className="App" id="">
      <AppBar> </AppBar>
      <Card className={this.props.classes.card}>
      <CardContent>
      <Grid className={this.props.classes.container} id='quote-box' justify='center' container>
      
     <Grid item >      
      {this.selectedQuote ? 
        <Typography className={this.props.classes.title} variant="h6" color="inherit" >
         {this.selectedQuote.quote} - {this.selectedQuote.author} 
        </Typography> :null} 
        
      <CardActions>
      <Button variant="contained" display="flex" align='middle' component="span"size="small" onClick={this.assignNewQuoteIndex}>Next Quote</Button>
      </CardActions>
      </Grid></Grid>
      </CardContent></Card>
      </div>
    );
  }}


  export default withStyles(styles)(App);
