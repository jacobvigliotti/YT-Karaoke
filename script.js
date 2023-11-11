var testVar = "Hello";
console.log(testVar);


function searchVideos(){
    const karaokeTerm = "karaoke";
    const apiKey = "AIzaSyCuJ4a6n3XCKVodtOI2xGHT5ePb8MEpp3I";
    const maxResults = 5;
    const searchInput = document.getElementById("searchInput").value;
    //const apiUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults" + maxResults + "&q=" + searchInput + "%20" + karaokeTerm + "&key=" + apiKey;
    const apiUrl = '/sampleResult.json';

    /*let videos = sampleResult.items;
    
    for(video of videos){
        videoTitles.push(video.snippet.title);
    }
*/


const videoTitles = [];
    fetch(apiUrl)
    .then(result=>{
        return result.json()})
    .then(data=>{
        let videos = data.items;
        let videoTitles = [];
        for(video of videos){
            let title = video.snippet.title;
            videoTitles.push(title);
        }
        return videoTitles;})
    .then(titles=>{
        document.getElementById("searchResults").innerHTML = titles.join("<br>");
    })

}






