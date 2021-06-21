import OverflowBox from "./helperComponents/OverflowBox";
import Event from "./helperComponents/Event";

function About() {

  var event1 = "Tutor program is now one of the most significant services at Squirtle Community. To help our peers have an improvement in academic achievement, we encourage you to join us and to get a teaching experience."
  var event2 = "5555.5.5 is the day to black qiu, prepare some time to heiqiu at your best!"

  return (
    <div style={background}>
      <div style={{ marginLeft: "50px" }}>
        <OverflowBox content={"About"} width={'180px'} height={'55px'} hasLine={true} />
      </div>

      {/* Information here */}
      <div className="info">Hello Jiege!</div> 

      <div style={{ marginLeft: "50px" }}>
        <OverflowBox content={"News & Events"} width={'360px'} height={'55px'} hasLine={true} />
      </div>

      <div style={container}>
        <img style={{ width: "25vw", height: '384px'}} src="squirtle-confident-1.png" alt="The first squirtle" />
        <Event month={"JUNE"} date={21} year={2021} name={<span>
          <div>TUTOR</div>
          <div>HIRING</div>
        </span>} description={event1} />
      </div>

      <div style={container}> 
        <Event month={"May"} date={5} year={5555} name={<span>
          <div>BLACKQIU</div>
          <div>EXAMS</div>
        </span>} description={event2} />
        <img style={{ width: "25vw", height: '384px' }} src="squirtle-confident-2.png" alt="The second squirtle" />
      </div>
      
      <div style={{ marginLeft: "50px" }}>
        <OverflowBox content={"Tutor Program"} width={'360px'} height={'55px'} hasLine={true} />
      </div>

    </div>
  )
}

const container = { 
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: '20vh'
}

const background = {
  backgroundColor: '#264E6F'
}

export default About;