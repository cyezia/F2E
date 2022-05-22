import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    // 获取输入的值
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    // console.log(name, age);
    const personObj = ({id: nanoid(), name, age});
    // console.log('personObj: ', personObj);
    this.props.addPeople(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
    
  }
  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件求和为{this.props.he}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"></input>&nbsp;
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"></input>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.people.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    people: state.rens,
    he: state.he
  }), // 映射状态
  {addPeople: createAddPersonAction }
)(Person);