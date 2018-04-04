export default (function() {    
    document.querySelectorAll("a.socials__link").forEach(element => element.setAttribute("target", "_blank"));
    
    
    
    document.querySelectorAll(".socials__link-fb").forEach(element => element.setAttribute("href", "https://www.facebook.com/sergey.shevchenko.9210?ref=bookmarks"));
    
    document.querySelectorAll(".socials__link-gt").forEach(element => element.setAttribute("href", "https://github.com/persalius"));
    
    document.querySelectorAll(".socials__link-in").forEach(element => element.setAttribute("href", "https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D1%88%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-638179aa/"))
})();
