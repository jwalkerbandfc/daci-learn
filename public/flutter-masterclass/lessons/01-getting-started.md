# 🚀 Getting Started with Flutter

Flutter is Google's open-source UI framework for building natively compiled applications for mobile, web, and desktop from a single Dart codebase. Over this course you'll build **Campus Coffee**, a college coffee-shop app, one lesson at a time — and every code file you see here is pulled live from GitHub and loaded straight into DartPad.

## Installation & Setup

For real projects you'll want the SDK installed locally. Download it from [flutter.dev](https://flutter.dev) and verify:

```bash
# Verify Flutter installation
flutter --version

# Create a new project
flutter create campus_coffee
cd campus_coffee

# Run the app
flutter run
```

For this course, though, you don't need to install anything — DartPad on the right compiles and runs Flutter in your browser.

## Anatomy of the Starter App

Look at the example loaded in DartPad. Every Flutter app has the same skeleton:

```dart
void main() {
  runApp(const CampusCoffeeApp());
}
```

- `main()` is the entry point of every Dart program.
- `runApp()` inflates a widget and attaches it to the screen.
- `MaterialApp` gives you Material Design, theming and navigation.
- `Scaffold` provides the page structure: app bar, body, floating buttons.

> 💡 **Pro Tip:** In a local project, hot reload (`r` in the terminal, or save in your IDE) applies code changes in under a second without losing app state. In DartPad, just press **Run** again.

## Widgets All the Way Down

Everything you see in Flutter is a widget — the app, the app bar, the text, even padding. Widgets are **immutable descriptions** of a piece of UI, composed into a tree. `CampusCoffeeApp` returns a `MaterialApp`, which contains a `Scaffold`, which contains an `AppBar` and a `Center`, which contains a `Text`. That composition pattern is the single most important idea in Flutter.

> ⚠️ **Important:** Use `const` constructors wherever possible (`const Text('...')`). Flutter can skip rebuilding const widgets entirely, which is free performance.
