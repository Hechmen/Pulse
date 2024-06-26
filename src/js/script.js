// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         dots: true
//     });
// });

const carousel = document.querySelector(".carousel__inner"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".container i");

// if (!carouselInner || !firstImg || !arrowIcons) {
//     console.error("One or more elements are not found in the DOM.");
//     return;
// }

let firstImgWidth = firstImg.clientWidth + 30; //getting first img width & adding doubled 15 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if the left icon is clicked, reduce width value from the carousel scroll left else add to it
        // if(icon.id == "left") {
        //     carousel.scrollRight += firstImgWidth;
        // } else {
        //     carousel.scrollLeft += firstImgWidth;
        // }

        // if(icon.id == "right") {
        //     carousel.scrollLeft -= firstImgWidth;
        // } else {
        //     carousel.scrollLeft += firstImgWidth;
        // }

        if(icon.id == "right"){
            carousel.scrollLeft += firstImgWidth;
        }
        if(icon.id == "left"){
            carousel.scrollLeft -= firstImgWidth;
        }
    })
});