import React, { useRef, useState } from 'react';
import './VideoPlayer.scss';
import thumbnail from '../../../assets/images/thumbnail.png';
import arrowLeftImg from '../../../assets/icons/arrow-left-black.svg';
import arrowRightImg from '../../../assets/icons/arrow-right-black.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import ytPlayIcon from '../../../assets/icons/yt-play.svg'

const videoData = [
  { id: 1, title: "Video 1", videoUrl: "https://youtu.be/K2vOLRxAQg8", image: thumbnail },
  { id: 2, title: "Video 2", videoUrl: "https://youtu.be/USAcMwGUmWM", image: thumbnail },
  { id: 3, title: "Video 3", videoUrl: "https://youtu.be/H7sDdZCFRsc", image: thumbnail },
  { id: 4, title: "Video 4", videoUrl: "https://youtu.be/JYAcVwYgNwY", image: thumbnail },
  { id: 5, title: "Video 5", videoUrl: "https://youtu.be/Kwyc-E5Fbt0", image: thumbnail },
];

function VideoPlayer() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);
  const swiperRef = useRef(null);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  // Function to render YouTube videos
  const renderVideoPlayer = (videoUrl) => {
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      // Extract the video ID from the YouTube URL
      const videoId = videoUrl.split("v=")[1]?.split("&")[0] || videoUrl.split("/").pop();
      return (
        <div className="iframe-container">
          <iframe
            className="video-iframe"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
          ></iframe>
        </div>

      );
    } else {
      return (
        <video className="video" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };


  const generateThumbnail = (videoUrl) => {
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const videoId = videoUrl.split("v=")[1]?.split("&")[0] || videoUrl.split("/").pop();
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // YouTube thumbnail
    } else {
      return thumbnail; 
    }
  };
  return (
    <div className="vp_wrapper">
      {/* Video Player */}
      <div className="vp_player">
        {currentVideo ? (
          <div>{renderVideoPlayer(currentVideo?.videoUrl)}</div>
        ) : (
          <div className="vp_placeholder">
            <p>Select a video to play</p>
          </div>
        )}
      </div>

      {/* Swiper Carousel */}
      <div className="videobox_wrapper">
        <img
          className="arrow_left"
          src={arrowRightImg}
          alt="Left Arrow"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{ enabled: true }}
          breakpoints={{
            1400: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1000: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
          ref={swiperRef}
        >
          {videoData.map((video) => (
            <SwiperSlide key={video.id} onClick={() => handleVideoClick(video)}>
              <VideoBox
                video={video}
                thumbnail={generateThumbnail(video.videoUrl)}
                handleVideoClick={handleVideoClick}
              />            </SwiperSlide>
          ))}
        </Swiper>

        <img
          className="arrow_right"
          src={arrowLeftImg}
          alt="Right Arrow"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;

const VideoBox = ({ video, handleVideoClick , thumbnail }) => {
  return (
    <div className="videobox" onClick={() => handleVideoClick(video)}>
      <div className="videobox_img">
        <img style={{ width: '100%' }} src={thumbnail} alt={video.title} />
      </div>
      <img className='playIcon' src={ytPlayIcon} alt='' />
    </div>
  );
};
