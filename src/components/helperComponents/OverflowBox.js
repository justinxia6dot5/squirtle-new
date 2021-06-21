// describe a box with shadow

const OverflowBox = ({ content, width, height, color = 'white', 
  hasLine = false }) => {

  const topBox = {
    backgroundColor: color,
    position: 'relative',
    zIndex: 2,
    width,
    height,
    fontWeight: 'bold',
    fontSize: '50px',
  }

  const bottomBox = {
    backgroundColor: 'rgba(112, 112, 112, 0.5)',
    position: 'absolute',
    zIndex: 1,
    width,
    height,
    top: '12px',
    left: '12px'
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={topBox}>
        {content}
      </div>
      <div style={bottomBox}></div>
      {hasLine &&
        <div style={{ backgroundColor: '#264E6F', height: '20vh', display: 'flex', alignItems: 'center' }}>
          <div style={line}></div>
        </div>
      }
    </div>
  )
}

const line = {
  width: '570px',
  height: '2px',
  backgroundColor: 'white',
}


export default OverflowBox;