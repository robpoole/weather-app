# Getting Started

First of all you need to ensure you have the Laravel API up and running. Once you have cloned the repo navigate to the project folder and run `npm start`.

# Walkthrough of Project

## Setup stuff

As you will see in `index.js` I make use of react redux and create a store. I'll use this for storing API results and the selected city for the app. I include `index.css` which just includes the Tailwind stuff. In `store/index.js` we just bring in our thunk middleware and create our store. Finally, in `App.js` you'll see a very simple setup with just two components; the city selector and the forecast display component, which we can look at next...

## CityList component

So this is where it starts to get a bit more interesting. There's a few bits and pieces in here to help get the Tailwind dropdown to do it's thing - namely the `isOpen` state hook and all the transition jsx which was pulled from the Tailwind docs.

We grab our selected city and city list from our store, and use `useEffect` to run the initial fetch of the city list from the API. The `getCities()` function can be found in `actions/cities` where you'll see our API call. This will dispatch to `reducers/cities.js` which will populate the results into our store. You can see there is also an action to handle an error if we come across this, but this is just as an example and I don't really elaborate on this in the code.

When a user chooses a city from the dropdown we update the selected city, we grab the forecast for the selected city and we handle the toggling of the dropdown. The `setSelectedCity()` function follows a similar flow to `getCities()`; the function can be found in `actions/selectedCity.js` which passes onto `reducers/selectedCity.js` which updates the store. The `getForecast()` function passes our city of choice into `actions/forecast.js` which will use it to fire off the weather forecast API. This result is dispatched to `reducers/forecast.js` which again saves the forecast into our store.

You'll see around line 54 we map out our cities into select options once they're available.

## WeatherForecast component

Our weather forecast component pretty simply grabs the forecast from the store and shows a block for each of the next five days with the date, midday temperature and description. It also displays the city name at the top.