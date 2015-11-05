# [A&O Productions Website](http://www.aoproductions.net/)

This is the website for A&O Productions at Northwestern University. A&O Productions is the student-run programming board of Northwestern University, with a schedule of concerts, speakers, and films that provides over 40 annual events of entertainment programming to the student body. 

## Design:

This site has 6 sections: home page, calendar, gallery, news, about and contact. Each section is either hard coded or the content is loaded over social media APIs. The goal of the site was to require as little maintenance as possible and streamline the content creation process. Rather than posting content to multiple channels, the site aggregates all of A&O's social media accounts and uses the information to fill the site. The calendar and gallery is loaded through Facebook and the newsfeed pulls from Facebook, Instagram and Twitter. 

## Technologies:

* Meteor.js
* Owl Carousel
* FBGraph
* Twitter Bootstrap
* moment.js
* Fontawesome
* less
* underscore
* jQuery

## Setup:

Create a setting.json file with the following information:
```
{
    "orion-cli": {
        "profile": "default",
        "config": "private/orion-config.json"
    },
    "public": {
        "analyticsSettings": {
            "Google Analytics" : {"trackingId": YOUR-ID}
        }
    },
    "private": {
        "fb": "FB-TOKEN",
        "twit": {
            "consumer_key": "YOUR-KEY",
            "consumer_secret": "YOUR-SECRET",
            "access_token": "YOUR-TOKEN",
            "access_token_secret": "YOUR-TOKEN-SECRET"
        },
        "ig": {
            "client_id": "YOUR-ID",
            "client_secret": "YOUR-SECRET"
        }
    }
}
```

## Running

`$ meteor --settings settings.json`
Navigate to [localhost:3000](http://localhost:3000/) on your browser

## Challenges:

This site is a single page webapp, however all content is loaded asynchronously over APIs. The pages load quickly, but the APIs can sometimes be slow or fail. It was important to handle cases where content is not returned or takes longer than the page load time. 

## To do:

[] Create event pages that wrap facebook content
[] Easier way to load banners into the site
[] Build custom poll for A&O's annual poll
[] Easier way to load member pictures using facebook