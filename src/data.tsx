const data = [
    { video: require('./assets/videos/clip1.mp4') },
    { audio: require('./assets/audios/phrase1.mp4') },
    {
        text: {
            subtitle: "My bad! Everybody alright?",
            vocabulary: [
                ["My bad", "Used to acknowledge responsibility for a mistake. \"Sorry about the confusion. It's my bad!\""]
            ]
        }
    },
    { image: require('./assets/images/scene2.png') },
    { audio: require('./assets/audios/phrase2.mp4') },
    {
        text: {
            subtitle: "He's an asshole!",
            vocabulary: [
                ["Asshole [Insult]", "An unpleasant or stupid person. \"Some asshole had parked so I couldn't get out.\""]
            ]
        }
    }
];

export default data;