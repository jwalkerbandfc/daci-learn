# 🧭 Navigation

Flutter manages screens as a **stack of routes**. `Navigator.push` puts a new screen on top; the back button (or `Navigator.pop`) removes it. Master this and multi-screen apps stop being scary.

## Push and Pop

```dart
// Go to a new screen
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const DetailScreen()),
);

// Come back
Navigator.pop(context);
```

`MaterialPageRoute` gives you the platform-appropriate transition (slide on iOS, fade-up on Android) and automatically wires the AppBar's back arrow.

## Passing Data Forward

The idiomatic way to send data to the next screen is **through its constructor**:

```dart
onTap: () {
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (context) => DetailScreen(drink: drinks[index]),
    ),
  );
}
```

```dart
class DetailScreen extends StatelessWidget {
  final Drink drink;
  const DetailScreen({super.key, required this.drink});
  // ...
}
```

## Getting Data Back

`push` returns a `Future` that completes when the pushed screen pops. The popped screen can send a result:

```dart
// On the detail screen
Navigator.pop(context, 'added-to-basket');

// On the menu screen
final result = await Navigator.push<String>(context, route);
```

> 💡 **Pro Tip:** Notice the example defines a proper `Drink` class instead of a `Map`. Typed models catch mistakes at compile time — `drink.pricee` won't compile, but `drink['pricee']` fails silently at runtime.

> ⚠️ **Important:** For larger apps you'll graduate to **named routes** or the `go_router` package for deep linking and web URLs — but the push/pop mental model underneath stays exactly the same.
