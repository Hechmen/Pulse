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