// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {key, imageDetails, onChangeGallery, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageDetails
  const onClickEvent = () => {
    onChangeGallery(imageUrl, imageAltText)
  }
  const activeBtn = isActive ? 'thumbnail-active' : 'thumbnailBtn'
  console.log(activeBtn)
  return (
    <li className="thumbnail">
      <button className={activeBtn} onClick={onClickEvent}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
