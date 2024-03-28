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
            <li style="">
                <img src="${albumUrl}" alt="${title} ${artist}">
                <div>
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


});
