// Importing necessary modules
import ReactPlayer from 'react-player/youtube';
import './VideoStripe.scss';

// The VideoStripe component now accepts props
const VideoStripe = ({ videoData }) => {
  const stripeStyle = {
    background: videoData.background,
  };
  return (
    <div className="video-stripe" style={stripeStyle}>
      <div className="main-container">
        <div className="gridLeftRight">
          <div className="leftContainer">
            <div className="text-desc">
              <h2 className="title">{videoData.title}</h2>
              <p className="desc">{videoData.description}</p>
            </div>
          </div>
          <div className="rightContainer">
            <div className="video">
              <div itemScope itemType="http://schema.org/VideoObject">
                <link itemProp="url" href={videoData.url} />
                <meta itemProp="name" content={videoData.name} />
                <meta itemProp="description" content={videoData.metaDescription} />
                <meta itemProp="uploadDate" content={videoData.uploadDate} />
                <meta itemProp="duration" content={videoData.duration} />
                <img itemProp="thumbnailUrl" src={videoData.thumbnailUrl} alt="Video thumbnail" title="Video thumbnail" />
              </div>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url={videoData.url}
                playIcon={videoData.playIcon}
                controls={videoData.controls}
                onDuration={videoData.onDuration}
                config={{
                  youtube: {
                    playerVars: { origin: "https://www.youtube.com" },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStripe;
