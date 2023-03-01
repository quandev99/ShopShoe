export default class UrlHelper{
    readParamsFromURL = (url) =>{
        var vars = [];
        var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
        function(m,key,value) {
            vars[key] = value;
        }); 
        return vars;
    }
    readPraram = (url,paramName) =>{
        var vars = this.readParamsFromURL(url);
        return vars[paramName];
    }
}

