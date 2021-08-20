const Podcast = require("podcast");
const fs = require("fs");

// Config
const podcastName = "Avi Aryan Personal Podcast";
const author = "Avi Aryan";
const bucketName = 'bucket-name';
const imageURL = "https://via.placeholder.com/1500/000000/FFFFFF/?text=Avi+Aryan+Podcast";

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
});

fs.readdirSync('./files/').forEach((file) => {
  if (file === '.gitkeep') {
	  return;
  }
  feed.addItem({
    title: file,
    description: file,
    url: `${rootURL}/files/${file}`,
    date: new Date().toISOString(),
    enclosure: {
      url: `${rootURL}/files/${file}`,
	  file: `./files/${file}`
    },
  });
});

const xml = feed.buildXml();

fs.writeFileSync("feed.xml", xml);
