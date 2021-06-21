
export default function Footer() {
  return (
    <div style={footerStyle}>
      <img style={{ margin: '50px', width: '700px' }} src="squirtle-footer.png" alt="footer logo of the website" />
      <div style={smallerContainer}> 
        <div style={leftStyle}>
          <div style={keyStyle}>CONNECT</div>
          <div style={linkStyle}>Facebook</div>
          <div style={linkStyle}>Instagram</div>
          <div style={linkStyle}>Weibo</div>
          <div style={linkStyle}>Wechat</div>
        </div>
        <div style={rightStyle}>
          <div style={keyStyle}>CONTACT</div>
          <div style={linkStyle}>12345678@gmail.com</div>
          <div style={linkStyle}>
            Wuxi Foreign Language School
            International Department
            1 Xifengdao, Wuxi, 
            Jiangsu Province, China
          </div>
        </div>
      </div>

      <div style={vertical}></div> 

    </div>
  )
}

const footerStyle = { 
  position: 'relative',
  background: 'black',
  color: 'white',
  display: 'flex',
}

const leftStyle = {
  margin: '30px'
}

const rightStyle = {
  margin: '30px'
}

const smallerContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'left'
}

const keyStyle = {
  fontWeight: 'bold',
  fontSize: '30px',
  margin: '20px 0px'
}

const linkStyle = {
  fontSize: '20px',
  margin: '10px 0px'
}

const vertical = {
  position: 'absolute',
  zIndex: 2,
  backgroundColor: 'white',
  width: '1px',
  height: '120px',
  left: '49vw',
  top: '50px'
}
