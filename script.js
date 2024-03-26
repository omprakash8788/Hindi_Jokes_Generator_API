// script.js

const data = [
    {
        _id: "1",
        status: "Success",
        jokeContent: "एक एयरलाइन्स ने एक योजना शुरू की आप टिकट खरीदें – साथ में आपकी पत्नी का टिकट मुफ्त ! इस योजना में भारी सफलता मिलने के बाद कम्पनी ने सारी पत्नियों को पत्र लिख कर पूछा -यात्रा कैसी रही ? सभी का एक जैसा ही जवाब आया… कौन सी यात्रा ?? 😂 😂",
        jokeNo: 1,
        created_by: "OP",
    },
    {
        _id: "2",
        status: "Success",
        jokeContent: "पति: तुम खुबसूरत हो, बुद्धिमान हो, बहुत ही समझदार हो । पत्नी: तो क्या तुम भी मुझे बेवक़ूफ़ समझते हो | पति: नहीं, अब तो बहुत समझ आ रहा है। ?? 😂 😂",
        jokeNo: 2,
        created_by: "OP",
    },
    {
        _id: "3",
        status: "Success",
        jokeContent: "गोलू: तू कौन सा बिजनेस कर रहा है ? मोलू: बिल्ली का ! गोलू: बिल्ली का ? कैसे ? मोलू: माउस मार के!?? 😂 😂",
        jokeNo: 3,
        created_by: "OP",
    },
    {
        _id: "4",
        status: "Success",
        jokeContent: "संता: यार, यह खबरें देखता हूँ, लेकिन कुछ समझ नहीं आता। बंता: क्यों, क्या हो रहा है? संता: कल कोई नया रेलवे स्टेशन खोल दिया, जबकि गाड़ी तो अब भी नहीं चलती।",
        jokeNo: 4,
        created_by: "OP",
    },
    {
        _id: "5",
        status: "Success",
        jokeContent: "डॉक्टर: तुम्हे किसी बहुत सुंदर और समझदार लड़की से शादी करनी चाहिए। रामू: सर, आप अपने मरीज़ दोस्त के लिए बताओ। डॉक्टर: वह तो मैंने तुम्हारे लिए कहा था।",
        jokeNo: 5,
        created_by: "OP",
    },
];

const jokeContent = document.getElementById('joke-content');
const jokeAuthor = document.getElementById('joke-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomJoke() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomJoke = data[randomIndex];
    jokeContent.textContent = randomJoke.jokeContent;
    jokeAuthor.textContent = `Created By: ${randomJoke.created_by}`;
}

generateBtn.addEventListener('click', generateRandomJoke);
