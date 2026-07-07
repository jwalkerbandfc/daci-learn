// Lesson 1 — Getting Started
// Campus Coffee, step 1: the smallest possible Flutter app.
//
// CHALLENGE: Replace the body with a GreetingCard widget showing
// a title, a description, and a "Get Started" button.

import 'package:flutter/material.dart';

void main() {
  runApp(const CampusCoffeeApp());
}

class CampusCoffeeApp extends StatelessWidget {
  const CampusCoffeeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Campus Coffee',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: const Text('Campus Coffee')),
        body: const Center(
          child: Text(
            'Hello, Flutter! ☕',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}
