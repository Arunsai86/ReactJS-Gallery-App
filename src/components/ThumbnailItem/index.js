import './index.css'

const ThumbnailItem = props => {
  const {eachImgItem, clickImg} = props
  const changeImage = () => {
    clickImg(eachImgItem.id)
  }
  return (
    <li>
      <button type="button" onClick={changeImage}>
        <img
          src={eachImgItem.thumbnailUrl}
          alt={eachImgItem.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
