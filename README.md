This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Install 
```bash
# using npm
npm i

## Step 2: Start the Metro Server
```bash
# using npm
npm start

## Step 3: Start your Application
### For Android

```bash
# using npm
npm run android

### For iOS

```bash
# using npm
npm run ios

## Testing Deep Link:
```bash
# using npm
adb shell am start -W -a android.intent.action.VIEW -d "myapp://home"

### For iOS

```bash
# using npm
xcrun simctl openurl booted "myapp://home"

## Testing Deep Links with Params
```bash
# using npm
xcrun simctl openurl booted "myapp://details/1"
