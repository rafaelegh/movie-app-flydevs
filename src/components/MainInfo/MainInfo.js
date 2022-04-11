import './MainInfo.css';

const MainInfo = ({title}) => {
  return (
    <div className='main-info'>
        <b className="title">{title}</b>
        <p className="duration">137 min</p>
    </div>
  )
}

export default MainInfo