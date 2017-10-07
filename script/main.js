(function() {
 var images = document.querySelectorAll('.image-holder');
 var heading = document.querySelector('.heading');
 var subhead = document.querySelector('.main-copy h2');
 var seasonText = document.querySelector('.main-copy p');
 var lightbox = document.querySelector('.lightbox');
 var appliedClass;

 //change all the content on the page
 function changeElements() {
   //debugger; //this is a special term that stops code execution
   let subImages = document.querySelector('.subImagesContainer');
   let objectIndex = dynamicContent[this.id];

   //remove previous images
   while(subImages.firstChild) {
     subImages.removeChild(subImages.firstChild);
   }

   //add the images to the bottom ofthe page
   objectIndex.images.forEach(function(img, index) {
       //create and image element
       let newSubImg = document.createElement('img');

       //add a css class to it
       newSubImg.classList.add('thumb');

       //change src propertie
       newSubImg.src = 'images/' + objectIndex.images[index];

       newSubImg.dataset.index = index;

       //add an event handler to trigger a lightbox
       newSubImg.addEventListener('click', function() { popLightbox(index, objectIndex); }, false);

       subImages.appendChild(newSubImg);
   });

   subhead.classList.remove(appliedClass);
   heading.classList.remove(appliedClass);
   seasonText.innerHTML = "null";

   subhead.firstChild.nodeValue = objectIndex.headline;
   seasonText.firstChild.nodeValue = objectIndex.text;

   subhead.classList.add(this.id);
   heading.classList.add(this.id);

   appliedClass = this.id;
 }

 images.forEach(function(img, index) {
   //add an event handler to each image
   img.addEventListener('click', changeElements, false);
 });

 function popLightbox(currentIndex, currentObject) {
   //debugger;
   //move the window to the top everytime we click - quick bug fix
   window.scrollTo(0,0);
   document.body.style.overflow = "hidden";
   //trigger the lightbox overlay so that we can see it!
   //let lightbox = document.querySelector('.lightbox');
   let lightboxImg = lightbox.querySelector('img');
   let lightboxDesc = lightbox.querySelector('p');
   let lightboxClose = document.querySelector('.close-lightbox');


   lightbox.style.display = 'block';
   lightboxImg.src = "images/" + currentObject.images[currentIndex];
   lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];
   lightboxClose.addEventListener('click', closeLightbox, false);
 }

 function closeLightbox() {
   //reset everything, close the lightbox
   //debugger;
   //let lightbox = document.querySelector('.lightbox');

   lightbox.style.display = 'none';
   document.body.style.overflow = "scroll";
 }

 //document.querySelector('#spring').click();
 changeElements.call(document.querySelector('#spring'));

})();
