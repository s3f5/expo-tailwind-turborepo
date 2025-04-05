# Expo + Tailwind + React Native Reusables + Turborepo

## What's This?

Need a jumpstart for your Expo projects? This is a pre-built setup with all the common tools you'll likely need.

It uses [Turborepo](https://turborepo.org) to manage multiple parts of your app and includes:

```text
apps
  ├─ expo
  |   ├─ Expo SDK 52
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using NativeWind
  |   └─ I18n using react-i18nex
packages
  ├─ rn-ui
  |   └─ Start of a UI package for the Expo app using React Native Reusables
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```


> This project uses `@acme` as an example for package names.  You should replace this with your own organization or project name (e.g., `@my-app`).  You can use a find-and-replace tool to change all instances of `@acme`.

## Get Started

Here's how to get this project up and running:

### 1. Install Dependencies

```bash
# Get everything installed
pnpm i
```

### 2. Configure Expo

You need to tell Expo how you want to run your app (either on an iOS simulator or an Android emulator).

#### iOS Simulator (on a Mac)

1.  Make sure you have Xcode and the Xcode Command Line Tools installed.  [Follow these instructions from the Expo docs.](https://docs.expo.dev/workflow/ios-simulator)
2.  You may need to launch the simulator manually first. Run `npx expo start` from `apps/expo`, and then enter `I` to launch Expo Go. After the manual launch, you can run `pnpm dev` in the root directory.

3.  Update the `dev` script in `apps/expo/package.json` like this:

   ```diff
   +  "dev": "expo start --ios",
   ```

4.  Run the app:

   ```bash
   pnpm dev
   ```

#### Android Emulator

1.  Install the Android Studio tools. [Follow these instructions from the Expo docs.](https://docs.expo.dev/workflow/android-studio-emulator)

2.  Update the `dev` script in `apps/expo/package.json` to:

   ```diff
   +  "dev": "expo start --android",
   ```

3.  Run the app:

   ```bash
   pnpm dev
   ```

### 3. Adding New Packages

When you need to create a new package (like a new library of components), use this command:

```bash
pnpm turbo gen init
```

The tool will ask you for a name and if you want to add any initial dependencies. It will also set up the basic files and configurations for you (like `package.json`, `tsconfig.json`, etc.) and ensure your formatting, linting, and type checking are all ready to go.  Then you can start building your package!


### 4. Adding New UI Components

To quickly add a new UI component, use the interactive `react-native-reusables/cli` command-line tool:

```bash
pnpm ui-add
```


## References

- [Turborepo](https://turbo.build/repo/docs)
- [T3-OSS](https://github.com/t3-oss/create-t3-turbo)
