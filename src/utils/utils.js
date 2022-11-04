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

// ---------------------------------- DATE FORMATTER FUNCTION ----------------------------------
// Format the date in a mm-dd-yyyy
export const dateFormatter = (epochTime) => {
  let date = new Date(epochTime);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
