// Lesson 8 — Debugging & Logging
// Campus Coffee, step 8: the till is broken. Fix it.
//
// THREE DELIBERATE BUGS:
//   1. The running total goes the wrong way.
//   2. One of the buttons does nothing.
//   3. An assert fails as soon as the app starts (check the console).
//
// Use debugPrint output and the error messages to track them down.

import 'package:flutter/material.dart';

// BUG 3 lives here: VAT in the UK is 20%, and the assert below
// insists the rate stays between 0 and 1.
const double vatRate = 12.0;

void main() {
  assert(vatRate > 0 && vatRate < 1, 'vatRate must be a fraction, e.g. 0.2');
  runApp(const CampusCoffeeApp());
}

class CampusCoffeeApp extends StatelessWidget {
  const CampusCoffeeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Campus Coffee',
      debugShowCheckedModeBanner: false,
      home: const TillScreen(),
    );
  }
}

class TillScreen extends StatefulWidget {
  const TillScreen({super.key});

  @override
  State<TillScreen> createState() => _TillScreenState();
}

class _TillScreenState extends State<TillScreen> {
  double _total = 0;

  void _addToTotal(double price) {
    setState(() {
      // BUG 1: this should ADD to the total.
      _total -= price;
    });
    debugPrint('Added £$price — running total is now £$_total');
  }

  void _clearTotal() {
    setState(() => _total = 0);
    debugPrint('Till cleared');
  }

  @override
  Widget build(BuildContext context) {
    final withVat = _total * (1 + vatRate);

    return Scaffold(
      appBar: AppBar(title: const Text('Campus Coffee — Till')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('Order total (inc. VAT)', style: TextStyle(fontSize: 18)),
            const SizedBox(height: 12),
            Text(
              '£${withVat.toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 44, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () => _addToTotal(2.80),
              child: const Text('Add Flat White — £2.80'),
            ),
            const SizedBox(height: 12),
            ElevatedButton(
              // BUG 2: a null onPressed disables the button entirely.
              onPressed: null,
              child: const Text('Add Espresso — £1.90'),
            ),
            const SizedBox(height: 12),
            TextButton(
              onPressed: _clearTotal,
              child: const Text('Clear till'),
            ),
          ],
        ),
      ),
    );
  }
}
