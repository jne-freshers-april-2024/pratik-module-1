let url = "https://api.github.com/users/PratikThinks";

const getData = async (url)=>{
    let data = await fetch(url);
    let json = await data.json();
    console.log(json)
}

getData(url); 