import MainInfo from '../MainInfo/MainInfo'
import MinContent from '../MinContent/MinContent'
import './SingleContent.css'

const SingleContent = ({id, title}) => {

  return (
    <>
      <MinContent id={id}/>
      <MainInfo title={title}/>
    </>
  )
}

export default SingleContent