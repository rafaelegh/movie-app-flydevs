import MainInfo from '../MainInfo/MainInfo'
import MinContent from '../MinContent/MinContent'
import './SingleContent.css'

const SingleContent = ({id, poster, title, rating, genres}) => {

  return (
    <>
      <MinContent id={id} poster={poster} rating={rating} genres={genres} />
      <MainInfo title={title}/>
    </>
  )
}

export default SingleContent