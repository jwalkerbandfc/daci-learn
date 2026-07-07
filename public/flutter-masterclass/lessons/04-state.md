# 🔄 Stateful Widgets

So far every screen has been frozen in time. `StatefulWidget` is how Flutter UI *reacts*: the widget itself stays immutable, but it creates a long-lived **State** object that can hold mutable data and trigger rebuilds.

## The Two-Class Pattern

```dart
class OrderBasket extends StatefulWidget {
  const OrderBasket({super.key});

  @override
  State<OrderBasket> createState() => _OrderBasketState();
}

class _OrderBasketState extends State<OrderBasket> {
  int count = 0;

  void increment() {
    setState(() {
      count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Text('$count');
  }
}
```

Two rules make this work:

1. Mutable data lives in the **State** class, not the widget.
2. Every change goes through `setState()` — that's what tells Flutter to call `build()` again.

## setState() Rules

- Keep the callback **small and synchronous** — do the work, assign the result, done.
- Changing a variable *without* `setState()` updates the value but **never redraws the screen**. This is the classic "my button does nothing" bug.
- Guard your invariants inside the handler: `if (count > 0) count--;`

> 💡 **Pro Tip:** The underscore prefix (`_OrderBasketState`) makes the class library-private in Dart. State classes are conventionally private because nothing outside the file should touch them.

## Lifecycle in Brief

State objects have hooks you'll use later:

- `initState()` — runs once when the State is created (start animations, kick off data loads)
- `dispose()` — runs when it's removed (cancel timers, close controllers)

> ⚠️ **Important:** `setState()` after `dispose()` throws. If a Future completes after the user has left the screen, check `mounted` before calling `setState()`.
