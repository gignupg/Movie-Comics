import subtitles from './subtitles';

const media = [
    { video: 'https://player.vimeo.com/video/781670633?h=2514b21dd7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945938%3Fsecret_token%3Ds-jnBjJ27mKlj&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text1.en,
                es: subtitles.text1.es,
                de: subtitles.text1.de
            },
            translation: {
                en: subtitles.text1.en,
                es: subtitles.text1.es,
                de: subtitles.text1.de
            },
            vocabulary: [
                ["My bad", "Used to acknowledge responsibility for a mistake. \"Sorry about the confusion. It's my bad!\""]
            ]
        },
    },
    { image: require('./assets/images/image2.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945914%3Fsecret_token%3Ds-ZjIgiGyjO3O&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text2.en,
                es: subtitles.text2.es,
                de: subtitles.text2.de
            },
            translation: {
                en: subtitles.text2.en,
                es: subtitles.text2.es,
                de: subtitles.text2.de
            },
            vocabulary: []
        },
    },
    { video: 'https://player.vimeo.com/video/781809405?h=a1fe703ee4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945899%3Fsecret_token%3Ds-uJxyAK1gKwD&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text3.en,
                es: subtitles.text3.es,
                de: subtitles.text3.de
            },
            translation: {
                en: subtitles.text3.en,
                es: subtitles.text3.es,
                de: subtitles.text3.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image4.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945890%3Fsecret_token%3Ds-v0DQuqZ5XVI&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text4.en,
                es: subtitles.text4.es,
                de: subtitles.text4.de
            },
            translation: {
                en: subtitles.text4.en,
                es: subtitles.text4.es,
                de: subtitles.text4.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image5.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945875%3Fsecret_token%3Ds-EyfTK8Fc0fB&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text5.en,
                es: subtitles.text5.es,
                de: subtitles.text5.de
            },
            translation: {
                en: subtitles.text5.en,
                es: subtitles.text5.es,
                de: subtitles.text5.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image6.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945866%3Fsecret_token%3Ds-HLAtcRVCrZU&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text6.en,
                es: subtitles.text6.es,
                de: subtitles.text6.de
            },
            translation: {
                en: subtitles.text6.en,
                es: subtitles.text6.es,
                de: subtitles.text6.de
            },
            vocabulary: []
        },
    },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945860%3Fsecret_token%3Ds-vBbFKlYBN4x&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text7.en,
                es: subtitles.text7.es,
                de: subtitles.text7.de
            },
            translation: {
                en: subtitles.text7.en,
                es: subtitles.text7.es,
                de: subtitles.text7.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image8.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945851%3Fsecret_token%3Ds-qXbsl9NnURs&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text8.en,
                es: subtitles.text8.es,
                de: subtitles.text8.de
            },
            translation: {
                en: subtitles.text8.en,
                es: subtitles.text8.es,
                de: subtitles.text8.de
            },
            vocabulary: [
                ["Oui [French]", "Yes"],
                ["Petit [French]", "Small"],
                ["Le petit asshole [French/English]", "The little asshole (the kid is mixing French and English)"]
            ]
        },
    },
    { image: require('./assets/images/image9.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945848%3Fsecret_token%3Ds-WvdHW0oLOl1&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text9.en,
                es: subtitles.text9.es,
                de: subtitles.text9.de
            },
            translation: {
                en: subtitles.text9.en,
                es: subtitles.text9.es,
                de: subtitles.text9.de
            },
            vocabulary: []
        },
    },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945842%3Fsecret_token%3Ds-oQJPQGd4Ugr&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text10.en,
                es: subtitles.text10.es,
                de: subtitles.text10.de
            },
            translation: {
                en: subtitles.text10.en,
                es: subtitles.text10.es,
                de: subtitles.text10.de
            },
            vocabulary: [
                ["To lay off of someone", "To leave someone alone, to stop bothering/attacking/hurting someone"]
            ]
        },
    },
    { image: require('./assets/images/image11.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945830%3Fsecret_token%3Ds-pl0V2vsYvr2&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text11.en,
                es: subtitles.text11.es,
                de: subtitles.text11.de
            },
            translation: {
                en: subtitles.text11.en,
                es: subtitles.text11.es,
                de: subtitles.text11.de
            },
            vocabulary: []
        },
    },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945824%3Fsecret_token%3Ds-sRMzgFR7tRH&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text12.en,
                es: subtitles.text12.es,
                de: subtitles.text12.de
            },
            translation: {
                en: subtitles.text12.en,
                es: subtitles.text12.es,
                de: subtitles.text12.de
            },
            vocabulary: []
        },
    },
    { video: 'https://player.vimeo.com/video/781809454?h=20093d1736' },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945815%3Fsecret_token%3Ds-m9m3BUKx3wQ&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text13.en,
                es: subtitles.text13.es,
                de: subtitles.text13.de
            },
            translation: {
                en: subtitles.text13.en,
                es: subtitles.text13.es,
                de: subtitles.text13.de
            },
            vocabulary: []
        },
    },
    { video: 'https://player.vimeo.com/video/781809485?h=3023f22f2a' },
    { image: require('./assets/images/image14.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945806%3Fsecret_token%3Ds-fETpCxS12OJ&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text14.en,
                es: subtitles.text14.es,
                de: subtitles.text14.de
            },
            translation: {
                en: subtitles.text14.en,
                es: subtitles.text14.es,
                de: subtitles.text14.de
            },
            vocabulary: [
                ["Thickness", "Used as a swear word, meaning fat (non-standard)"],
                ["About you thickness?", "What about you fat boy?"]
            ]
        },
    },
    { image: require('./assets/images/image15.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945797%3Fsecret_token%3Ds-EzNMlY1nTnk&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text15.en,
                es: subtitles.text15.es,
                de: subtitles.text15.de
            },
            translation: {
                en: subtitles.text15.en,
                es: subtitles.text15.es,
                de: subtitles.text15.de
            },
            vocabulary: [
                ["Goggles", "Special glasses that fit close to the face to protect the eyes, often used for swimming"]
            ]
        },
    },
    { image: require('./assets/images/image16.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945788%3Fsecret_token%3Ds-oR21V7Jb06Y&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text16.en,
                es: subtitles.text16.es,
                de: subtitles.text16.de
            },
            translation: {
                en: subtitles.text16.en,
                es: subtitles.text16.es,
                de: subtitles.text16.de
            },
            vocabulary: [
                ["Son of a gun", "Son of a gun is an exclamation in American and British English. It can be used encouragingly or to compliment, as in \"You son of a gun, you did it!\""]
            ]
        },
    },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945782%3Fsecret_token%3Ds-EetQ92jdqj4&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text17.en,
                es: subtitles.text17.es,
                de: subtitles.text17.de
            },
            translation: {
                en: subtitles.text17.en,
                es: subtitles.text17.es,
                de: subtitles.text17.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image18.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945779%3Fsecret_token%3Ds-O5BIYmgb2sv&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text18.en,
                es: subtitles.text18.es,
                de: subtitles.text18.de
            },
            translation: {
                en: subtitles.text18.en,
                es: subtitles.text18.es,
                de: subtitles.text18.de
            },
            vocabulary: [
                ["To come in hot", "He's refering to Hancock's landing, the street got a little destroyed when he landed"]
            ]
        },
    },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945773%3Fsecret_token%3Ds-A2qlnPimIsi&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text19.en,
                es: subtitles.text19.es,
                de: subtitles.text19.de
            },
            translation: {
                en: subtitles.text19.en,
                es: subtitles.text19.es,
                de: subtitles.text19.de
            },
            vocabulary: [
                ["Very", "Exact/precise"],
                ["You don't drive", "Hancock doesn't drive or own a car because he always flies"]
            ]
        },
    },
    { video: 'https://player.vimeo.com/video/781809529?h=6479f0e8fa' },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945761%3Fsecret_token%3Ds-uaPvFpuf0zi&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text20.en,
                es: subtitles.text20.es,
                de: subtitles.text20.de
            },
            translation: {
                en: subtitles.text20.en,
                es: subtitles.text20.es,
                de: subtitles.text20.de
            },
            vocabulary: []
        },
    },
    { video: 'https://player.vimeo.com/video/781809565?h=c78ec28f09' },
    { image: require('./assets/images/image22.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945755%3Fsecret_token%3Ds-EZGMnK4bssU&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text22.en,
                es: subtitles.text22.es,
                de: subtitles.text22.de
            },
            translation: {
                en: subtitles.text22.en,
                es: subtitles.text22.es,
                de: subtitles.text22.de
            },
            vocabulary: [
                ["Punkass", "An obnoxious or stupid person unworthy of respect"]
            ]
        },
    },
    { image: require('./assets/images/image23.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945734%3Fsecret_token%3Ds-Q7KgwTkiNSx&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text23.en,
                es: subtitles.text23.es,
                de: subtitles.text23.de
            },
            translation: {
                en: subtitles.text23.en,
                es: subtitles.text23.es,
                de: subtitles.text23.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image24.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945719%3Fsecret_token%3Ds-dUxEm3CdoUv&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text24.en,
                es: subtitles.text24.es,
                de: subtitles.text24.de
            },
            translation: {
                en: subtitles.text24.en,
                es: subtitles.text24.es,
                de: subtitles.text24.de
            },
            vocabulary: []
        },
    },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945713%3Fsecret_token%3Ds-KgukTU8QVFt&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text25.en,
                es: subtitles.text25.es,
                de: subtitles.text25.de
            },
            translation: {
                en: subtitles.text25.en,
                es: subtitles.text25.es,
                de: subtitles.text25.de
            },
            vocabulary: [
                ["To go down", "To be received in a particular way: \"The joke didn't go down very well!\""]
            ]
        },
    },
    { image: require('./assets/images/image26.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945704%3Fsecret_token%3Ds-Q8m9ROVJkpq&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text26.en,
                es: subtitles.text26.es,
                de: subtitles.text26.de
            },
            translation: {
                en: subtitles.text26.en,
                es: subtitles.text26.es,
                de: subtitles.text26.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image27.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945692%3Fsecret_token%3Ds-zGHyf8q9Suj&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text27.en,
                es: subtitles.text27.es,
                de: subtitles.text27.de
            },
            translation: {
                en: subtitles.text27.en,
                es: subtitles.text27.es,
                de: subtitles.text27.de
            },
            vocabulary: []
        },
    },
    { image: require('./assets/images/image28.png') },
    { audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1403945686%3Fsecret_token%3Ds-qvgqlMtd3RS&color=%23ff5500&inverse=false&auto_play=false&show_user=true' },
    {
        text: {
            subtitles: {
                en: subtitles.text28.en,
                es: subtitles.text28.es,
                de: subtitles.text28.de
            },
            translation: {
                en: subtitles.text28.en,
                es: subtitles.text28.es,
                de: subtitles.text28.de
            },
            vocabulary: []
        },
    },
];

export default media;