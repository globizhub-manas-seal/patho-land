// Configuration for your Cloudinary Hero Product Video
export const heroProductVideo = {
  // PASTE YOUR CLOUDINARY VIDEO URL HERE (q_auto,f_auto enables dynamic compression & format optimization)
  videoUrl: "https://res.cloudinary.com/ixpit3cg/video/upload/q_auto,f_auto,w_1080/v1794896633/VID-20261115-WA0001.mp4",

  // Optional poster thumbnail image before video plays
  posterUrl: "",

  // 'contain' ensures 100% of the video is visible without cropping any part of the screen/person.
  // 'cover' zooms to fill every edge.
  objectFit: "contain",

  // Autoplay options:
  autoPlay: true,
  loop: true,
  muted: true, // Muted by default so browsers permit automatic playback
  controls: true,

  // Text shown in the mockup address bar
  browserUrl: "app.patholab.cloud"
};

// Configuration for "See Patholab Cloud in Action" 2-minute demo section
export const actionVideo = {
  // PASTE YOUR YOUTUBE URL HERE:
  // (Works with any standard link: https://youtube.com/watch?v=..., https://youtu.be/..., or Cloudinary MP4)
  videoUrl: "https://youtu.be/qlexsgXG5qg?si=zyZcAk6on-0G7y_y",
};
