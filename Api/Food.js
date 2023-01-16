const get = (request, response) => {
    response.send([
        {
            id: 17,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            details: "Have a quick bite today & refresh your mood",
            category: "food",
            Title:
            " You want to know the worst food experiments this year? We give you 10",
          CategoryName: "Food",
          PublishedDate: "Dec 11 2022",
          ImageAsset:
            "https://images.indianexpress.com/2022/12/Untitled-design-38-1.jpg",
          BlogContent:
            "As people donned their aprons and thought up unthinkable food experiments with humble ingredients, we bring you the most bizarre foods of 2022.",
          Likes: "500",
          },
          {
            id: 18,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "food",
            Title: "Cabinet approves distribution of free food grain till December 2023",
            CategoryName: "Food",
            PublishedDate: "Dec 11 2022",
            ImageAsset:
              "Cabinet approves distribution of free food grain till December 2023",
            BlogContent:
              "Cabinet on Friday approved distribution of free foodgrain for one more year. Commerce minister Piyush Goyal said that the centre will bear the entire cost of ₹2 lakh crore. ",
            Likes: "1K",
          },
          {
            id: 19,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            details: "Remove your hunger in just 2 mins",
            category: "food",
            Title:
            "India replaces COVID-era free food programme with cheaper scheme",
          CategoryName: "Food",
          PublishedDate: "Dec 11 2022",
          ImageAsset:
            "https://www.reuters.com/resizer/i3AGRUGOXXDqzjbG62HUedmehjA=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NGNXFMOVS5P7JLNGUCDT7HBUIU.jpg",
          BlogContent:
            "NEW DELHI, Dec 23 (Reuters) - India will end its COVID-19 era free food programme on Dec. 31 and replace it with a cheaper programme that will save the government nearly $20 billion in the next 12 months.",
          Likes: "400",

          },
          {
            id: 20,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "food",
            Title:
            " Wait, What? Bizarre 'Liquid Pie' Made With Cola, Butter And Sugar Disgusts Twitter",
          CategoryName: "Food",
          PublishedDate: "Dec 11 2022",
          ImageAsset:
            "https://c.ndtvimg.com/2022-12/4bma5bco_liquid-pie_625x300_23_December_22.jpg",
          BlogContent:
            "Recently, a bizarre food video of a liquid pie has left the internet disgusted. Made by mixing cola drinks, butter and sugar - this pie recipe surely has no takers.",
          Likes: "1K+",
        }
    ])
}

module.exports.apiController = get;