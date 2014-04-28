A simple script loader that loads scripts from cndjs.com and appends them to the head element

### Usage
```javascript
fetch([
        {name : 'jquery', version : '2.1.0'},
        {name: 'underscore.js', version :'1.6.0', filename: 'underscore-min'},
        {name: 'backbone.js', version : '1.1.2', filename: 'backbone-min' } 
    ],
    function(){
        console.log('Loaded');
    });
```

This snippet loads jquery, underscore and backbone , appends them to the head elements and preserves order
