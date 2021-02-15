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
    return `Today it is ${days[random(days.length)]}, I am ${emotions[random(emotions.length)]} and it is ${weather[random(weather.length)]} outside.`;
}

//This function will return a random integer between 0 & including max
random = max =>{
    return Math.floor(Math.round()*(max+1));
}

