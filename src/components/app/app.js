import { Component,  } from 'react/cjs/react.production.min';
import React from 'react';
import ReactDOM from 'react-dom';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


// class WhoAmI extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       years: 27,
//       text: '+++',
//       position: ''
//     }
//   }
//   nextYear = () => {
//     console.log('+++');
//     this.setState({
//       years: this.state.years + 1
//     })
//   }
//   commitInputChanges = (e) =>{
//     this.setState({
//       position: e.target.value
//     })
//   }
//   render() {
//     const {name, surname, link} = this.props;
//     const {position, years} = this.state;
//     return(
//       <div>
//         <button onClick={this.nextYear}>{this.state.text}</button>
//         <h1>{name}, surname - {surname}, age - {years}, position - {position}</h1>
//         <a href={link}>My site</a>
//         <form>
//           <span>Vvedite doljnost: </span>
//           <input type="text" onChange={this.commitInputChanges}/>
//         </form>
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name:'John C.', salary:800, increase: true, id: 1},
        {name:'Alex M', salary:3000, increase: false, id: 2},
        {name:'Karl G.', salary:5000, increase: false, id: 3}
      ]
    }
    this.maxId = 4
  }
  deleteItem = (id) =>{
    this.setState(({data})=>{
      const index = data.findIndex(elem=>elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index+1);
      // const newArr = [...before, ...after];
      return {
        // data: newArr
        data: data.filter(item=>item.id !==id)
      }
    })
  }
  addItem = (name,salary)=>{
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({data})=>{
      const newArr = [...data, newItem];
      return{
        data: newArr
      }
    })
  }
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
  }
  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        {/* <WhoAmI name="saloh" surname="malik" link="olx.uz"/> */}
        <AppInfo employees={employees} increased={increased}/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}


export default App;

// const data = [
//   {name:'John C.', salary:800, increase: true, id: 1},
//   {name:'Alex M', salary:3000, increase: false, id: 2},
//   {name:'Karl G.', salary:5000, increase: false, id: 3}
// ]

/* <WhoAmI name="saloh" surname="malik" link="https://www.olx.uz/"/> */ 

/* <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/> */

        // class WhoAmI extends Component{
        //   constructor(props){
        //     super(props);
        //     this.state = {
        //       counter: 27,
        //       text: '+++'
        //     }
        //   }
        //   nextYear = () => {
        //     console.log('+++');
        //     this.setState({
        //       counter: this.state.counter + 1
        //     })
        //   }
        //   render() {
        //     const {name, surname, link} = this.props;
        //     return(
        //       <div>
        //         <button onClick={this.nextYear}>{this.state.text}</button>
        //         <h1>{name}, surname - {surname}, age - {this.state.counter}</h1>
        //         <a link={link}>My Profile</a>
        //       </div>
        //     )
        //   }
        // }
        // constructor(props) {
        //   super(props)
        //   this.state = {      
        //     counter: this.props.counter
        //   }
        // }
        // IncroClick = () => {
        //   if(this.state.counter<50){
        //     this.setState(state=>({
        //       counter: state.counter+1
        //     }))
        //   }
          
        // }
        // DecroClick = () =>{
        //   if(this.state.counter>-50){
        //     this.setState(state=>({
        //       counter: state.counter - 1 
        //     }))
          
        //   }
        // }
        // RandomClick = () => {
        //   const min = -50;
        //   const max = 50;
        //   const rand = min + Math.random() * (max - min);
        //   this.setState({ counter: Math.round(rand) });
        // }
        // NullClick= () =>{
        //   this.setState(state=>({
        //     counter: this.props.counter
        //   }))
        // }