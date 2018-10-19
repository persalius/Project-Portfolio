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
//function createNewCustomrBlock() {
//    var newCustomer = document.createElement("div");
//    newCustomer.classList.add("addCustomerField");
//    
//    var customerInput = document.createElement("input");
//    customerInput.setAttribute("type", "text");
//    customerInput.setAttribute("value", "Bill To");
//    customerInput.style.marginRight = "4px";
//    
//    var block1Field = document.createElement("button");
//    block1Field.classList.add("block1__field");
//    block1Field.classList.add("block1__field-1");
//    
//    $(block1Field).on("click", function(e) {
//        e.preventDefault();
//    });
//    
//    var customerSpan = document.createElement("div");
//    customerSpan.textContent = "Choose";
//    
//    var customerInputField = document.createElement("span");
//    customerInputField.textContent = "a customer";
//    
//    var addCustomerBtn = document.createElement("div");
//    addCustomerBtn.classList.add("addCustomer");
//    addCustomerBtn.textContent = "+Add";
//    addCustomerBtn.addEventListener("click", addNewBlockCustomer);
//    
//    customerSpan.appendChild(customerInputField);
//    block1Field.appendChild(customerSpan);
//
//    newCustomer.appendChild(customerInput);
//    newCustomer.appendChild(block1Field);
//    newCustomer.appendChild(addCustomerBtn);
//    
//    return newCustomer;
//}


//var addCustomer = document.querySelector(".addCustomer");
//var customerFields = document.querySelector(".customerFields"); //место, куда вставляем новое поле customer
//var addCustomerAll = document.querySelectorAll(".addCustomer");
//
//function addNewBlockCustomer() {
//    var a = createNewCustomrBlock();
//    customerFields.appendChild(a);
//    
//    var addCustomerField = document.querySelectorAll(".addCustomerField"); //Все поля
//    addCustomerAll = document.querySelectorAll(".addCustomer");
//    for (var i = 0; i < addCustomerAll.length - 1; i++) {
//        addCustomerAll[i].style.display = "none";
//    }
//}
//
//addCustomer.addEventListener("click", addNewBlockCustomer);

$(".addCustomer").on("click", function() {
    $(".addnew").fadeIn();
});


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

// ===== Close window "add new"
$(".addnew__cansel").on("click", function(e) {
    e.preventDefault();
    $(".addnew").fadeOut();
});

$(".addnew__save").on("click", function(e) {
    e.preventDefault();
    $(".addnew").fadeOut();
});

// Select
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

// Открыть окно Verification
$(".profile__verified").on("click", function() {
    $(".verified").fadeIn();
});

// Закрыть окно Verification
$(".verified__cansel").on("click", function() {
    $(".verified").fadeOut();
});

// Работа с добавлением файлов
var countFiles = 1,
$body = $('body'),
typeFileArea = ['jpg', 'jpeg', 'pdf', 'png'],
coutnTypeFiles = typeFileArea.length;

//create new element
$body.on('click', '.files-wr label', function() {
var wrapFiles = $('.files-wr'),
  newFileInput;

countFiles = wrapFiles.data('count-files') + 1;
wrapFiles.data('count-files', countFiles);

newFileInput = '<div class="one-file"><label for="file-' + countFiles + '">Choose File</label>' +
  '<input type="file" name="file-' + countFiles + '" id="file-' + countFiles + '"><div class="file-item hide-btn">' +
  '<span class="file-name"></span><span class="btn btn-del-file">x</span></div></div>';
wrapFiles.prepend(newFileInput);
});

//show text file and check type file
$body.on('change', 'input[type="file"]', function() {
var $this = $(this),
  valText = $this.val(),
  fileName = valText.split(/(\\|\/)/g).pop(),
  fileItem = $this.siblings('.file-item'),
  beginSlice = fileName.lastIndexOf('.') + 1,
  typeFile = fileName.slice(beginSlice);

fileItem.find('.file-name').text(fileName);
if (valText != '') {
  fileItem.removeClass('hide-btn');

  for (var i = 0; i < coutnTypeFiles; i++) {

    if (typeFile == typeFileArea[i]) {
      $this.parent().addClass('has-mach');
    }
  }
} else {
  fileItem.addClass('hide-btn');
}

if (!$this.parent().hasClass('has-mach')) {
  $this.parent().addClass('error');
}
    
});

//remove file
$body.on('click', '.btn-del-file', function() {
    var elem = $(this).closest('.one-file');
    elem.fadeOut(400);
    setTimeout(function() {
      elem.remove();
    }, 400);
});
















