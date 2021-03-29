const display = document.getElementById("display");
const generate = document.getElementById("generate");

const nouns = [ "bird", "clock", "boy", "plastic",
                "duck", "teacher", "old lady", "professor", "hamster", "dog"];
const verbs = [ "kicked", "ran", "flew", "dodged",
                "sliced", "rolled", "died", "breathed", "slept", "killed"];
const adverbs = ["slowly", "elegantly", "precisely",
                 "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
const preposition = ["down", "into", "up", "on", "upon",
                     "below", "above", "through", "across", "towards"];
const adjectives = ["beautiful", "lazy", "professional",
                     "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];

//Generate Simple sentence Subject(noun)-Verb-Object
function genRand(){
    return Math.floor(Math.random()*5);
}

function generateSentence(){
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);

    var content = "The " + adjectives[rand1] +
     " " + nouns[rand2] + " " + adverbs[rand3] +
    " " + verbs[rand4] + " because some " +
    nouns[rand1] + " " + adverbs[rand1] +
    " " + verbs[rand1] + " " + preposition[rand1] +
    " a " + adjectives[rand2] + " " + nouns[rand5] +
    " which, became a " + adjectives[rand3] +
    ", " + adjectives[rand4] + " " + nouns[rand6] + "."; 

    display.innerHTML = "&quot;" + content + "&quot;";
};

//Event Listeners
generate.addEventListener("click",generateSentence)

