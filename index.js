const Podcast = require("podcast");
const fs = require("fs");

const bucketName = 'bucket-name';
const rootURL = `https://${bucketName}.s3.amazonaws.com`;

const feed = new Podcast({
  title: "Avi Aryan Personal Podcast",
  description: "This is Avi Aryan Personal Podcast",
  feed_url: `${rootURL}/feed.xml`,
  site_url: rootURL,
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
    url: `${rootURL}/files/${file}`, // link to the item
    date: new Date().toISOString(), // any format that js Date can parse.
  });
});

const xml = feed.buildXml();

fs.writeFileSync("feed.xml", xml);
