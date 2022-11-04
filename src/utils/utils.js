// Data import statements
import Videos from "../data/videos.json";
import VideoDetails from "../data/video-details.json";

// Function to filter out each video by ID
export const getVideos = (vidId) => {
  return Videos.filter((video) => video.id !== vidId);
};

// Function to find the details of the video
export const getVideosDetails = (vidId) => {
  return VideoDetails.find((video) => video.id === vidId);
};
