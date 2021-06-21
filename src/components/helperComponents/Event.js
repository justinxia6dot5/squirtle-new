import OverflowBox from "./OverflowBox";

const Event = ({ month, date, year, name, description }) => {

  return (
    <div style={{ width: '25vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10vh' }}>
        <OverflowBox content={
          <span>
            <div style={{ color: '#264E6F' }}>{month}</div>
            <div style={{ color: 'white' }}>{date}</div>
            <div style={{ color: '#264E6F' }}>{year}</div>
          </span>
        } width={'10vw'} height={'26vh'} color={'black'} />
        <div style={nameStyle}>{name}</div>
      </div>

      {/* <div style={{ background: '#264E6F', height: '10vh' }}></div> */}

      <div style={desStyle}>{description}</div>

      <div style={learnMore}>Learn More</div>

      <div style={longLine}></div>
      <div style={shortLine}></div> 

    </div>
  )
}

const nameStyle = {
  fontSize: '40px',
  color: 'white',
  fontWeight: 'bold',
  marginLeft: '50px'
}

const desStyle = {
  textAlign: 'left',
  fontSize: '25px',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '20px '
}

const learnMore = {
  fontWeight: 'bold',
  color: '#9FDAF4',
  marginBottom: '5px',
  textAlign: 'left',
  fontSize: '20px'
}

const longLine = {
  width: '15vw',
  height: '2px',
  backgroundColor: 'black',
  marginBottom: '10px'
}

const shortLine = {
  width: '10vw',
  height: '2px',
  backgroundColor: 'black',
  marginLeft: '2.5vw'
}

export default Event;