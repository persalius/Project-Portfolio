//Гамбургер меню
var state = true;
$(".bmenu").click(function() {
    $(this).toggleClass("active");
    
    if (state) {
        $(".menu").animate({left: 0}, 500);
    } else {
        $(".menu").animate({left: "-180px"}, 500);
    };
    
    state = !state;
});

//Выпадающее меню
$(".header__menu-list").on("click", function() {
    $(".header__menu-block-2").toggleClass("notHidden");
    $(".header__menu").toggleClass("notHidden");
});

//INVOICE ID
var invoiceId = document.querySelectorAll(".invoiceId a");

if (window.innerWidth <= 800) {
    invoiceId.forEach(function(elem) {
        var text = elem.innerHTML;
        text = text.slice(0, 10) + "...";
        elem.innerHTML = text;
    });
}

window.onresize = function() {
    if (window.innerWidth <= 800) {
        invoiceId.forEach(function(elem) {
            var text = elem.innerHTML;
            text = text.slice(0, 10) + "...";
            elem.innerHTML = text;
        });
    }
}

//Открытие/закрытие окна new invoice
$(".regisWindow").on("click", function() {
    $(".newInvoice").fadeIn();
    $(".menu").fadeOut();
    $(".wrapper").fadeOut();
    $(".footer").fadeOut();
})

$(".newInvoice__close").on("click", function() {
    $(".newInvoice").fadeOut();
    $(".menu").css({display: "block"});
    $(".wrapper").css({display: "block"});
    $(".footer").css({display: "block"});
})

//Превью изображения
function handleFileSelect(evt) {
    var file = evt.target.files; // FileList object
    var f = file[0];
    // Only process image files.
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    document.querySelector(".labelForFile>span").style.display = "none";
    document.querySelector("#output").innerHTML = "";
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var div = document.createElement('div');
            div.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
            document.getElementById('output').insertBefore(div, null);
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}
document.getElementById('file').addEventListener('change', handleFileSelect, false);


// ========== клик по кнопке Choose a customer ==========
$(".block1__field-1").on("click", function(e) {
    e.preventDefault();
});

// ========== Add new customer ==========
// ======================================
function createNewCustomrBlock() {
    var newCustomer = document.createElement("div");
    newCustomer.classList.add("addCustomerField");
    
    var customerInput = document.createElement("input");
    customerInput.setAttribute("type", "text");
    customerInput.setAttribute("value", "Bill To");
    customerInput.style.marginRight = "4px";
    
    var block1Field = document.createElement("button");
    block1Field.classList.add("block1__field");
    block1Field.classList.add("block1__field-1");
    
    $(block1Field).on("click", function(e) {
        e.preventDefault();
    });
    
    var customerSpan = document.createElement("div");
    customerSpan.textContent = "Choose";
    
    var customerInputField = document.createElement("span");
    customerInputField.textContent = "a customer";
    
    var addCustomerBtn = document.createElement("div");
    addCustomerBtn.classList.add("addCustomer");
    addCustomerBtn.textContent = "+Add";
    addCustomerBtn.addEventListener("click", addNewBlockCustomer);
    
    customerSpan.appendChild(customerInputField);
    block1Field.appendChild(customerSpan);

    newCustomer.appendChild(customerInput);
    newCustomer.appendChild(block1Field);
    newCustomer.appendChild(addCustomerBtn);
    
    return newCustomer;
}


var addCustomer = document.querySelector(".addCustomer");
var customerFields = document.querySelector(".customerFields"); //место, куда вставляем новое поле customer
var addCustomerAll = document.querySelectorAll(".addCustomer");

function addNewBlockCustomer() {
    var a = createNewCustomrBlock();
    customerFields.appendChild(a);
    
    var addCustomerField = document.querySelectorAll(".addCustomerField"); //Все поля
    addCustomerAll = document.querySelectorAll(".addCustomer");
    for (var i = 0; i < addCustomerAll.length - 1; i++) {
        addCustomerAll[i].style.display = "none";
    }
}

addCustomer.addEventListener("click", addNewBlockCustomer);


// Изменение валюты
var currency = "";

$(".newInvoice__currency input").on("click", function() {
    currency = $(this).val();
    
    if (currency === "eur") {
        $(".invoice__table-currency").text("€");
        $(".newInvoice__subtotal-currency").text("€");
        $(".newInvoice__total-currency").text("€");
        $(".currency-sign").text("€");
        $(".afn-choise-currency").text("€");
    }
    
    if (currency === "gbp") {
        $(".invoice__table-currency").text("£");
        $(".newInvoice__subtotal-currency").text("£");
        $(".newInvoice__total-currency").text("£");
        $(".currency-sign").text("£");
        $(".afn-choise-currency").text("£");
    }
});


// Добавить строку в таблице
var invoiceTableBody = document.querySelector(".invoice__table-body"); //место, куда добавляем
var addLineBtn = document.querySelector(".addLineBtn"); // кнопка

function test() {
    var helperDiv = document.createElement("div");
    var closeTr = document.createElement("div");
    closeTr.classList.add("closeTr");
    var closeTrImg = document.createElement("img");
    closeTrImg.setAttribute("src", "img/close.svg");
    closeTr.appendChild(closeTrImg);
    
    $('.closetr-block').delegate(closeTr, "click", function (event) {
        $(this).parent().parent().remove();
    });
    
    helperDiv.appendChild(closeTr);
    
    return helperDiv;
}

function addNewLine() {
    
    
    
//    $(closeTr).on("click", function() {
//        $(this).parent().parent().parent().remove();
//    });
    
    
    
    
    
    var a = `<tr>
                                           <td>
                                               <div class="invoice__table-block">
                                                   <input type="text" placeholder="Description of service or product...">
                                               </div>
                                           </td>
                                           <td>
                                               <div class="invoice__table-block">
                                                   <input type="text" value="1">
                                               </div>
                                           </td>
                                           <td>
                                               <div class="invoice__table-block">
                                                   <div class="invoice__table-currency">€</div>
                                                   <input type="text" value="0">
                                               </div>
                                           </td>
                                           <td>
                                                <div class="invoice__table-block">
                                                    <div class="invoice__table-currency">€</div>
                                                    <input type="text" value="0" readonly name="amount">
                                                </div>
                                           </td>
                                           <td>
                                               <div class="invoice__table-block closetr-block">
                                                   
                                               </div>
                                           </td>
                                       </tr>`;
    
        
    
    invoiceTableBody.insertAdjacentHTML("beforeEnd", a);
    document.querySelectorAll(".closetr-block").forEach(function(elem) {
        elem.innerHTML = test().innerHTML;
    });
}

addLineBtn.addEventListener("click", addNewLine);

// Удалить строку в таблице
$(".table-btn-delete").on("click", function() {
    $(this).parent().parent().remove();
});

// Копирование строки в таблице
var copyTr = "";
$(".table-btn-copy").on("click", function() {
    copyTr = $(this).parent().parent();
});

// Удалить строку в таблице
$(".closeTr").on("click", function() {
    $(this).parent().parent().parent().remove();
});


// 4 дополнительные кнопки - добовление полей
$(".closeNewField").on("click", function() {
    $(this).parent().css({display: "none"});
    $(this).siblings("div").find(".inputField").val("0");
    
    if ($(this).parent().hasClass("amountPaid")) {
        $(".newInvoice__line-paid").css({display: "inline-block"});
    } else if ($(this).parent().hasClass("tax")) {
        $(".newInvoice__line-tax").css({display: "inline-block"});
    } else if ($(this).parent().hasClass("discount")) {
        $(".newInvoice__line-discount").css({display: "inline-block"});
    } else if ($(this).parent().hasClass("paymentFee")) {
        $(".newInvoice__line-payment").css({display: "inline-block"});
    }
});

$(".arrow-choise").on("click", function() {
    $(this).siblings(".choise-block").slideToggle();
});

$(".choise-block input[type='radio']").on("change", function() {
    if ($(this).val() === "afn-choise") {
        $(this).parent().siblings(".currency-sign").css({display: "block"});
        $(this).parent().siblings(".percent").css({display: "none"});
        $(this).parent().siblings(".inputField").css({textAlign: "left"});
    } else if ($(this).val() === "percent-choise") {
        $(this).parent().siblings(".currency-sign").css({display: "none"});
        $(this).parent().siblings(".percent").css({display: "block"});
        $(this).parent().siblings(".inputField").css({textAlign: "right"});
    }
    $(".choise-block").slideUp();
});

// Вызов скрытых полей
$(".newInvoice__line-paid").on("click", function() {
    $(this).css({display: "none"});
    $(".amountPaid").css({display: "block"});
});

$(".newInvoice__line-tax").on("click", function() {
    $(this).css({display: "none"});
    $(".tax").css({display: "block"});
});

$(".newInvoice__line-discount").on("click", function() {
    $(this).css({display: "none"});
    $(".discount").css({display: "block"});
});

$(".newInvoice__line-payment").on("click", function() {
    $(this).css({display: "none"});
    $(".paymentFee").css({display: "block"});
});


// ===== поле Date =====
//document.querySelector('.block2-date').valueAsDate = new Date();

$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

$(function () {
  $("#datepicker2").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  });
});



// Вызов окна new invoice по клику на кнопку в рамке (dashed)
$(".blocks__btn").on("click", function() {
    $(".newInvoice").fadeIn();
    $(".menu").fadeOut();
    $(".wrapper").fadeOut();
    $(".footer").fadeOut();
})



















