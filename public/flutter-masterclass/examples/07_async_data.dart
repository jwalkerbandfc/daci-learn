// Lesson 7 — Async & Data
// Campus Coffee, step 7: menus don't appear by magic.
//
// CHALLENGE: Load the menu through a Future that takes 2 seconds,
// show a CircularProgressIndicator while it loads, and render the
// list with FutureBuilder when the data arrives.

import 'package:flutter/material.dart';

void main() {
  runApp(const CampusCoffeeApp());
}

// TODO: make this async — pretend it's a network call:
//   await Future.delayed(const Duration(seconds: 2));
List<String> fetchMenu() {
  return [
    'Flat White',
    'Cappuccino',
    'Espresso',
    'Hot Chocolate',
    'Iced Latte',
  ];
}

class CampusCoffeeApp extends StatelessWidget {
  const CampusCoffeeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Campus Coffee',
      debugShowCheckedModeBanner: false,
      home: const MenuScreen(),
    );
  }
}

class MenuScreen extends StatelessWidget {
  const MenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: replace this synchronous call with a FutureBuilder:
    //
    // FutureBuilder<List<String>>(
    //   future: fetchMenu(),
    //   builder: (context, snapshot) {
    //     if (snapshot.connectionState == ConnectionState.waiting) {
    //       return const Center(child: CircularProgressIndicator());
    //     }
    //     if (snapshot.hasError) { ... }
    //     final menu = snapshot.data!;
    //     return ListView...
    //   },
    // )
    final menu = fetchMenu();

    return Scaffold(
      appBar: AppBar(title: const Text('Campus Coffee — Menu')),
      body: ListView.builder(
        itemCount: menu.length,
        itemBuilder: (context, index) => ListTile(
          leading: const Icon(Icons.coffee),
          title: Text(menu[index]),
        ),
      ),
    );
  }
}
