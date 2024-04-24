import { useEffect } from "react"
import axios from 'axios'
function Movies() {
    useEffect(() => {
        //     fetch('https://dummyapi.online/api/movies/1')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     data.map((item) => {
        //         console.log(item);
        //         let disp = `<div> <img src=${item.image}></img>
        //         <h1> ${item.movie}</h1>
        //          </div>`
        //         document.getElementById("movie").innerHTML += disp;
        //     });
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        fetch('https://api.sampleapis.com/movies/horror/1')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (typeof data === 'object') {

                    console.log(data);
                    let imageUrl = data.posterURL
                    let disp = `<div> <img src="${imageUrl}" height="0px" width="150px"></img>
            </div>`;
                    document.getElementById("movie").innerHTML = disp;
                    console.log("Data is not in the expected format.");
                }
            })
            .catch((error) => {
                console.log(error);
            });


    })
    return (
        <>
            <div className="horror left-28">
                <h3 className="text-white font-bold text-lg">Horror</h3>
                <div id="movie" className=" relative">
                </div>
            </div>
        </>
    )
}

export default Movies