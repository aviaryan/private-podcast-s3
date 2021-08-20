# Personal Podcast

Host some MP3 files on S3 for your private podcast.

### Using

1. Create S3 bucket and [add public access](https://stackoverflow.com/a/4709391/2295672) to entire bucket.
2. Create `.env` file from `env.dist` and fill in the values.
3. Run `npm start`.
4. Upload `files/` folder and `feed.xml` to your S3 bucket.
5. Access your feed at `https://<BUCKET_NAME>.s3.amazonaws.com/feed.xml`.

### Works With

* Podcast Addict
* Google Podcasts
* Apple Podcasts

### Schema

Validate using -

* https://podba.se/validate/
* https://castfeedvalidator.com/

### Credits

Thanks to [this Reddit thread](https://www.reddit.com/r/podcasts/comments/74muit/is_it_possible_to_make_an_xml_podcast_feed_from_a/) for the idea. There is another way to do this using [Dropcaster](https://github.com/nerab/dropcaster) which is in Ruby.
