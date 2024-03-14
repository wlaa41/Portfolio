import ReactPlayer from "react-player/youtube";
import "./VideoStripe.scss";

const VideoStripe = () => {
  return (
    <div className="video-stripe">
      <div className="main-container">
        <div className="gridLeftRight">
          <div className="leftContainer">
            <div className="text-desc">
              <h2 className="title">
              Enhancing Business Growth Through Visual Content
              </h2>
              <p className="desc">
              With years of experience in photography and video production, I utilize a full lens setup and professional gear, including advanced stabilization and lighting systems, to create impactful visual content. My work, highlighted by videos that have garnered over 80,000 views, showcases my ability to engage audiences effectively. This expertise, combined with a strong social media presence, enables me to support businesses in amplifying their brand and reaching broader markets.
              </p>
            </div>
          </div>
          <div className="rightContainer">
            <div className="video">
              <div itemScope itemType="http://schema.org/VideoObject">
                <link
                  itemProp="url"
                  href="https://www.youtube.com/watch?v=ziROJtEpBHQ&ab_channel=Appitunity"
                />
                <meta
                  itemProp="name"
                  content="Appitunty Software Development Company"
                />
                <meta
                  itemProp="description"
                  content="Elevate your brand with our visual content services, tailored for startups, mid-size, and large businesses. We provide top-tier photography and video production at competitive rates, ensuring your projects are delivered on time. Our approach combines state-of-the-art equipment, including full lens setups and professional stabilization, with a keen eye for the latest trends in visual storytelling. Whether you need a single video or an entire social media campaign, our expertise and over 80k video views testify to our ability to captivate your audience. Let us transform your visual content strategy."
                />
                <meta
                  itemProp="uploadDate"
                  content="2022-06-09T08:00:00+08:00"
                />
                <meta itemProp="duration" content="PT01M22S" />
                <img
                  itemProp="thumbnailUrl"
                  src="https://i.ytimg.com/vi/cyIyIseQOWw/maxresdefault.jpg?v=62a26666"
                  alt="APPITUNITY thumbnail"
                  title="APPITUNITY thumbnail"
                />
              </div>
              <ReactPlayer
                className="react-player"
                height="100%"
                width="100%"
                url="https://www.youtube.com/watch?v=ziROJtEpBHQ&ab_channel=Appitunity"
                playIcon={false}
                controls={false}
                onDuration={() => 0.5}
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
