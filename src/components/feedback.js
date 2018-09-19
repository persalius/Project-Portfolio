import prepareSend from "./prepareSend";

export default (function() {
    
    const formMail = document.querySelector("#mail");
    if (formMail) {
        formMail.addEventListener("submit", prepareSendMail);
    }
    
    function prepareSendMail(e) {
        e.preventDefault();
        let data = {
            name: formMail.name.value,
            email: formMail.email.value,
            text: formMail.text.value
        };
        prepareSend("/works", formMail, data);
    }
    
})();