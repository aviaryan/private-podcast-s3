const Podcast = require("podcast");
const fs = require("fs");
const getMP3Duration = require("get-mp3-duration");
// load env file
require("dotenv").config();

// Config
const podcastName = process.env.PODCAST_NAME;
const author = process.env.PODCAST_AUTHOR;
const bucketName = process.env.BUCKET_NAME;
const email = process.env.PODCAST_EMAIL;
const imageURL =
  "https://via.placeholder.com/1500/000000/FFFFFF/?text=" + podcastName.replace(/\s/g, '+');

// Variables
const rootURL = `https://${bucketName}.s3.amazonaws.com`;

// Create feed
const feed = new Podcast({
  title: podcastName,
  description: podcastName,
  feed_url: `${rootURL}/feed.xml`,
  site_url: rootURL,
  image_url: imageURL,
  author: author,
  itunesImage: imageURL,
  itunesAuthor: author,
  itunesOwner: { name: author, email },
});

fs.readdirSync("./files/").forEach((file) => {
  if (file.startsWith('.')) {
    return;
  }
  const fullPath = "./files/" + file;
  // get file creation time
  const { birthtime } = fs.statSync(fullPath);
  // get mp3 duration
  const buffer = fs.readFileSync(fullPath);
  const duration = getMP3Duration(buffer);

  feed.addItem({
    title: file,
    description: file,
    url: `${rootURL}/files/${file}`,
    date: birthtime,
    enclosure: {
      url: `${rootURL}/files/${file}`,
      file: fullPath,
    },
    itunesDuration: Math.ceil(duration / 1000),
  });
});

const xml = feed.buildXml();

fs.writeFileSync("feed.xml", xml);
