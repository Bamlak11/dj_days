document.addEventListener("DOMContentLoaded", function() {
   
    // Function for when album is clicked
    document.querySelectorAll(".album-list li").forEach(function(albumItem) { 
        albumItem.addEventListener("click", function() {
            // gets details of title, artist etc after album is clicked
            const albumTitle = albumItem.querySelector("h3").innerHTML;
            const albumArtist = albumItem.querySelector(".artist-name").innerHTML;
            const albumGenre = albumItem.querySelector(".artist-genre").innerHTML;
            const albumCover = albumItem.querySelector("img").src;

            // Update "Now Playing" section with the selected album details
            document.getElementById("song-title").innerHTML = albumTitle;
            document.getElementById("song-artist").innerHTML = albumArtist;
            document.getElementById("song-genre").innerHTML = albumGenre;
            document.getElementById("now-playing-image").src = albumCover;
        });
    });


// js for when album for is submitted
const addAlbumForm = document.getElementById("add-album-form");
const albumList = document.getElementById("albums");

    addAlbumForm.addEventListener("submit", function() {

        // retrieve value entered in the form
        const title = document.getElementById("title").value;
        const artist = document.getElementById("artist").value;
        const genre = document.getElementById("genre").value;
        const albumUrl = document.getElementById("album-url").value;

        // Create new album HTML
        const newAlbumHTML = `
         <ul>   
            <li>
            <div class="album4">
                <img src="${albumUrl}" alt="${title} ${artist}">
                
                    <h3>${title}</h3>
                    <p>${artist}</p>
                    <p>${genre}</p>
                </div>
            </li>
        </ul>
        `;

        // Append new album to album list
        albumList.innerHTML += newAlbumHTML;

        // Reset th form
        addAlbumForm.reset();
    });


   
    // lib stock check


    // get total of albums
    const albumStock = document.getElementById("albums"); //gets the albums id from the ul
    const albums = albumStock.getElementsByTagName("li"); //gets the list of albums
    const totalAlbums = albums.length; // checks the length of list

    if(totalAlbums < 10) {

        albumStockMessage("You need more albums to play a full set.");
    } else{
        albumStockMessage("You're ready to start playing your DJ set.");
    }
    // displays message in the "album-stock" div
    function albumStockMessage(message) {
        const stockStatus = document.getElementById("album-stock");
        stockStatus.textContent = message;
    }


    //countdown for next event
const targetDate = new Date(2024, 3, 4, 4); //april 3rd

// Function to update the countdown timer
function countdown() {
    const now = new Date(); // Get the current date
    const timeDifference = targetDate - now; // Calculate the time difference in milliseconds

    // Check if the target date and time has passed
    if (timeDifference <= 0) {
        // Display a message indicating that the event has started
        document.getElementById("countdown").textContent = "The event has started!";
    } else {
        // Convert the time difference to days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown timer on the webpage
        document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update the countdown timer every second
setInterval(countdown, 1000);



});
