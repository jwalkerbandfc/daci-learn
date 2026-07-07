// Lesson 2 — Widgets & UI
// Campus Coffee, step 2: composing widgets into a menu item.
//
// CHALLENGE: Upgrade MenuItem into a proper Card — bold name,
// description, green price, and an "Add" button in a Row.

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
        appBar: AppBar(title: const Text('Campus Coffee — Menu')),
        body: const Center(
          child: MenuItem(
            name: 'Flat White',
            description: 'Double shot, velvety steamed milk',
            price: 2.80,
          ),
        ),
      ),
    );
  }
}

// A reusable widget with constructor parameters.
// Right now it's deliberately plain — the challenge is to
// turn it into a polished Card.
class MenuItem extends StatelessWidget {
  final String name;
  final String description;
  final double price;

  const MenuItem({
    super.key,
    required this.name,
    required this.description,
    required this.price,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(name),
        Text(description),
        Text('£${price.toStringAsFixed(2)}'),
      ],
    );
  }
}
