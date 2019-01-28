const url = 'https://randomuser.me/api/?inc=name,picture,location,nat=us&results=8';
const parent = document.getElementsByClassName("gal-imgs");

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let profiles = data.results;
        return profiles.map(function(profile) {
          let image_par=document.getElementsByClassName("gal-imgs");

  let newImageContainer=document.createElement("div");
  newImageContainer.style.width="20rem";
  newImageContainer.style.padding = "1.2rem";
  newImageContainer.style.margin = "1rem";
  newImageContainer.style.boxShadow = "7px 15px 25px grey"; 
  
  let newImageDescription=document.createElement("div");
  let newImageDescriptionHeading=document.createElement("h2");
    
  let newImageDescriptionPara=document.createElement("p");
  newImageDescriptionHeading.innerText= `${profile.name.first} ${profile.name.last}`;
  newImageDescriptionPara.innerText = `${profile.location.city}`;
  newImageDescription.classList.add("imageDescription");
  newImageDescription.appendChild(newImageDescriptionHeading);
  newImageDescription.appendChild(newImageDescriptionPara);
    
    
  let newImage=document.createElement("img");
  newImage.src = profile.picture.large;
  newImage.style.flex="1 1 auto";
  newImage.style.width="18.6rem";
  newImage.style.height="18.6rem";


  newImageContainer.classList.add("img");
  newImageContainer.appendChild(newImage);
  newImageContainer.appendChild(newImageDescription);
  image_par[0].appendChild(newImageContainer);
        })
      })
      .catch(function(error) {
        console.log(error);
      });