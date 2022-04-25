// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
async function movies(){
    try{
      let title = document.getElementById("search").value;
      let movieList = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=14695928&t=${title}`);
      let data = await movieList.json();
      shoWdata(data)
    }
    catch(err){
      console.log(err);
    }
   
  }

  function shoWdata(obj){

   let preData = document.getElementById("movies");
   preData.innerHTML = "";

    let poster = document.createElement("img");
    poster.src = obj.Poster;

    let title = document.createElement("h1");
    title.textContent = obj.Title;

    let book =document.createElement("button");
    book.textContent = "Book Now";
    book.className = "book_now";
    book.addEventListener("click",function (){
      localStorage.setItem("movie",JSON.stringify(obj));
      window.location = "checkout.html"
    })

    let movieList = document.getElementById("movies");
    movieList.append(poster,title,book)
  }