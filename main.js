let arshow=document.getElementById("artistshow")
let alshow=document.getElementById("albumshow")
let rashow=document.getElementById("radioshow")
let chshow=document.getElementById("chatshow")
let edshow=document.getElementById("editorshow")

let pritammusic=document.getElementById("pritampage")
let jigarmusic=document.getElementById("sachinpage")
let armusic=document.getElementById("rahmanpage")
let arjitmusic=document.getElementById("singhpage")
let atifmusic=document.getElementById("aslampage")

let browse=document.getElementById("browseall")

let bt=document.getElementsByClassName("showall")

let album=document.getElementById("albums")
let radio=document.getElementById("radios")
let chat=document.getElementById("chats")
let editor=document.getElementById("editors")
let popular=document.getElementById("populars")

let home=document.getElementById("home")
home.addEventListener("click",()=>{
    arshow.style.display="none"
    alshow.style.display="none"
    rashow.style.display="none"
    chshow.style.display="none"
    edshow.style.display="none"
    pritammusic.style.display="none"
    jigarmusic.style.display="none"
    armusic.style.display="none"
    arjitmusic.style.display="none"
    atifmusic.style.display="none"
    bt[0].style.display="block"
    bt[1].style.display="block"
    bt[2].style.display="block"
    bt[3].style.display="block"
    bt[4].style.display="block"
    popular.style.display="block"
    radio.style.display="block"
    chat.style.display="block"
    editor.style.display="block" 
    album.style.display="block" 
   
})
function popularfun(){
    arshow.style.display="block"
    bt[0].style.display="none"
    album.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none"    
}
function albumfun(){
    alshow.style.display="block"
    bt[1].style.display="none"
    popular.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none"  

}
function radiofun(){
    rashow.style.display="block"
    bt[2].style.display="none"
    album.style.display="none"
    popular.style.display="none"
    chat.style.display="none"
    editor.style.display="none"    
}
function chatfun(){
    chshow.style.display="block"
    bt[3].style.display="none"
    popular.style.display="none"
    radio.style.display="none"
    album.style.display="none"
    editor.style.display="none"    
}
function editorfun(){
    edshow.style.display="block"
    bt[4].style.display="none"
    album.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    popular.style.display="none"    
}


function pritam(){
    pritammusic.style.display="block"
    popular.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none" 
    album.style.display="none" 
}

function sachin(){
    jigarmusic.style.display="block"
    popular.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none" 
    album.style.display="none" 
}

function ar(){
    armusic.style.display="block"
    popular.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none" 
    album.style.display="none" 
}

function arjit(){
    arjitmusic.style.display="block"
    popular.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none" 
    album.style.display="none" 
}

function atif(){
    atifmusic.style.display="block"
    popular.style.display="none"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none" 
    album.style.display="none" 
}

function brows(){
    browse.style.display="block" 
    popular.style.display="hidden"
    radio.style.display="none"
    chat.style.display="none"
    editor.style.display="none" 
    album.style.display="none"
        
}






// ****************************************  SEARCHING SONGS   ***********************************************//

const searchInput = document.getElementById('srch');
const searchButton = document.getElementById('broww');
const suggestionsContainer = document.getElementById('bg-art');
    let allSongs = [];

    // Fetch songs from JSON API
    fetch('https://spotify-api-1-jycz.onrender.com/songs')
      .then(response => response.json())
      .then(data => {
        allSongs = data;
      });

    // Show suggestions while typing
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredSongs = allSongs.filter(song =>
        song.title.toLowerCase().includes(searchTerm)||
        song.artist.toLowerCase().includes(searchTerm) ||
        song.album.toLowerCase().includes(searchTerm)
      );
      displaySuggestions(filteredSongs);
    });

    // Display suggestions
    function displaySuggestions(songs) {
      suggestionsContainer.innerHTML = '';
      if (songs.length === 0) {
        suggestionsContainer.innerHTML = '<div>No songs found.</div>';
        return;
      }
      songs.forEach((song, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');

        const img = document.createElement('img');
        img.src = song.coverimage;
        img.alt = song.title;
        img.alt = song.album;

        const text = document.createElement('span');
        text.textContent = song.title;

        suggestionItem.appendChild(img);
        suggestionItem.appendChild(text);
        suggestionItem.addEventListener('click', () => selectSong(song));

        suggestionsContainer.appendChild(suggestionItem);
      });
    }
    function songg(){
        
    }
    // Select a song to play and open the song in a new tab
    function selectSong(song) {
      searchInput.value = '';  // Clear the search input
      suggestionsContainer.innerHTML = '';  // Clear the suggestions
      const songUrl = `player.html?songId=${song.id}&songTitle=${encodeURIComponent(song.title)}&songArtist=${encodeURIComponent(song.artist)}&audioUrl=${encodeURIComponent(song.audiourl)}&coverImage=${encodeURIComponent(song.coverimage)}`;
      window.open(songUrl, '_self');  // Open in a new tab
    
    }

// **********************************   SEARCH CARD OR BROWSE CARD   *************************************//

      // Function to generate a random color
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Select all .browse divs
    const browseDivs = document.querySelectorAll('.browse');

    // Apply a random background color to each .browse div
    browseDivs.forEach(div => {
        const randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    });


    // ***************************************  VOICE RECOGNITATION   ******************************************//
    
     document.addEventListener('DOMContentLoaded', () => {
        const assistantIcon = document.getElementById('voice');
        const statusText = document.getElementById('bg-art');
        const suggestionsList = document.getElementById('bg-art');

        if (!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support voice recognition!');
            return;
        }

        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = async (event) => {
            const userQuery = event.results[0][0].transcript.toLowerCase().trim();
            statusText.textContent = `You said: "${userQuery}". Searching for songs...`;
            suggestionsList.innerHTML = '';

            try {
                const response = await fetch('https://spotify-api-1-jycz.onrender.com/songs');
                const songs = await response.json();

                // **Exact Match**
                const exactMatch = songs.find(song => song.title.toLowerCase() === userQuery);
                if (exactMatch) {
                    statusText.textContent = `Playing: "${exactMatch.title}" by ${exactMatch.artist}`;
                    openPlayerPage(exactMatch);
                    return;
                }

                // **Partial Match (First Word of Title, Artist, or Album)**
                const firstWordQuery = userQuery.split(' ')[0]; // Get first word of user query

                const relatedMatches = songs.filter(song => {
                    const titleFirstWord = song.title.split(' ')[0].toLowerCase();
                    const artistFirstWord = song.artist.split(' ')[0].toLowerCase();
                    const albumFirstWord = song.album.split(' ')[0].toLowerCase();

                    return (
                        titleFirstWord === firstWordQuery || 
                        artistFirstWord === firstWordQuery || 
                        albumFirstWord === firstWordQuery
                    );
                });

                if (relatedMatches.length > 0) {
                    statusText.textContent = `Found ${relatedMatches.length} related songs. Click on any to play.`;
                    displaySuggestions(relatedMatches);
                } else {
                    statusText.textContent = `No matches found for "${userQuery}". Try again.`;
                }
            } catch (error) {
                statusText.textContent = 'Error fetching song data. Please try again.';
                console.error('Error:', error);
            }
        };

        recognition.onerror = (event) => {
            statusText.textContent = 'Speech recognition error. Please try again.';
            console.error('Speech recognition error:', event.error);
        };

        assistantIcon.addEventListener('click', () => {
            statusText.textContent = 'Listening... Please say the song name.';
            recognition.start();
        });

        function displaySuggestions(matches) {
            suggestionsList.innerHTML = '';
            matches.forEach(song => {
                const listItem = document.createElement('li');
                 listItem.className="list"
                const coverImage = document.createElement('img');
                coverImage.className="coverimage"
                coverImage.src = song.coverimage || 'default-image.jpg';
                coverImage.alt = `${song.title} cover image`;

                listItem.appendChild(coverImage);
                listItem.appendChild(document.createTextNode(`${song.title} by ${song.artist}`));

                listItem.addEventListener('click', () => openPlayerPage(song));
                suggestionsList.appendChild(listItem);
            });
        }

        function openPlayerPage(song) {
            const playerPage = `voiceAssistant.html?audio=${encodeURIComponent(song.audiourl)}&title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist)}&image=${encodeURIComponent(song.coverimage || 'default-image.jpg')}`;
            window.open(playerPage, '_self');
        }
    });


// //   *********************************** CLICK H1 TAG ************************************************** //
        

         // Select all the h1 tags with the class 'songTitle'
         const songTitles = document.querySelectorAll('.songTitle');

         // Add click event listeners to all h1 elements
         songTitles.forEach(title => {
             title.addEventListener('click', function() {
                 fetchSongsByTitle(this.innerText); // Pass the clicked title to the function
             });
         });
 
         async function fetchSongsByTitle(title) {
             try {
                 const response = await fetch('https://spotify-api-1-jycz.onrender.com/songs');
                 const songs = await response.json();
 
                 if (songs.length === 0) {
                     alert('No songs found!');
                     return;
                 }
 
                 // Find the song by title
                 const matchedSong = songs.find(song => song.title.toLowerCase() === title.toLowerCase());
 
                 if (matchedSong) {
                     // Redirect to songPage.html with the matched song's title
                     const songPageUrl = `heading.html?songTitle=${encodeURIComponent(matchedSong.title)}`;
                     window.location.href = songPageUrl;
                 } else {
                     alert('Song not found with the specified title!');
                 }
             } catch (error) {
                 console.error('Error fetching songs:', error);
                 alert('Error fetching songs. Please try again later.');
             }
         }
        
        