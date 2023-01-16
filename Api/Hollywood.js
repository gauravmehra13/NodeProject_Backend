const get = (request, response) => {
  response.send([
    {
      id: 21,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      imdb: "5.8/10",
      category: "hollywood",
      Title:
        " The Batman director Matt Reeves talks about including Robin in sequel: 'There may be a really interesting story'",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/11/550x309/Batman_Robin_1647009013654_1647009026643.jpeg",
      BlogContent:
        " The Batman director Matt Reeves has opened up about the possibility of including the superhero's sidekick Robin in the film's sequel. ",
      Likes: "800",
    },

    {
      id: 22,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "hollywood",
      Title:
        " The Banshees of Inisherin movie review: Comedy never hurt this good",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/15/550x309/banshees_of_inisherin_review_1671088142107_1671088142281_1671088142281.webp",
      BlogContent:
        " The Banshees of Inisherin movie review: Colin Farrell, Brendan Gleeson, Kerry Condon and Barry Keoghan round up an excellent cast in this work of ferocious wisdom and wit.",
      Likes: "800",
    },

    {
      id: 23,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "hollywood",
      Title:
        "Tom Cruise attempts his 'most dangerous stunt' as he jumps off cliff with motorcycle for Mission Impossible 7. Watch",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/20/550x309/Tom_Cruise_1671510084343_1671510103764_1671510103764.jpg",
      BlogContent:
        "BTS footage shows Tom Cruise preparing for what he calls his ‘most dangerous stunt ever’ – jumping off of a cliff with a motorcycle without any harness for Mission Impossible 7.",
      Likes: "2k",
    },

    {
      id: 24,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",

      category: "hollywood",
      Title: " Henry Cavill shares note as DC cancels Superman's return after Wonder Woman 3",
      PublishedDate: "Dec 12 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/15/550x309/henry-cavill_1671076492717_1671076492856_1671076492856.jpg",
      BlogContent:
        "Henry Cavill has announced that he will not be returning as Superman in the Man of Steel sequel. He had a meeting with James Gunn and Peter Safran.",
      Likes: "800",

    }
  ])
}

module.exports.apiController = get;