//Mixed Messages by Taylor Walker
//This project was completed during the CodeCademy Full-Stack Enginerring Course
//This is the project's main
////////////////////////////////////////////////////////////////////////////////



//These are sets of data that I will use to put in a pre-formatted message
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weather = ['Snowing', 'Raining', 'Clear', 'Sunny', 'Lightning'];
const emotions = ['Happy', 'Sad', 'Angry', 'Embarrased', 'Tired'];

//This function will return a string with a set phrase with a random word from each of the above data sets in it
createMessage = () => {
    daysRandom = Math.floor(Math.random()*days.length)
    weatherRandom = Math.floor(Math.random()*weather.length)
    emotionsRandom = Math.floor(Math.random()*emotions.length)
    return `Today it is ${days[daysRandom]}, I am ${emotions[emotionsRandom]} and it is ${weather[weatherRandom]} outside.`;
}
//The below code calls the 'createMessage' function and logs what it returns
console.log(createMessage());
