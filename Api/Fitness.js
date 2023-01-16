const get = (request, response) => {
  response.send([
    {
      id: 13,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      Title: " Netflix partners with Nike Training Club to bring exercise, fitness content to OTT platform: Everything to know",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://www.financialexpress.com/wp-content/uploads/2022/10/netflix-final.jpg",
      BlogContent:
        "In a partnership between Netflix and Nike Training Club, fitness content is being brought to the video streaming platform",
      Likes: "800",

    },
    {
      id: 14,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      Title:
        "How Is Technology Revolutionising the Fitness Industry In India?",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://assets.entrepreneur.com/content/3x2/2000/1671781557-Myproject-1204.jpg?auto=webp&quality=95&crop=16:9&width=675",
      BlogContent:
        "Despite the pandemic being one of the key causes of this unanticipated increase in health-conscious people, other elements profoundly influenced India's fitness industry",
      Likes: "500",
    },
    {
      id: 15,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      Title:
        " 6 Expert Tips For Setting Realistic Fitness Goals",
      PublishedDate: "Dec 10 2022",
      ImageAsset:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/12/fitness_goals.jpeg.jpg",
      BlogContent:
        "“Goal setting is a simple yet very powerful sport psychology tool,” says Joseph Galasso, Psy.D., a sports psychologist at Baker Street Behavioral Health in New Jersey. “Goal setting helps you improve motivation and commitment, stay focused on what to accomplish and track your performance,” he adds."
    },
    {
      id: 16,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      category: "fitness",
      Title: " Shilpa Shetty Fitness: Health And Wellness Tips From The ‘Mindful Yogi’",
      PublishedDate: "Dec 11 2022",
      ImageAsset:
        "https://www.boldsky.com/img/2022/12/xshilpashettyfitness-1671735351.jpg.pagespeed.ic.4UHQEcGD0A.jpg",
      BlogContent:
        "Shilpa Shetty is the OG Health Girl in Bollywood. Even before 'fitness' became a must-have aesthetic for all the celebs, Shilpa Shetty have been doing her bit and popularising yoga among the Indian viewers.",
    },

  ])
}

module.exports.apiController = get;