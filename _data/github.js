const EleventyFetch = require("@11ty/eleventy-fetch");
module.exports = async function () {
  // https://developer.github.com/v3/repos/#get
  let json = await EleventyFetch(
    "https://wp11ty.wpengine.com/wp-json/wp/v2/pages",
    {}
  );
  return json;
};
