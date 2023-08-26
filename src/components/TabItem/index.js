import './index.css'

const TabItem = props => {
  const {tabsList, changeActive} = props
  const {displayText} = tabsList
  const changeStatus = changeActive ? 'tabItemStatus' : ''
  return (
    <div className="tabs-con">
      <button type="button">
        <p className={'tabItem-name'`${changeStatus}`}>{displayText}</p>
      </button>
    </div>
  )
}

export default TabItem
