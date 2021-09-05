const playlist = [
    {
        title: "Lovers in the night",
        artist: "seori",
        link: "https://www.youtube.com/watch?v=4drNLo-jbn8",
        cover: "lovers.jpg",
    },
    {
        title: "JUST FUN!",
        artist: "Balming Tiger",
        link: "https://www.youtube.com/watch?v=iv1Uxwnj1GM",
        cover: "justfun.jpg",
    },
    {
        title: "The Other Side (from Trolls World Tour)(Oliver Heldens Remix)",
        artist: "SZA, Justin Timberlake",
        link: "https://www.youtube.com/watch?v=vZGe3qtbOuw",
        cover: "theotherside.jpg",
    },
    {
        title: "Lullaby",
        artist: "KATIE",
        link: "https://www.youtube.com/watch?v=EskR-wv_Fhc",
        cover: "lullaby.jpg",
    },
    {
        title: "Your Favorite Place",
        artist: "Joey Pecoraro",
        link: "https://www.youtube.com/watch?v=RRf7H2cwRdw",
        cover: "place.jpg",
    },
    {
        title: "Details (feat. Boy Matthews)",
        artist: "Oliver Heldens",
        link: "https://www.youtube.com/watch?v=yp5aTZ8AndQ",
        cover: "details.jpg",
    },
    {
        title: "OHIO",
        artist: "Crush",
        link: "https://www.youtube.com/watch?v=l0Uj2RH5GO4",
        cover: "ohio.jpg",
    },
    {
        title: "Ain't A Thing (Feat.Bonn)",
        artist: "Avicii",
        link: "https://www.youtube.com/watch?v=nGsmOd8xPJE",
        cover: "aintathing.jpg",
    },
    {
        title: "ECHO",
        artist: "KATIE",
        link: "https://www.youtube.com/watch?v=Rxsk4jw4hkY",
        cover: "echo.jpg",
    },
    {
        title: "For Ourselves (Feat. Chloe DeVita) (Prod. By Mokyo)",
        artist: "박재범",
        link: "https://www.youtube.com/watch?v=xehgt5aGroA",
        cover: "forourselves.jpg",
    },
    {
        title: "under the ground (feat. dean)",
        artist: "나플라 (nafla)",
        link: "https://www.youtube.com/watch?v=hgcIIPGsViI",
        cover: "undertheground.jpg",
    },
    {
        title: "Palmtree (Schwarz & Funk Remix) (Feat. Schwarz & Funk)",
        artist: "Mandelbarth",
        link: "https://www.youtube.com/watch?v=3hdQQ3rggNA",
        cover: "palmtree.jpg",
    },
    {
        title: "Tieduprightnow",
        artist: "Parcels",
        link: "https://www.youtube.com/watch?v=dhAR_VnEAZ8",
        cover: "tieduprightnow.jpg",
    },
    {
        title: "Yummy (Feat. Crush) (Prod. By Cha Cha Malone)",
        artist: "박재범",
        link: "https://www.youtube.com/watch?v=qIAUSNOVoDY",
        cover: "yummy.jpg",
    },
    {
        title: "Boat",
        artist: "죠지",
        link: "https://www.youtube.com/watch?v=lAx7C_uUhFo",
        cover: "boat.jpg",
    },
];

const coverImg = document.querySelector(".music-box a img");
const songTitle = document.querySelector(".music-box a p");
const artist = document.querySelector(".music-box a span");
const youtubeLink = document.querySelector(".music-box a");

const todaysPlaylist = playlist[Math.floor(Math.random() * playlist.length)];

coverImg.src = `img/${todaysPlaylist.cover}`;
songTitle.innerText = todaysPlaylist.title;
artist.innerText = todaysPlaylist.artist;
youtubeLink.setAttribute("href", todaysPlaylist.link);