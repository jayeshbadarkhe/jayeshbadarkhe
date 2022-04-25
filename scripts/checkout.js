// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
  // let list = document.getElementById("movie");
  let data = JSON.parse(localStorage.getItem("movie"));
  console.log(data)

  let poster = document.createElement("img");
  poster.src = data.Poster;

  let title = document.createElement("h1");
  title.textContent = data.Title;

  let movieList = document.getElementById("movie");
  movieList.append(title,poster)

function confirm(){
  
}
