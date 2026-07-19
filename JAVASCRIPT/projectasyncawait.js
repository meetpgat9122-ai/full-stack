
async function github() {



    
    const respondse=await fetch("https://api.github.com/users");
    const data=await respondse.json();
    // console.log(data);
    // this is so easy format ...but program freezing issue occured ... 

    const parent= document.getElementById("first");


for(let user of data){
    const element = document.createElement("div");
    element.classList.add("user");
    const image = document.createElement("img");
    image.src=user.avatar_url;

    const username=document.createElement('h2');
    username.textContent=user.login;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.textContent = "Visit Profile";

    element.append(image,username,anchor);
    parent.appendChild(element);  
}
    }
    github();
