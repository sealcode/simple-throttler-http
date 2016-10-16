# simple-throttler-http

## What it is

A simple utility that lets you make lots of http requests, with at least a certain delay between each other.

## Usage


```javascript
var HttpThrottler = require("simple-throttler-http");

var http = HttpThrottler(2500);

http.get("https://duckduckgo.com/").then(console.log);
http.get("https://mozilla.org/").then(console.log); //will fetch after 2.5s
http.get("https://f-droid.org/").then(console.log); //will fetch after 5s

```
