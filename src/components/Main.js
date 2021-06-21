import Box from "./helperComponents/Box";

function Main() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={mainStyle}>
        <Box length={"2.75vw"} />
        <Box length={"2.75vw"} />
        <Box length={"2.75vw"} />
        <Box length={"75vw"} />
        <Box length={"2.75vw"} />
        <Box length={"2.75vw"} />
        <Box length={"2.75vw"} />
      </div>
      <img src="squirtle-try.png" alt="squirtle main logo" style={imgStyle} />
      <img src="squirtle-community.png" alt="squirtle main logo" style={wordStyle} />
      <div style={{ backgroundColor: '#264E6F', height: '30vh' }}></div>
    </div>
  )
}

const mainStyle = {
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#264E6F',
  height: '80vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}


const imgStyle = { 
  position: 'absolute', 
  zIndex: 2,
  width: '40vw',
  height: '60vh',
  top: '10vh',
  left: '30vw'
}

const wordStyle = {
  position: 'absolute',
  zIndex: 3,
  color: 'black',
  width: '62vw',
  height: '42vh', 
  top: '29vh',
  left: '19vw'
}

export default Main;