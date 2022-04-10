import MinContent from '../MinContent/MinContent'
import './SingleContent.css'

const SingleContent = ({id, poster, title, rating, genres}) => {

  return (
    <>
      <MinContent id={id} poster={poster} rating={rating} genres={genres} />

      <div className='main-info'>
        <b className="title">{title}</b>
        <p className="duration">137 min</p>
      </div>
    </>
  )
}

export default SingleContent