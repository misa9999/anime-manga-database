import Lottie from 'react-lottie';

function Loading({ animationData }) {
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