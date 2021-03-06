# Personal Podcast

Host some MP3 files on S3 for your private podcast.

## Using

1. Add mp3 files to `files/` folder in this repo.
2. Create S3 bucket and [add public access](https://stackoverflow.com/a/4709391/2295672) to the entire bucket.
3. Create `.env` file from `.env.dist` file and fill in the values.
4. Run `npm start`. `feed.xml` is created.
5. Upload `files/` folder and `feed.xml` to your S3 bucket.
6. Access your podcast feed at `https://<BUCKET_NAME>.s3.amazonaws.com/feed.xml`.

## Works With

* Podcast Addict
* Google Podcasts
* Apple Podcasts
* Spotify ([Manually add your RSS feed](https://support.spotifyforpodcasters.com/hc/en-us/articles/360043487932-Getting-your-podcast-on-Spotify) to Spotify)

## (Optional) Automation Script

You can use the [podcast-push](extras/podcast-push) script to automate creating `feed.xml` and uploading the files to S3.

So you just need to add new mp3 files to `files/` folder and run this script and your podcast will be updated.

## Schema

Validate using -

* https://podba.se/validate/
* https://castfeedvalidator.com/

## Credits

Thanks to [this Reddit thread](https://www.reddit.com/r/podcasts/comments/74muit/is_it_possible_to_make_an_xml_podcast_feed_from_a/) for the idea. There is another way to do this using [Dropcaster](https://github.com/nerab/dropcaster) which is in Ruby.
