import {Component} from 'react'

import {v4} from 'uuid'

import MyTasks from '../MyTasks'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    tasksList: [],
    tasks: '',
    activeTag: tagsList[0].optionId,
  }

  onSubmitTasks = event => {
    event.preventDefault()
    const {tasks, activeTag} = this.state

    const newTasks = {
      id: v4(),
      tasks,
      activeTag,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTasks],
      tasks: '',
      activeTag: tagsList[0].optionId,
    }))
  }

  onChangeTasksInput = event => {
    this.setState({
      tasks: event.target.value,
    })
  }

  onSelectItem = event => {
    this.setState({
      activeTag: event.target.value,
    })
  }

  render() {
    const {tasks, activeTag, tasksList} = this.state
    const showTasks = tasksList.length > 0
    return (
      <div className="app-container">
        <div className="container1">
          <form onSubmit={this.onSubmitTasks}>
            <h1 className="heading"> Create a task! </h1>
            <div className="card">
              <label htmlFor="tasks" className="label-input">
                Tasks
              </label>
              <input
                value={tasks}
                className="input"
                placeholder="Enter the task here"
                id="tasks"
                onChange={this.onChangeTasksInput}
              />
            </div>
            <div className="card">
              <label htmlFor="tags" className="label-input">
                Tags
              </label>
              <select
                value={activeTag}
                onChange={this.onSelectItem}
                className="input"
              >
                {tagsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button type="submit" className="add-button">
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="container2">
          <h1> Tags </h1>
          <ul className="tags-lists">
            {tagsList.map(each => (
              <MyTasks
                each={each}
                key={each.optionId}
                selectTag={this.selectTag}
              />
            ))}
          </ul>

          <div>
            <h1> Tasks </h1>
            {showTasks ? (
              <ul>
                {tasksList.map(each => (
                  <li className="tasks">
                    <p> {each.tasks} </p>
                    <p> {each.activeTag} </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p> No Tasks Added Yet </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
