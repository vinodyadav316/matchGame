import './index.css'

const ImageItems = props => {
  const {eachItem} = props
  const {thumbnailUrl} = eachItem
  return (
    <li className="list-container">
      <img src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default ImageItems
