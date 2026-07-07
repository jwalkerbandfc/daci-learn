# 🧩 Widgets & UI

Widgets are the building blocks of Flutter apps: immutable objects that describe part of the user interface. This lesson covers the two families you'll use constantly — stateless and stateful — and how to make widgets **reusable** with constructor parameters.

## Stateless Widgets

Use `StatelessWidget` for UI that depends only on its inputs:

```dart
class MenuItem extends StatelessWidget {
  final String name;
  final double price;

  const MenuItem({super.key, required this.name, required this.price});

  @override
  Widget build(BuildContext context) {
    return Text('$name — £${price.toStringAsFixed(2)}');
  }
}
```

The `final` fields + `required this.x` constructor pattern is how data flows *down* the widget tree. The example in DartPad uses exactly this: one `MenuItem` widget, configured entirely by its constructor.

## Composition Toolkit

You build complex UI by nesting simple widgets:

- **Card** — elevated Material surface with rounded corners
- **Padding** — space *inside* a widget's bounds
- **Column / Row** — vertical / horizontal arrangement
- **SizedBox** — fixed gaps between children
- **Text** with a `TextStyle` — typography control

```dart
Card(
  child: Padding(
    padding: const EdgeInsets.all(16),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(name, style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        Text(description),
      ],
    ),
  ),
)
```

> 💡 **Pro Tip:** `mainAxisAlignment` controls spacing along a Column/Row's main direction; `crossAxisAlignment` controls the perpendicular one. `MainAxisAlignment.spaceBetween` is perfect for a price on the left and a button on the right.

## Stateful Widgets (Preview)

When a widget needs to *change* in response to the user, you'll reach for `StatefulWidget` — that's the whole of Lesson 4. For now, everything stays stateless.

> ⚠️ **Important:** Keep widgets small and focused. If your `build` method is 100 lines long, extract pieces into their own widget classes — it improves both readability and rebuild performance.
