document.body.style.backgroundColor = "black"
let card_length = document.getElementsByClassName("card").length
//Card Making Function
function CardMaker(cName, views, img_link, video_duration, ago, title, video_link, channelLink) {
    let card_container = document.createElement("div")
    card_container.setAttribute("class", "card-container")
    document.querySelector(".container").append(card_container)
    let card_container_length = document.getElementsByClassName("card-container").length
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.innerHTML = `<a href=\"${video_link}\"><img src=\"${img_link}\"
                    alt=\"My Video Collection\"></a>\n <div class=\"duration\">${video_duration}</div>`
    document.getElementsByClassName("card-container")[card_container_length - 1].append(card)
    let text = document.createElement("div")
    text.setAttribute("class", "text")
    text.innerHTML = `<div class=\"text-title\">${title}
                </div>
                <div class=\"text-metadata\"> <a href=\"${channelLink}\">${cName}</a> • ${views} views • ${ago}</div>`
    document.getElementsByClassName("card-container")[card_container_length - 1].append(text)
}

CardMaker("Numberphile","1.7M","https://i.ytimg.com/vi/NGMRB4O922I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ_uk2aC4Nf2uco7xhmOQJqatnNg","9:11","10 years ago","The Mandelbrot Set - Numberphile","https://www.youtube.com/watch?v=NGMRB4O922I&list=PLt5AfwLFPxWL7NpD_DKO28XhS0Ugctkpu&index=2","https://www.youtube.com/@numberphile")
