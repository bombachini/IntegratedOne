(function() {
 var images = document.querySelectorAll('.image-holder');
 var heading = document.querySelector('.heading');
 var subhead = document.querySelector('.main-copy h2');
 var seasonText = document.querySelector('.main-copy p');
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
     newSubImg.addEventListener('click', popLightbox, false);

     subImages.appendChild(newSubImg);
   });

   subhead.classList.remove(appliedClass);
   heading.classList.remove(appliedClass);

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

 function popLightbox() {
   debugger;
   let lightbox = document.querySelector('.lightbox');
   lightbox.style.display = 'block';
 }

 //document.querySelector('#spring').click();
 changeElements.call(document.querySelector('#spring'));

})();
