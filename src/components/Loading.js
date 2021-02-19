import Lottie from 'react-lottie';
import animationData from '../lottie/menhera-chan-1.json'

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  )
}

export default Loading;