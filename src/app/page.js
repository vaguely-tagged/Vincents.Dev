import SplineModel from "./spline"
import Taskbar from "./taskbar"

export default function Page() {

  let splineStyle = {
    width: "300px",
    height: "300px"
  }

  let descriptionStyle = {
    float: "right"
  }

  return(
    <div>
      <Taskbar/>

      <div>Develop</div>
      <div style={splineStyle}>
        <SplineModel/>
      </div>

      <div style={descriptionStyle}> A self scaling personal blog and resume</div>
    </div>
  )
}