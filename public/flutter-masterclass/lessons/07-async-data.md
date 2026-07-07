# 📡 Async & Data

Real data arrives *later* — from an API, a database, a file. Dart handles this with `Future` and `async`/`await`, and Flutter renders it with `FutureBuilder`.

## Futures and async/await

```dart
Future<List<String>> fetchMenu() async {
  // Pretend this is an HTTP call
  await Future.delayed(const Duration(seconds: 2));
  return ['Flat White', 'Cappuccino', 'Espresso'];
}
```

- A `Future<T>` is a value of type `T` that will exist *eventually*.
- `async` marks a function as asynchronous; `await` pauses it (without blocking the UI) until the Future completes.

## FutureBuilder

`FutureBuilder` bridges async data and the widget tree. Its `builder` runs for every state of the Future:

```dart
FutureBuilder<List<String>>(
  future: fetchMenu(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }
    if (snapshot.hasError) {
      return Center(child: Text('Error: ${snapshot.error}'));
    }
    final menu = snapshot.data!;
    return ListView.builder(
      itemCount: menu.length,
      itemBuilder: (context, i) => ListTile(title: Text(menu[i])),
    );
  },
)
```

Always handle all three branches: **waiting**, **error**, **data**.

> ⚠️ **Important:** Don't create the Future *inside* `build` in a StatefulWidget that rebuilds often — every rebuild would re-fetch. Store it in a field in `initState()` (`late Future<List<String>> _menu; ... _menu = fetchMenu();`) and pass that field to FutureBuilder.

## Where the Real Data Comes From

In production you'd swap the delay for the `http` package and `jsonDecode`:

```dart
final response = await http.get(Uri.parse('https://api.example.com/menu'));
final data = jsonDecode(response.body) as List<dynamic>;
```

> 💡 **Pro Tip:** For data that changes over time (live scores, chat), the streaming sibling `StreamBuilder` works exactly the same way, but rebuilds on every event instead of once.
