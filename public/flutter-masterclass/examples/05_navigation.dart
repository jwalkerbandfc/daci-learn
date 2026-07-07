// Lesson 5 — Navigation
// Campus Coffee, step 5: two screens and a route between them.
//
// CHALLENGE: Tapping a drink does nothing. Use Navigator.push
// with a MaterialPageRoute to open DetailScreen for the tapped
// drink, passing its data through the constructor.

import 'package:flutter/material.dart';

void main() {
  runApp(const CampusCoffeeApp());
}

class Drink {
  final String name;
  final double price;
  final String description;

  const Drink(this.name, this.price, this.description);
}

const drinks = [
  Drink('Flat White', 2.80, 'Double shot, velvety steamed milk.'),
  Drink('Cappuccino', 2.60, 'Espresso, steamed milk, thick foam.'),
  Drink('Espresso', 1.90, 'Short, strong, no nonsense.'),
  Drink('Iced Latte', 3.00, 'Espresso over ice with cold milk.'),
];

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
    return Scaffold(
      appBar: AppBar(title: const Text('Campus Coffee — Menu')),
      body: ListView.builder(
        itemCount: drinks.length,
        itemBuilder: (context, index) {
          final drink = drinks[index];
          return ListTile(
            leading: const Icon(Icons.coffee),
            title: Text(drink.name),
            subtitle: Text('£${drink.price.toStringAsFixed(2)}'),
            trailing: const Icon(Icons.arrow_forward),
            onTap: () {
              // TODO: Navigator.push to DetailScreen(drink: drink)
            },
          );
        },
      ),
    );
  }
}

// The destination screen — already built for you.
// You just need to navigate to it.
class DetailScreen extends StatelessWidget {
  final Drink drink;

  const DetailScreen({super.key, required this.drink});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(drink.name)),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              drink.name,
              style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(drink.description),
            const SizedBox(height: 16),
            Text(
              '£${drink.price.toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 20, color: Colors.green),
            ),
          ],
        ),
      ),
    );
  }
}
