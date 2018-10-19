import "normalize.css";
import "../../styles/main.scss";
import preloader from "../../components/preloader";
import tab from "../../components/tab";
import fileUpload from "../../components/upload";
import prepareSend from "../../components/feedback/prepareSend";
import {checkSymbolinFild} from "../../components/checkSymbolinFild";


const formUpload = document.querySelector("#formForWorks-admin");
const formBlog = document.querySelector("#formForblog-admin");

formUpload.addEventListener("submit", prepareSendFile);
formBlog.addEventListener("submit", prepareSendPost);

// Отправка изображений на сервер
function prepareSendFile(e) {
    e.preventDefault();
    let resultContainer = document.querySelector(".status__text");
    let adminStatus = document.querySelector(".status");
    let formData = new FormData();
    let file = document.querySelector("#formAdmin__file").files[0];
    let name = document.querySelector(".adminNameProject").value;
    let technologies = document.querySelector(".adminTechProject").value;
    let link = document.querySelector(".adminLinkProject").value;
    
    if (!file) {
        adminStatus.style.display = "block";
        resultContainer.innerHTML = "Изображение не выбрано";
    }
    
    formData.append("photo", file, file.name);
    formData.append("name", name);
    formData.append("technologies", technologies);
    formData.append("link", link);
    
    adminStatus.style.display = "block";
    resultContainer.innerHTML = "Uploading...";
    
    fileUpload("/admin/upload", formData, data => {
        resultContainer.innerHTML = data;
        formUpload.reset();
    });
}

// Получение нового поста
function prepareSendPost(e) {
    e.preventDefault();
    let data = {
        title: formBlog.title.value,
        date: formBlog.date.value,
        text: formBlog.text.value
    };
    prepareSend("/admin/addpost", formBlog, data);
}


// закрыть всплывающее окно о состоянии оправления сообщения
let statusBtn = document.querySelector(".status__btn");
statusBtn.addEventListener("click", () => {
    document.querySelector(".status").style.display = "none";
});


// запрещаем ввод всех символов кроме цифр в поле для уровня скилов
let tableInput = document.querySelectorAll(".table__input");
tableInput.forEach(item => {
    checkSymbolinFild(item);
});














