# pixures

I wanted an easy way to catalog and tag pictures I've found
around the internet so I built a thing.  You give it a JSON
array of pictures and it'll make a nice fancy grid for you.
There's a search bar for searching by title or by tags. The
JSON is loaded from a URL, so it can be anywhere! My JSON's
in a gist.  Yours can be wherever you want.

## the json

The images JSON file needs to be an array of objects for each
image you want to display.  The file will look like this:

```json
[
  {
    "uri": "https://somethingsomethingsomething.dark.side",
    "name": "that one picture I like",
    "tags": ["one", "two", "three", "four"]
  }
]
```

The `name` and `tags` fields are what the search bar uses
for filtering images.  The only difference is the tags
aren't displayed.

## installing

Clone this repo, then open `/src/env.js` and set the exported
`imageMetadataURL` variable (it's on the very first line, so
convenient!) to the path to your images JSON file.  Then run

```bash
npm install
npm run build
```

npm@5 is recommended just because it's awesome, but also the
lockfile is nice.  Once this is done, the stuff you need is
everything in `/dist`.  Put that on your webserver.  You're
done!

## license

The MIT License (MIT)

Copyright &copy;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
