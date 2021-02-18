import React, {Component} from 'react';

//import './Task.css';

class Task extends Component {//props datos que un componente recibe atravez de un objeto, PROPIEDADES



    /*
    state = {
    tasks: tasks
    }*/

    //function
    StyleCompleted() {
        return {
            fontSize: '30px',
            color: this.props.taskM.done ? 'gray' : 'red',
            //color: 'gray',
            textDecoration: this.props.taskM.done ? 'line-through':'none'
        }
    }
  


  render(){

    //Destructuring de JS??
    //Extrae los elementos antes de mostrarlos..
    const {taskM} = this.props;//De this.props voy a extraer task -> Guarda datos dentro de la constante "task"

    const redColor = {background: 'red'};

    //return <div style={redColor}>
    return <div style={this.StyleCompleted()}>
        {taskM.title} - 
        {taskM.description} - 
        {taskM.done} - 
        {taskM.id}
        <input type='checkbox'/>
        <button style={btnDelete}>
            x
        </button>
    </div>

    /*
    return <div>
        {task.title} - 
        {task.description} - 
        {task.done} - 
        {task.id}
        <input type='checkbox'/>
        <button style={btnDelete}>
            x
        </button>
    </div><

    /*
    const btnDelete = {
        background: 'yellow',
        fontSize: '18px'
    };*/

    /*
    return <div style={{background: 'red'}}>
        {task.title} - 
        {task.description} - 
        {task.done} - 
        {task.id}
        <input type='checkbox'/>
        <button>
            x
        </button>
    </div>
    */

    /*
    return <div className='red'>
        {task.title} - 
        {task.description} - 
        {task.done} - 
        {task.id}
        <input type='checkbox'/>
        <button>
            x
        </button>
    </div>
    */

/*
return <div>
{this.props.task.title} - 
{this.props.task.description} - 
{this.props.task.done} - 
{this.props.task.id}
<input type='checkbox'/>
<button>
    x
</button>
</div>
*/
       
    /*return <div><h1>hola mundo</h1>
      { 30 / 5 }
      { this.state.Tasks.map(ele => <p key={ele.id}> {ele.title} -- {ele.description} --- {ele.done} ---- {ele.id}</p>)}
    </div>*/
    //return <a>TASKS</a>
    //return <h1>TASKS</h1>
    //export default App;
  }
}


const btnDelete = {
    background: '#ea2027',
    fontSize: '18px',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    //float: 'right'
};


export default Task;