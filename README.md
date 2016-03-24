# Disemvowel

Disemvowel.js is a jQuery plugin to remove vowels from text, specifically a, e, i, o, u, and their capital letter variants. But not y. Why would you want to do this? I don't know, maybe to impress your friends. Or to really confuse people.

See a demo here: 
[See a demonstration here](http://citpt.lcsc.edu/caseyblamires/disemvowel/demo/demo.html)

## Why did I make this?

[Jeff Bezos wants to remove vowels from Washington Post stories?](http://www.poynter.org/2016/jeff-bezos-suggested-removing-all-the-vowels-from-washington-post-stories/403264/). I'm not sure how accurate this article is, but it made me laugh. So I decided to create this plugin for fun. Turned out easier than I expected.

## Download

* Regular version: [disemvowel.js](https://raw.githubusercontent.com/clblamires/disemvowel/master/src/disemvowel.js)
* Minified version: [disemvowel.min.js](https://raw.githubusercontent.com/clblamires/disemvowel/master/src/disemvowel.min.js)

Although let's be honest, the minified version isn't going to save you much

## Usage

Disemvowel runs as a jQuery plugin, so you'll need to include jQuery into your website somewhere. Once you've done this, you'll need to include the disemvowel.js file. Put the following right before the closing body tag in your HTML.

```html
<script src="https://code.jquery.com/jquery-1.12.2.js"></script>
<script src="path/to/disemvowel.js"></script>
```

To call upon the plugin, select your element using jQuery and use .disemvowel( )

```javascript
jQuery(function(){
  jQuery('p').disemvowel();
});
```

By default, disemvowel will remove all vowels, both upper and lower case. You can set disemvowel to replace them instead of just removing them.

```javascript
jQuery(function(){
  jQuery('p').disemvowel({
    replacement: '*'
  });
});
```
