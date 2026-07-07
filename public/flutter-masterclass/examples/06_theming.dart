// Lesson 6 — Theme & Styling
// Campus Coffee, step 6: one theme to rule every widget.
//
// CHALLENGE: Brand the app. Use ColorScheme.fromSeed with a
// coffee-brown seed, add a darkTheme, and make the moon/sun
// IconButton actually toggle ThemeMode.

import 'package:flutter/material.dart';

void main() {
  runApp(const CampusCoffeeApp());
}

class CampusCoffeeApp extends StatefulWidget {
  const CampusCoffeeApp({super.key});

  @override
  State<CampusCoffeeApp> createState() => _CampusCoffeeAppState();
}

class _CampusCoffeeAppState extends State<CampusCoffeeApp> {
  // TODO: hold a ThemeMode here and flip it from the AppBar button.
  final ThemeMode _mode = ThemeMode.light;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Campus Coffee',
      debugShowCheckedModeBanner: false,
      // TODO: theme: ThemeData(colorScheme: ColorScheme.fromSeed(...))
      // TODO: darkTheme: ThemeData(colorScheme: ColorScheme.fromSeed(..., brightness: Brightness.dark))
      themeMode: _mode,
      home: MenuScreen(
        onToggleTheme: () {
          // TODO: setState and swap _mode between light and dark
        },
      ),
    );
  }
}

class MenuScreen extends StatelessWidget {
  final VoidCallback onToggleTheme;

  const MenuScreen({super.key, required this.onToggleTheme});

  @override
  Widget build(BuildContext context) {
    // Pull colours from the theme rather than hard-coding them —
    // that's what makes the toggle work everywhere at once.
    final scheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Campus Coffee'),
        actions: [
          IconButton(
            icon: const Icon(Icons.dark_mode),
            onPressed: onToggleTheme,
          ),
        ],
      ),
      body: Center(
        child: Card(
          margin: const EdgeInsets.all(24),
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.coffee, size: 64, color: scheme.primary),
                const SizedBox(height: 16),
                Text(
                  'Flat White',
                  style: Theme.of(context).textTheme.headlineSmall,
                ),
                const SizedBox(height: 8),
                Text(
                  '£2.80',
                  style: TextStyle(fontSize: 18, color: scheme.secondary),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
