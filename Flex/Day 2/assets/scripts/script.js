
function setImage( username, detail, image ){
  
  var image_par=document.getElementsByClassName("gal-imgs");

  var newImageContainer=document.createElement("div");
  newImageContainer.style.width="20rem";
  newImageContainer.style.padding = "1.2rem";
  newImageContainer.style.margin = "1rem";
  newImageContainer.style.boxShadow = "7px 15px 25px grey"; 
  
  var newImageDescription=document.createElement("div");
  var newImageDescriptionHeading=document.createElement("h2");
    
  var newImageDescriptionPara=document.createElement("p");
  newImageDescriptionHeading.innerHTML= username;
  newImageDescriptionPara.innerHTML = detail;
  newImageDescription.classList.add("imageDescription");
  newImageDescription.appendChild(newImageDescriptionHeading);
  newImageDescription.appendChild(newImageDescriptionPara);
    
    
  var newImage=document.createElement("img");
  newImage.src = image;
  newImage.style.flex="1 1 auto";
  newImage.style.width="18.6rem";
  newImage.style.height="18.6rem";


  newImageContainer.classList.add("img");
  newImageContainer.appendChild(newImage);
  newImageContainer.appendChild(newImageDescription);
  image_par[0].appendChild(newImageContainer);

}

var jsonobj = JSON.parse('{"name": "John", "detail": "QA Employee ", "image": "https://bit.ly/2HwpXWZ"}');
for(let i=0;i<8;i++)
  {setImage(jsonobj.name, jsonobj.detail, jsonobj.image);
  }


