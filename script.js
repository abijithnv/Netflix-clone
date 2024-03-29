  let moviesArray=[
            {
                name:"Avengers",
                rating:8,
                cover:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            },
            {
                name:"The Dark Knight",
                rating:9,
                cover:"https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
            },
            {
                name:"Venom",
                rating:6.6,
                cover:"https://m.media-amazon.com/images/M/MV5BNTFkZjdjN2QtOGE5MS00ZTgzLTgxZjAtYzkyZWQ5MjEzYmZjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
            },
            {
                name:"Jumanji",
                rating:7.1,
                cover:"https://m.media-amazon.com/images/S/pv-target-images/6605eddeb3e44a153694c675cd1129d2a9d7d25576366657536f7311d9d7dc99.jpg",
            },
            {
                name:"Spider Man",
                rating:7.4,
                cover:"https://moviesmedia.ign.com/movies/image/object/033/033717/spider-man_poster.jpg",
            },
            {
                name:"Avatar",
                rating:7.9,
                cover:"https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg?region=0%2C0%2C800%2C1200",
            },
            {
                name:"Dune",
                rating:8.0,
                cover:"https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            },
            {
                name:"Godzilla",
                rating:6.0,
                cover:"https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
            },
            {
                name:"The conjuring",
                rating:7.5,
                cover:"https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
            },
            {
                name:"Free Guy",
                rating:7.1,
                cover:"https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            },

        ];

function searchMovie()
{
    let movieName=document.getElementById("search").value;
    console.log(movieName);
}

function displayMovies()
{
    let htmlString=``;

    for(let i=0;i<moviesArray.length;i++)
    {
        htmlString=htmlString+`

            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>
                    <div class="details">
                        <h1>Avengers</h1>
                        <h2>IMDB : 8.1</h2>
                        <p>Robert Downey. Chris Hemsworth . Scarlett Johansonn</p>

                    </div>
                </div>
                
                <img class="poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="poster">

            </div>

            `;
        console.log(htmlString);
        
        document.getElementById("movies").innerHTML=htmlString;
        
    }
}
displayMovies();
