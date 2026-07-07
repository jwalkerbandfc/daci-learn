// Lesson 4 — Stateful Widgets
// Campus Coffee, step 4: a basket that reacts to the user.
//
// CHALLENGE: The basket count never changes. Convert OrderBasket
// to a StatefulWidget and wire the buttons up with setState().
// The count must never go below zero.

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
        appBar: AppBar(title: const Text('Campus Coffee — Basket')),
        body: const Center(child: OrderBasket()),
      ),
    );
  }
}

// This is a StatelessWidget, so `count` can never change.
// Your job: make it stateful.
class OrderBasket extends StatelessWidget {
  const OrderBasket({super.key});

  @override
  Widget build(BuildContext context) {
    const count = 0;

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Text('Flat Whites in basket', style: TextStyle(fontSize: 18)),
        const SizedBox(height: 16),
        const Text(
          '$count',
          style: TextStyle(fontSize: 56, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 32),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                // TODO: decrement (never below 0)
              },
              child: const Text('− Remove'),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: () {
                // TODO: increment
              },
              child: const Text('+ Add'),
            ),
          ],
        ),
      ],
    );
  }
}
