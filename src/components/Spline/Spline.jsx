import Spline from '@splinetool/react-spline/next';
import "./Spline.css"

export default function SplineComp() {
  return (
    <main style={{height:"90vh"}}>
      <div className='moto'>
        <h1>Next-Gen Tech</h1>
        <h1>One click away</h1>
      </div>
      <Spline
        scene="https://prod.spline.design/ufr20G05jCPL0lYS/scene.splinecode" 
      />
    </main>
  );
}
