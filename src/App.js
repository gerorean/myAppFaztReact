import React, {Component} from 'react';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';//Styles

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';



console.log(tasks);
console.log('Task=',Tasks);



class App extends Component {//props datos que un componente recibe atravez de un objeto, PROPIEDADES
  
  state = {
    tasks: tasks
  }
  
  
  render(){
    return <div><h1>hola mundo</h1>
      { 30 / 5 }
      <Tasks tasks={this.state.tasks}/>
    </div>

/*
return <div><h1>hola mundo</h1>
{ 30 / 5 }
{ this.state.tasks.map(ele => <p key={ele.id}>
  {ele.title} -- {ele.description} --- {ele.done} ---- {ele.id}
  <Tasks/>
  </p>)}
<Tasks/>
</div>
*/

    //export default App;
  }
}


export default App;



/*
//Estado: datos internos que tiene un componente

class Helloworld extends React.Component {//props datos que un componente recibe atravez de un objeto, PROPIEDADES
  //console.log(props);

  state = {
    show: true
  }

  toggleShow = () => {
  //toggleShow() {
    this.setState({show: !this.state.show})
    //this.setState({show:false})
  }

  render(){
    if (this.state.show){
      return (
        <div id='hello'>
          <h3>{this.props.subt}</h3>
          Hello World and {this.props.mytext}
          <button onClick={
            this.toggleShow
            //this.toggleShow.bind(this)
            //this.toggleShow()//?
            //</div>() => {
            //function(){
            //alert('wellcome');
            //this.state.show = false;
            //this.setState({show:false})
            //}
          }>
          Toggle Show</button>
        </div>
      );
    } else {
      return (
      <h1>
        There are not elements
        <button onClick={this.toggleShow}>
          Toggle Show
        </button>
      </h1>
      )
    }
    ///return (
    ///  <div id='hello'>
    ///    <h3>{this.props.subt}</h3>
    ///    Hello World and {this.props.mytext}
    ///  </div>
    ///);
  }
}
*/

/*
//Estado: datos internos que tiene un componente
function Helloworld(props) {//props datos que un componente recibe atravez de un objeto, PROPIEDADES
  console.log(props);
  return (
    <div id='hello'>
      <h3>{props.subt}</h3>
      Hello World and {props.mytext}
    </div>
  );
}
*/

/*
const App = () =>
<div className="App">This is my component: 
  <Helloworld mytext=' Hello Fazt' subt='lorem ipsu'/>
  <Helloworld mytext=' HelloooWorld' subt='fghf2'/>
  <Helloworld mytext=' hello!' subt='3'/>
</div>
*/

/*
function App() {
  return (
    <div className="App">
      This is my component: <Helloworld/><Helloworld/><Helloworld/>
    </div>
  );
}
*/

//export default App;

//linea 8 <img src={logo} className="App-logo" alt="logo" />
        
//https://www.youtube.com/watch?v=zIY87vU33aA&t=4s

//tasks.json: Arreglo de multiples objetos, cada objeto será una tarea, cada tarea tendra un id, etc.. varias propiedades..
//{this.state.tasks}