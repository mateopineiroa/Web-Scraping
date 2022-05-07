const request = require('request')

function scraping(){
    let url = 'https://www.freecodecamp.org/learn/responsive-web-design/#basic-css'
    
    request(url, function(err, res, body){
        console.log(body)
    })
}
scraping()