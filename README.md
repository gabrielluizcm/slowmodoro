# Slowmodoro - a reverse Pomodoro web app

## About
**Slowmodoro** is a reverse implementation on the famous [Pomodoro Method](https://www.techtarget.com/whatis/definition/pomodoro-technique): instead of focusing for 25 minutes and relaxing for 5, you'll be chilling for 25 and working for 5. Can't focus for long? No problem, **take it slow** with Slowmodoro!

Everyone makes a pomodoro app when learning React, so I thought it would be interesting to make the opposite version, just to bring some extra fun to the project. Eventually I discovered an already existing reverse pomodoro app: [Doropomo](https://doropomo.app/) ~~a much better name, I know~~, and that this method actually works for some people, giving small motivation needed to escape from inertia or depression, or anything that makes it so hard to start the thing we want to do. You can read more about it [here](https://www.tiimoapp.com/blog/reverse-pomodoro-technique/) if you'd like.
## Usage
<img style="float: left; height: 300px; margin-right: 10px; border-radius: 15px" src="public/demo.gif" />

The app has a mobile-first interface, and boots up at the **"Idle"** status, letting you choose to start with either a 25-minute **chill** or a 5-minute **work**. After that, you'll notice the colors changing to match the selected option, and the active button becoming a **pause** one, in case you need to stop the timer, while the other button will turn into a **skip** button, if you're not feeling like completing that timer fully on that cycle. After four **chill** sessions, you'll be presented with a **long work** timer, counting down from 15 minutes instead of 5. That's about the basic functionality.

Below the buttons you will find the **counters**: **total chill time**, **total work time**, and **how many reverse pomodoros _(chill time)_** you've done currently **(skipped chills also count towards this counter)**.

## Updates

There are some features I want to develop but aren't still present in the current version, but will be added on the following weeks. Planned updates include, but are not limited to:
- Addition of sound effects
- Customizable timers
- PT-BR translation

### Changelog
-  v1.1:
    - Defined **_Slowmodoro_** as app name;
    - Resized logo and main box;
    - Tab title updates to match current status and timer;
    - Added demo *.gif* to **Usage** section on README;

# Nerd stuff


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the typescript template. Build and publishing made to [Vercel](https://vercel.com), and current release can be found [at this link](https://slowmodoro.vercel.app/).

## React README starts here vv

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
