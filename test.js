var HttpThrottler = require("./index.js");

var http = HttpThrottler(2500);

http.get("https://duckduckgo.com/").then(console.log);
http.get("https://mozilla.org/").then(console.log); //will fetch after 2.5s
http.get("https://f-droid.org/").then(console.log); //will fetch after 5s

