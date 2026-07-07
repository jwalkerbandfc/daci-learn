// Lesson 3 — Layouts & Lists
// Campus Coffee, step 3: the full menu as a scrollable list.
//
// CHALLENGE: Convert this ListView into a two-column
// GridView.builder of Cards (icon above name).

import 'package:flutter/material.dart';

void main() {
  runApp(const CampusCoffeeApp());
}

const drinks = [
  {'name': 'Flat White', 'icon': Icons.coffee, 'price': 2.80},
  {'name': 'Cappuccino', 'icon': Icons.coffee_maker, 'price': 2.60},
  {'name': 'Espresso', 'icon': Icons.local_cafe, 'price': 1.90},
  {'name': 'Hot Chocolate', 'icon': Icons.emoji_food_beverage, 'price': 2.40},
  {'name': 'Iced Latte', 'icon': Icons.ac_unit, 'price': 3.00},
  {'name': 'English Breakfast Tea', 'icon': Icons.emoji_food_beverage, 'price': 1.60},
];

class CampusCoffeeApp extends StatelessWidget {
  const CampusCoffeeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Campus Coffee',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: const Text('Campus Coffee — Menu')),
        body: const MenuList(),
      ),
    );
  }
}

class MenuList extends StatelessWidget {
  const MenuList({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: drinks.length,
      itemBuilder: (context, index) {
        final drink = drinks[index];
        return ListTile(
          leading: Icon(drink['icon'] as IconData),
          title: Text(drink['name'] as String),
          trailing: Text(
            '£${(drink['price'] as double).toStringAsFixed(2)}',
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
        );
      },
    );
  }
}
