//function activateGallery() {
 // alert("Hello from the gallery file!");
//}
function activateGallery() {
let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
let mainImage = document.querySelector("#gallery-photo > img");
let currentClass="current";
let mainImageTitle = document.querySelector("#gallery-info > .title");
let mainImageDesc = document.querySelector("#gallery-info > .description");

thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function() {
    let newImageSrc = thumbnail.dataset.largeVersion;
    let newImageAlt = thumbnail.alt;
    let newImageTitle = thumbnail.dataset.title;
    let newImageDesc = thumbnail.dataset.description;
    
    //change main image
    mainImage.setAttribute("src", newImageSrc);
    mainImage.setAttribute("alt",newImageAlt);
    
    //change current image in sidebar
    document.querySelector(`.${currentClass}`).classList.remove(currentClass);
    thumbnail.parentNode.classList.add(currentClass);
    
    //change title and description
    mainImageTitle.innerHTML = newImageTitle;
    mainImageDesc.innerHTML = newImageDesc;
    });
});
}