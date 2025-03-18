function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=>res.json())
    .then((data)=> displayVideo(data.videos))
}



function displayCategories(categories){
   const categoryContainer = document.getElementById("category-container");
   for(let cat of categories){
    // console.log(cat);

    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML =`
    <button class="btn btn-sm hover:bg-[red] hover:text-white">${cat.category}</button>
    `;

    categoryContainer.append(categoryDiv)
   }
}

const displayVideo = (videos) =>{
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
        console.log(videos);
    })
}


loadCategories();
loadVideos();