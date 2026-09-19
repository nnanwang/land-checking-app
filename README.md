# LandingCheck — Student Guide

In this lesson, we will turn the Expo starter screen into a simple homepage for **LandingCheck**, a basketball landing analysis app.

This is a UI-only lesson. We are **not** adding a camera, MediaPipe, pose detection, or native iOS code yet. Those features will be introduced in a later class.

## Learning goals

By the end of this lesson, you will be able to:

- Open an existing Expo project in VS Code
- Start an Expo development server
- Preview the app on a phone with Expo Go
- Give a clear prompt to a coding agent
- Review the files changed by the agent
- Test the new screen and save it to GitHub

## Current project state

The project currently contains:

- Expo SDK 57
- React Native
- Expo Router
- The original Expo starter screen
- No camera or MediaPipe implementation

For this lesson, you do not need to configure Xcode, Developer Mode, code signing, or a development build.

## 1. Install the required tools

Make sure the following applications are installed:

- [Node.js LTS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Expo Go](https://expo.dev/go) on your phone

The phone and computer should be connected to the same Wi-Fi network.

## 2. How this Expo project was created

The instructor created the starter project with:

```bash
npx create-expo-app@latest landchecking57
```

The **SDK 57** option was selected during setup.

If you already downloaded or cloned the class repository, do not run this command again. Do not create another Expo project inside the current project folder.

## 3. Open the existing project

Open the `landchecking57` folder in VS Code.

In the VS Code terminal, confirm that you are inside the correct folder:

```bash
pwd
```

The path should end with:

```text
PRE_n/landchecking57
```

## 4. Install the project dependencies

Run:

```bash
npm install
```

This reads `package.json` and installs the packages already selected for the project. Do not install additional packages for this activity.

Optional project check:

```bash
npx expo-doctor
```

## 5. Open the starter app in Expo Go

Start the project in Expo Go mode:

```bash
npx expo start --go
```

Then:

1. Wait for the QR code to appear in the terminal.
2. Unlock your phone.
3. On iPhone, scan the QR code with the Camera app.
4. Open the link in Expo Go.
5. Confirm that the original Expo welcome screen appears.

If the terminal says it is using a development build, press `s` to switch to Expo Go.

## 6. Live vibe-coding activity

Open the coding agent in VS Code and give it this prompt exactly:

```text
Create a simple LandingCheck screen with a title, one short description of basketball landing analysis, and a Start Analysis button.

Use a clean sports style. Keep the existing Expo Router structure.

Do not create a new project, install packages, or add camera or MediaPipe code.

After editing, list the files you changed and explain each change.
```

Let the agent inspect the current project and make the changes. Do not paste generated code into a different project.

## 7. Review the agent's work

Before accepting the result, check the agent's summary.

For this activity, the main file should normally be:

```text
src/app/index.tsx
```

The agent may create a small UI component or style file, but it should not:

- Change `package.json`
- Change `app.json`
- Install new packages
- Create another Expo project
- Add camera permissions
- Add MediaPipe or pose detection
- Generate an `ios` or `android` folder

If the agent attempts one of these actions, stop it and repeat the prompt with the restrictions included.

## 8. Expected homepage

The finished screen should contain:

- The app name: **LandingCheck**
- One short sentence explaining basketball landing analysis
- A visible **Start Analysis** button
- A clean, readable sports-inspired design

The button does not need to open the camera yet. It may be a visual button only or display a simple message when pressed.

## 9. Test on the phone

After the agent finishes:

1. Save all changed files in VS Code.
2. Keep the Expo server running.
3. Return to Expo Go on the phone.
4. Wait for Fast Refresh to update the screen.
5. Check the title, description, spacing, colors, and button.
6. Rotate or resize only if instructed; the main target is portrait phone layout.

If the app does not refresh, press `r` in the terminal.

## 10. Improve the result with follow-up prompts

Make one small change at a time. Example follow-up prompts:

```text
Make the Start Analysis button larger and easier to tap. Do not install packages.
```

```text
Improve the spacing and visual hierarchy while keeping the same content.
```

```text
Use a dark basketball training style with one bright accent color. Keep the text easy to read.
```

After each change, review the files and test the screen again on the phone.

## 11. Save the milestone to GitHub

Check the changed files:

```bash
git status
```

Save the homepage milestone:

```bash
git add .
git commit -m "Build LandingCheck homepage"
git push
```

Never commit passwords, tokens, certificates, or private `.env` values.

## Troubleshooting

### Expo Go cannot find the project

- Confirm that the phone and Mac are on the same Wi-Fi network.
- Turn off VPN temporarily.
- Restart with a clean cache:

```bash
npx expo start --go --clear
```

### The terminal opens a development build instead of Expo Go

Press `s` in the Expo terminal, or stop the server and run:

```bash
npx expo start --go
```

### `Config file contains no configuration data`

Stop the server with `Control + C`, confirm that there is no empty `babel.config.js` file, and restart:

```bash
npx expo start --go --clear
```

### The app still shows an older screen

1. Save the file in VS Code.
2. Press `r` in the Expo terminal.
3. Fully close and reopen Expo Go if necessary.

### The coding agent changed too much

Use `git status` to inspect the changes. Ask the agent to revert unrelated files and modify only the homepage UI. Do not run package-installation or native-build commands for this activity.

## Quick command reference

| Goal | Command |
| --- | --- |
| Install existing dependencies | `npm install` |
| Check the project | `npx expo-doctor` |
| Start with Expo Go | `npx expo start --go` |
| Start with a clean cache | `npx expo start --go --clear` |
| Reload the app | Press `r` in the Expo terminal |
| See changed files | `git status` |

## Next class

In a later lesson, we will discuss native development builds, Xcode, camera access, and MediaPipe pose detection. Do not add those features during this homepage activity.
