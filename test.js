console.log("This gets a user ID from a username.")
console.log()
console.log("Contact:")
console.log()
console.log("Github: https://github.com/Scripped")
console.log("Roblox: https://www.roblox.com/users/1957038621/profile")
console.log()
console.log("This is case-sensitive.")
console.log("This is Version 1.0.0, I'm fairly new to coding, so it will have MANY issues, feel free to contact me about it on ROBLOX/Github.")
console.log("This will take a few seconds.")

const prompt = require("prompt-sync")({sigint: true});

var username = prompt("Enter a username: ")

const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = "https://www.roblox.com/search/users?keyword=" + username;
var userid = $(this).attr("thumbnail-target-id")
const userword = $(this).text()
const user = $(this).text()

 puppeteer
.launch()
.then(function(broswer) {
    return broswer.newPage();
})
.then(function(page) {
    return page.goto(url).then(function() {
        return page.content();
    });
})
.then(function(html) {
    $('.text-overflow.avatar-name.ng-binding.ng-scope', html).each(function() {
      const user = $(this).text()

    $('.keyword', html).each(function() {
      const userword = $(this).text()

      if (userword === user) {
            console.log(user)

            console.log()
            $('.thumbnail-2d-container', html).each(function() {
                var userid = $(this).attr("thumbnail-target-id")

                console.log( "ID: " + userid)

                 process.exit(1);
            })
        
          } else {


          console.log(user)

            console.log()
            $('.thumbnail-2d-container', html).each(function() {
                var userid = $(this).attr("thumbnail-target-id")

                console.log( "ID: " + userid)

                 process.exit(1);
            })
        }
        })
      })
    })
