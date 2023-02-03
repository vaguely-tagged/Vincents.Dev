import SplineModel from "./spline"
import Taskbar from "./taskbar"
import { Tinos } from '@next/font/google';

const tinos = Tinos({
  weight: '400',
  subsets: ['latin'],
  display: 'optional'
})

export default function Page() {

  let splineStyle = {
    width: "20vw",
    height: "20vw",
    padding: "10px",
    position: "relative",
    left: "15%"
  }

  let descriptionStyle = {
    float: "right",
    padding: "10px",
    fontSize: "2vw"
  }

  let titleStyle = {
    fontSize: "15vw",
    padding: "10px"
  }

  return(
    <div>
      <Taskbar/>

      <div style={titleStyle} className={tinos.className}>Develop</div>

      <div style={splineStyle}>
        <SplineModel/>
      </div>

      <div style={descriptionStyle} className={tinos.className}> A self scaling personal blog and resume{"\n"}hosted on a k8 cluster</div>
    </div>
  )
}