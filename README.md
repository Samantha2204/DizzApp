# DizzApp

---

## Table of Contents
- [Installation](## Installation)
- [Running](## Running)
- [Structure](## Structure)
- [Android Release](## Android Release)
- [iOS Release](## iOS Release)

## Installation
1. Clone this repository
2. If you haven't already installed the dependencies for React Native, follow the instructions at https://facebook.github.io/react-native/docs/getting-started for React Native CLI Quickstart targeting both Android and iOS.
3. Within the dizzapp directory run the command lines below in the terminal. If you don't have `node_modules` and `package-lock.json` ignore the first 2 lines.
    - `rm -rf node_modules`
    - `rm -rf package-lock.json`
    - `npm install`
4. Then, cd into the ios directory and run the command lines below in the terminal.
    - `cd ios && rm -rf Podfile.lock && pod install`

## Running
1. In dizzapp directory.
2. For iOS: run `npx react-native run-ios` in the terminal.
3. For Android: run `npx react-native run-android` in the terminal.

## Structure
### Navigating the `src/` directory

`App.tsx`

- Root index file, create stack for navigation.

`audio`

- Directory that stores all the audio clips for timer, Dix-Hallpike Test (DHT), Epley Manoeuvre (EM) and Lempert Manoeuvre (LM).

`audio.ts`

- Handles what the speaker does after the speaker button is pressed.

`components`

- Directory that includes all the components that can be reused.

`images`

- The buttons' image for the homepage.

`screenDetails.tsx`

- Array that includes the instructions, screenType, video's path as well as the audioclip's path for all DHT, EM and LM.

`screens`

- UI components relating to a distinct screen within the application. 

`ScreenType.tsx`

- Used to determine which screen to navigate to.

`video`

- Directory that stores all the videos for Dix-Hallpike Test (DHT), Epley Manoeuvre (EM) and Lempert Manoeuvre (LM).

## Android Release
1. Run
    - `cd android && ./gradlew assembleRelease`
2. The apk file will be in `dizzapp/android/app/build/outputs/apk/release`
3. Send the apk file to the targeted device for downloading.

## iOS Release
1. Ask Stephen, he will be helping you to release the app on TestFlight.
2. After the app is released, download TestFlight and paste the code/link into the app. (ask Stephen for the link if he didn't send you)
