# ClickStream

ClickStream is a lightweight JavaScript library that simplifies adding social media sharing buttons to your web pages.  With a single click, users can share your content on popular platforms like Facebook, Twitter, and LinkedIn.

**Features:**

* Supports sharing to Facebook, Twitter, and LinkedIn.
* Easy to use with a single function call.
* Customizable button styles (through CSS classes).

**Installation:**

There are two ways to install ClickStream:

1. **Download the library:**
   - Download the `clickstream.js` file from the [REPO](https://github.com/askadityapandey/ClickStream) section of this repository.
   - Include the downloaded script in your HTML file using a script tag:

     ```html
     <script src="clickstream.js"></script>
     ```

2. **Install via npm (if published):**

     ```bash
     npm install clickstream
     ```

     Then, import the library in your JavaScript code:

     ```javascript
     import { generateShareButton } from 'clickstream';
     ```

**Usage:**

The ClickStream library provides a function called `generateShareButton` to create social media sharing buttons. Here's an example of how to use it:

```javascript
const facebookButton = generateShareButton("facebook", "[https://www.example.com/content](https://www.example.com/content)");
document.body.appendChild(facebookButton);


# clickstream
