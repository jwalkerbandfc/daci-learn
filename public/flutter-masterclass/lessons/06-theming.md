# 🎨 Theme & Styling

Hard-coding colours widget by widget doesn't scale. Flutter's answer is `ThemeData`: define the brand once at the top of the app, and every Material widget picks it up automatically.

## ColorScheme.fromSeed

Since Material 3, you generate an entire accessible palette from a single seed colour:

```dart
MaterialApp(
  theme: ThemeData(
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.brown),
  ),
  darkTheme: ThemeData(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.brown,
      brightness: Brightness.dark,
    ),
  ),
  themeMode: ThemeMode.light, // or .dark, or .system
)
```

## Reading the Theme

Inside any `build` method, pull values from the theme instead of hard-coding:

```dart
final scheme = Theme.of(context).colorScheme;

Icon(Icons.coffee, color: scheme.primary);
Text('Flat White', style: Theme.of(context).textTheme.headlineSmall);
```

This is what makes a light/dark toggle work: widgets that *read* the theme restyle themselves instantly when the theme changes.

## Toggling ThemeMode

Hold the mode in state at the top of the app and flip it:

```dart
ThemeMode _mode = ThemeMode.light;

void _toggle() {
  setState(() {
    _mode = _mode == ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
  });
}
```

> 💡 **Pro Tip:** `ThemeMode.system` follows the device's setting automatically — usually the right default, with a manual override in your settings screen.

> ⚠️ **Important:** If a widget looks wrong after a theme change, search it for hard-coded `Colors.xxx` values. Any colour not derived from `Theme.of(context)` is invisible to your theme.
