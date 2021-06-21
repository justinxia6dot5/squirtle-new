const Box = ({ length }) => {
  const boxStyle = {
    width: length,
    height: '15vh',
    backgroundColor: '#fff'
  }

  return (
    <div style={boxStyle}></div>
  )
}


export default Box;