import './index.css'

const MyTasks = props => {
  const {each, selectTag} = props
  const {optionId, displayText} = each

  const onClickTag = () => {
    selectTag(optionId)
  }

  return (
    <li>
      <button type="button" onClick={onClickTag}>
        {displayText}
      </button>
    </li>
  )
}

export default MyTasks
