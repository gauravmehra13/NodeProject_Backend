const get = (request, response) =>{
    response.send([
        {
            id: 3,
            category: "sports",
            name: "Baseball",
            image: "sports1",
            content:
              `Take it from us, sport can be a Game Changer.Taking part in sport can help us feel fitter, healthier and mentally strong, and that is just the start of it. Sport can also be fun, especially when played as part of a team or with family or friends. As we have seen through our Club Game Changers campaign, sport can also develop great leaders and be an opportunity for individuals to shine, whether it is playing for a local grassroots club or at an international level.If you’re considering signing yourself or family member up for a sport and need some encouragement, then it’s worth keeping in mind the many benefits.`,
            details:
              "Health benifits for playing sports.Latest research article report here",
              avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
          },
          {
            id: 4,
            avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "sports",
            name: "Badminton",
            image: "badminton",
            details:
              "PV Sindhu, Kidambi Srikanth Lead Indian Challenge in German Open",
      
            content:
              " Two-time Olympic medallist P V Sindhu and world championship medal-winners Kidambi Srikanth and Lakshya Sen will be the top Indian contenders at the German Open Super 300 badminton tournament starting here on Tuesday.While Sindhu eased to a title win at Syed Modi International and Lakshya grabbed his maiden Super 500 trophy at Indian Open in January, Srikanth saw the momentum of the World Championships fizzle out a bit after withdrew from the Delhi due to COVID-19 infection.",
          },
          {
              id:5,
              avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
            category: "sports",
            name: "Table Tennis",
            image: "tableTennis",
            details: "Walker beaten in the first Grand Smash Event,bids retirement",
            content:
              "Sam Walker’s first experience of the WTT Grand Smash ended in defeat in a deciding game to Iran’s Amir Hossein Hodaei in Singapore today. Walker led his opponent 2-1, but was unable to convert the lead into a victory as his opponent, ranked 152 in the world, came back to win 3-2 (11-7, 9-11, 9-11, 11-7, 11-6) in their second qualifying round tie.England’s only other representative at the inaugural Grand Smash event is Liam Pitchford, who has been seeded through to the main draw, which begins on Friday. He will face Marcelo Aguirre of Paraguay (WR 53) in the last 64.",
          },
    ])
}

module.exports.apiController = get;