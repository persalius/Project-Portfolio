import sendAjaxJson from "./sendAjax";

export default function prepareSend(url, form, data, cb) {
    
    document.querySelector(".status").style.display = "block";
    let resultContainer = document.querySelector(".status__text");
    resultContainer.textContent = "Sending...";
    sendAjaxJson(url, data, function(data) {
        form.reset();
        resultContainer.textContent = data;
        if (cb) {
            cb(data);
        }
    })
    
}