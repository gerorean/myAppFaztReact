import React, {Component} from 'react';

import Task from './Task';



//import './App.css';

//import tasks from './sample/tasks.json';

//console.log(tasks);


class Tasks extends Component {//props datos que un componente recibe atravez de un objeto, PROPIEDADES
  
    /*
  state = {
    tasks: tasks
  }*/
  
  
  render(){
    return this.props.tasks.map(ele => <Task task={ele} key={ele.id}/>
    )
    /*
    return this.props.tasks.map(ele => <p key={ele.id}>
        {ele.title} - {ele.description} - {ele.done} - {ele.id}
            <input type='checkbox'/>
            <button>
                x
            </button>
        </p>)*/
    /*return <div><h1>hola mundo</h1>
      { 30 / 5 }
      { this.state.Tasks.map(ele => <p key={ele.id}> {ele.title} -- {ele.description} --- {ele.done} ---- {ele.id}</p>)}
    </div>*/
    //return <a>TASKS</a>
    //return <h1>TASKS</h1>
    //export default App;
  }
}


export default Tasks;
