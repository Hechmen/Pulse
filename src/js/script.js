const carousel = document.querySelector(".carousel__inner"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".container i");

let firstImgWidth = firstImg.clientWidth + 30; //getting first img width & adding doubled 15 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {

        if(icon.id == "right"){
            carousel.scrollLeft += firstImgWidth;
        }
        if(icon.id == "left"){
            carousel.scrollLeft -= firstImgWidth;
        }
    })
});

const tabs = document.querySelectorAll('.catalog__tab')
const tabContents = document.querySelectorAll(".catalog__content")

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('catalog__content_active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('catalog__tab_active')
        })
        target.classList.add('catalog__content_active')
        tab.classList.add('catalog__tab_active')
    })
})

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//Modal

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('fast');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thank, #order').fadeOut('fast');
});
$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
    });
});

//Form validation
function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, укажите своё имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введён адрес почты"
            }
        }
    });
}

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

//Phone format
$('input[name=phone]').mask("+7 (999) 999-9999")

$('form').submit(function() {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset'); 
    });
    return false;
});
