(function(global){
    /*
     * scripts - an array of script objects in the format 
     * { name: 'scriptname', version: '1.0.1' , filename (optional): 'alternate-filename'}
     *
     * fn - callback to be executed once all scripts are loaded
     */
    
    var insertScript = function(script, fn){
        var filename = script.filename ? script.filename+'.js' : script.name+'.min.js';
        var scriptSrc = '//cdnjs.cloudflare.com/ajax/libs/'+script.name+'/'+script.version+'/'+ filename;
        var scriptElem = document.createElement('script');
        scriptElem.src = scriptSrc;
        scriptElem.async = false;
        document.head.appendChild(scriptElem);
        scriptElem.onload = scriptElem.onreadystatechanged = function(){
            if (!scriptElem.readyState || (scriptElem.readyState === 'complete' || scriptElem.readyState === 'loaded')) {
                scriptElem.onload = scriptElem.onreadystatechange = null;
                fn();
            }
        };
    };

    /*
     *
     *scripts an array or single script object
     *
     *fn - callback to be executed once al scripts are loaded
     *
     */
    var fetch = function(scripts, fn){
        //check if argument is array
        if(scripts.slice){
            var length = scripts.length;
            var loadCounter = length;
            //iterate over script objects and insert them into dom
            scripts.forEach(function(script){
                insertScript(script, function(){
                    if(loadCounter == 0){
                        fn();
                    }
                    else{
                        loadCounter--;
                        if(loadCounter == 0){
                            fn();
                        }
                    }
                });
            });
        }
        //assume it is a string
        else{
            insertScript(scripts, fn);
        }
    };
    global.fetch = fetch;
})(window);
