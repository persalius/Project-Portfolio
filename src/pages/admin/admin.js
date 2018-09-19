import "normalize.css";
import "../../styles/main.scss";
import preloader from "../../components/preloader";
import tab from "../../components/tab";
import fileUpload from "../../components/upload";

// Отправка изображений на сервер
const formUpload = document.querySelector("#formForWorks-admin");
formUpload.addEventListener("submit", prepareSendFile);

function prepareSendFile(e) {
    e.preventDefault();
    let resultContainer = document.querySelector(".admin-status__text");
    let adminStatus = document.querySelector(".admin-status");
    let formData = new FormData();
    let file = document.querySelector("#formAdmin__file").files[0];
    let name = document.querySelector(".adminNameProject").value;
    let technologies = document.querySelector(".adminTechProject").value;
    
    if (!file) {
        adminStatus.style.display = "block";
        resultContainer.innerHTML = "Изображение не выбрано";
    }
    
    formData.append("photo", file, file.name);
    formData.append("name", name);
    formData.append("technologies", technologies);
    
    adminStatus.style.display = "block";
    resultContainer.innerHTML = "Uploading...";
    
    fileUpload("/admin", formData, data => {
        resultContainer.innerHTML = data;
        formUpload.reset();
    });
}


// закрыть всплывающее окно о состоянии оправления сообщения
let statusBtn = document.querySelector(".admin-status__btn");
statusBtn.addEventListener("click", () => {
    document.querySelector(".admin-status").style.display = "none";
});











