const Podcast = require("podcast");
const fs = require("fs");

// thanks to https://www.npmjs.com/package/podcast

const feed = new Podcast({
  title: "Avi Aryan Personal Podcast",
  description: "This is Avi Aryan Personal Podcast",
  feed_url: "http://s3.com/rss.xml",
  site_url: "https://aviaryan.com",
  author: "Avi Aryan",
});

fs.readdirSync('./files/').forEach((file) => {
  console.log(file);
  if (file === '.gitkeep') {
	  return;
  }
  feed.addItem({
    title: file,
    description: file,
    url: "https://aviaryan.com/", // link to the item
    date: new Date().toISOString(), // any format that js Date can parse.
  });
});

const xml = feed.buildXml();

fs.writeFileSync("feed.xml", xml);
