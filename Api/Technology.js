const get = (request, response)=>{
    response.send([
        {
            id: 6,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "technology",
            Title:
        " Ukraine to launch an NFT collection depicting Russian-Ukrainian war",
      CategoryName: "Technology",
      PublishedDate: "Dec 9 2022",
      ImageAsset:
        "https://images.indianexpress.com/2022/03/ezgif.com-gif-maker-1-1.jpg",
      BlogContent:
        "Alex Bornyakov said each NFT art would represent a story from the war. Every piece of art would be backed with a reliable news source. ",
      Likes: "800",
          },
          {
            id: 7,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "technology",
            Title:
            " Apple’s new A16 chip could be exclusive to the high-end iPhone 14 Pro models",
          CategoryName: "Technology",
          PublishedDate: "Dec 9 2022",
          ImageAsset:
            "https://images.indianexpress.com/2022/03/iphone-14-a16-chip-featured.jpg",
          BlogContent:
            "According to analyst Ming-Chi Kuo the higher-end iPhone 14 Pro and Pro Max will feature the new A16 chip, while the other variants come with A15.",
          Likes: "650",
          },
          {
            id: 8,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "technology",
            Title:
            " Brazil Gets Crypto Laws, Industry Players Get 180 Days to Comply: Details",
          CategoryName: "Technology",
          PublishedDate: "Dec 9 2022",
          ImageAsset:
            "https://i.gadgets360cdn.com/large/brazil_bitcoin_unsplash_ewan_kennedy_1635409953324.jpg?downsize=950:*",
          BlogContent:
            "Brazil is likely to get a new, internal committee that would maintain an oversight on all the crypto activities being processed in the country..",
          Likes: "700",
          },
    ])
}
module.exports.apiController = get;