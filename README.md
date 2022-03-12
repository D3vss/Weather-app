# Weather App: A simple web app that displays weather

## Description: 
The project is very simple. I decided to work on it when I was learning about APIs and how they work, and async JS. I have learned a lot about calling APIs and manipulating RAW data.
Working on similar projects is very helpful to understand these fundamental concepts.


## How to use:
The UI is very intuitive, you simply enter the name of the city and the result is displayed. If the name of the city is wrong, a warning message is displayed. 


## How does it work: 
The API I'm calling is from **[OpenWeather](https://openweathermap.org/)** (I recommend it if you are a beginner with APIs). I created a function with plain JS that calls the API and gets the JSON data file. Then I manipulated the data according to my needs (because they provide a lot of information).

## Main Functions:
#### getJSONFile() : 
This function is intended to get the data from the API and transform it to a JSON file that I can later exploit. Kind of like the ```getJSON()``` in jQuery.

```javascript
function getJSONFile(url) 
```

The function's argument is the endpoint we're trying to get the data from. The endpoint is customised according to the search (we add the city name). 

#### displayWeather ():
And then comes the function that manipulates data coming from ```getJSONFile()``` then displays it. I could have done a better job tbh.

```javascript
async function displayWeather()

```
