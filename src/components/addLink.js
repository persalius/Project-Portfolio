 export default (function() {
    //add link 
    return {
        arrowAddLink: function (classElement, link){
            var element = document.getElementsByClassName(classElement)[0];
            element.setAttribute("href", link);
        }
    };
 })();



