# redux-sendbird-example
A small chatting application implemented using React Native and Redux. It uses the SendBird API to handle messaging. Still needs a fair amount of (work) debugging and styling improvement, but some of the basic functionality is covered.

<img src="/screenshots/login.png" alt="alt text" width="200px" height="whatever">
<img src="/screenshots/channels.png" alt="alt text" width="200px" height="whatever">
<img src="/screenshots/chat.png" alt="alt text" width="200px" height="whatever">

## Running the application locally:
In order to run this application is necessary to have React Native installed. Follow the [instructions](https://facebook.github.io/react-native/docs/getting-started.html#content) for installing it before trying to run this app.

* Clone this repository: `git clone https://github.com/nsuarezcanton/redux-sendbird-example.git`
* From the repository's parent directory, run`cd redux-sendbird-example`.
* To run the app in an iOS simulator, run `react-native run-ios`


## Issues

Besides needing additinal functionality, these are the issues:

* Keyboard covers *TextInput* are in Chat screen. This view needs to adapt to the keyboard.
* *ScrollView* on Chat page does not automatically scroll to the bottom of the page.
* Current Navigation component does not support Redux pattern, which causes the Chat screen to be renderd twice (after Back press). Navigation will be remimplemented using [react-native-router-flux](https://github.com/aksonov/react-native-router-flux).
