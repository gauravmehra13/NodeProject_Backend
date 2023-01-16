const get = (req, res) => {
  res.send([
    {
      "id": "9",
      "category": "bollywood",
      "Title":
        "Crowd chants Rohit Shetty's name as he passionately defends Bollywood: 'Ek saal kharab gaya aur aap palti maar rahe ho?'",
      "PublishedDate": "Dec 12 2022",
      "ImageAsset": "https://images.hindustantimes.com/img/2022/12/22/550x309/rohit_shetty_1671696839607_1671696839710_1671696839710.jpg",
      "BlogContent":
        "Rohit Shetty listed all the great movies that Bollywood had offered the country over the years during a recent panel discussion.",
      "Likes": "100",
    },
    {
      "id": "10",
      "category": "bollywood",
      "Title":
      " Twitter isn't impressed with Jhoome Jo Pathaan: ‘Tom Cruise is doing stunts at 60, SRK is making cringe content at 57'",

    "PublishedDate": "Dec 10 2022",
    "ImageAsset":
      "https://images.hindustantimes.com/img/2022/12/22/550x309/jhoome_jo_pathaan_1671704987815_1671704987933_1671704987933.jpeg",
    "BlogContent":
      "Fans do not seem impressed with the latest Pathaan song, Jhoome Jo Pathaan. Neither the music, the lyrics, nor the choreography seem to have worked in the song's favour",
    },
    {
      "id": "11",
      "avatar": "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      "category": "bollywood",
    Title: " Jaideep Ahlawat on Saif Ali Khan: 'Nawaabi unke khoon me hai'",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/12/22/550x309/jaideepahlawat_1671693403457_1671693403774_1671693403774.jpg",
      BlogContent:
        "Jaideep Ahlawat says Saif Ali Khan has royalty in his blood, and recalls how Kareena Kapoor helped him calm down on sets of The Devotion Of Suspect X. ",
      Likes: "700",
    },
    {
      "id": "12",
      "avatar": "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      "category": "bollywood",
      Title:
      " Cirkus box office day 1 prediction: Ranveer Singh starrer to receive a lukewarm response; may NOT hit double-digit numbers",
    PublishedDate: "Dec 9 2022",
    ImageAsset:
      "https://st1.bollywoodlife.com/wp-content/uploads/2022/12/Ranveer-57.png?impolicy=Medium_Widthonly&w=800",
    BlogContent:
      "Cirkus: Ranveer Singh, Jacqueline Fernandez, Pooja Hegde starrer directed by Rohit Shetty has hit the screens. Here's its box office prediction.",
    Likes: "600",
    }
  ])
}

module.exports.apiController = get;