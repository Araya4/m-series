const arrSrc = [ 'x6qdt2d', 'x6qrxm2','x6qwtxj','x6qwvg5','x6r1ufz', 'x6rbp8m','x6rbrgh','x6rbvhn',
    'x6rbwzt', 'x6rjewh','x6rjhk7','x6sxcp5','x6sxcp4', 'x6w1ktw','x6w1lrh','x6w1u48','x6w1ukp'];
const videoUrl = arrSrc.map((v,idx)=>{
    return `https://geo.dailymotion.com/player.html?video=${v}&autoplay=1`
})
console.log(videoUrl.length);

const res = document.getElementById("myVideo");
const textS = document.querySelectorAll(".text-box");
textS.forEach((element,idx)=>{
    element.addEventListener('click',function(e){
        e.preventDefault();
        res.src = videoUrl[Number(idx)];

    })
    
})

const youtubeID = {
    "seodong":"https://www.youtube.com/embed/videoseries?list=PLxfhbpox4ajSZB57RpGhW4F4LhJtDIMKN",
    "dongyi":"https://www.youtube.com/embed/videoseries?list=PLoHUbsYCnjq_N3_tWGHV44wahLYnlABPs",
    "hurjun":"https://www.youtube.com/embed/videoseries?list=PLymm91FIIzMtfO1NYl2UNgdrmwyZ-GfcV",
    "buddha":"https://www.youtube.com/embed/videoseries?list=PLbtT4qgTjcmmjeXs4rPQAydjaPC6Vrjho",
    "sangdo":"https://www.youtube.com/embed/videoseries?list=PLymm91FIIzMvyuz7A2mxL-ZJapu4-RZfb",
    "yisan":"https://www.youtube.com/embed/videoseries?list=PLOBbhydezQbek3PJDx0tTiexzeMWly2JO" ,
    "theLegend":"https://www.youtube.com/embed/videoseries?list=PLGH-CIYjsKx54QLiHQIH4F2ZobAVKVVpF" ,
    "DeeS2":"https://www.youtube.com/embed/videoseries?list=PLrHp1Mm55sYo_W5tW5vVhA8ZcldvFR3gL" ,
    "DeeS3":"https://www.youtube.com/embed/videoseries?list=PLhA5A89xxhfxNrsG7zzs9qAXKVqo68ASO" 
}
function showVideo(ytID){
    console.log(youtubeID[ytID]);
    res.src = youtubeID[ytID];
}
