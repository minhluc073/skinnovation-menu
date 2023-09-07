import VideoFrame from "../../Other/VideoFrame";

export default function IntroductionTwo({
  introVideo,
  introVideoPoster,
  highlights,
  style,
}) {
  if(!introVideoPoster || !introVideo){
    return null;
  }
  return (
    <div className="introduction-two" style={style}>
      <VideoFrame poster={introVideoPoster} height={500} src={introVideo} />
      <div className="introduction-two__content">
        <div className="container">
          {highlights &&
            highlights.map((highlight, i) => (
              <Highlight key={i} index={i + 1} text={highlight.children[0]?.text} />
            ))}
        </div>
      </div>
    </div>
  );
}

const Highlight = ({ index, text }) => (
  <div className={`introduction-two__content__item`}>
    <span>0{index}.</span>
    <a href={"#"} onClick={(e) => e.preventDefault()}>
      {text}
    </a>
  </div>
);
