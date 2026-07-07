# 📐 Layouts & Lists

Real apps show *collections* of things. Flutter gives you lazy, scrollable builders that only construct the items currently on screen — essential for performance with long lists.

## ListView.builder

The workhorse. It builds items on demand from an `itemBuilder` callback:

```dart
ListView.builder(
  itemCount: drinks.length,
  itemBuilder: (context, index) {
    return ListTile(
      leading: const Icon(Icons.coffee),
      title: Text(drinks[index]['name'] as String),
    );
  },
)
```

`ListTile` is a pre-built Material row with slots for `leading`, `title`, `subtitle`, and `trailing` — you get correct spacing and tap ripples for free.

## GridView.builder

Same idea, two dimensions. The `gridDelegate` controls the geometry:

```dart
GridView.builder(
  padding: const EdgeInsets.all(8),
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    crossAxisSpacing: 8,
    mainAxisSpacing: 8,
  ),
  itemCount: drinks.length,
  itemBuilder: (context, index) => Card(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(drinks[index]['icon'] as IconData, size: 48),
        const SizedBox(height: 8),
        Text(drinks[index]['name'] as String),
      ],
    ),
  ),
)
```

## Other Layout Essentials

- **Expanded / Flexible** — divide leftover space inside a Row or Column
- **Stack** — overlay widgets (e.g. a badge on a product image)
- **Wrap** — Row that flows onto new lines when it runs out of space
- **SingleChildScrollView** — make any single column scrollable

> 💡 **Pro Tip:** If you ever see the yellow-and-black "overflow" stripes, a Row or Column has children bigger than the space available. Wrapping the oversized child in `Expanded` fixes it nine times out of ten.

> ⚠️ **Important:** Never put a `ListView` directly inside a `Column` without constraining its height (e.g. with `Expanded`) — an unbounded-height error is one of Flutter's most common beginner crashes.
