# 🐛 Debugging & Logging

The final skill: finding out *why* it doesn't work. The example in DartPad is a broken till with three deliberate bugs — your challenge is to fix them using the techniques below.

## debugPrint

`debugPrint` is `print` with rate-limiting so long output isn't dropped on Android. Sprinkle it around suspect code and read the console:

```dart
void _addToTotal(double price) {
  setState(() => _total += price);
  debugPrint('Added £$price — running total is now £$_total');
}
```

If the log says the total went *down* when you added an item, you've found bug number one.

## Asserts

`assert` statements document and enforce your assumptions. They run **only in debug mode** and are compiled out of release builds — free safety checks:

```dart
assert(vatRate > 0 && vatRate < 1, 'vatRate must be a fraction, e.g. 0.2');
```

When an assert fires, read the message. It usually tells you exactly what invariant was violated.

## Reading Flutter Errors

Flutter's red-screen and console errors are long but front-loaded: the first few lines name the problem, then the "relevant error-causing widget" line tells you where. Common ones:

- **RenderFlex overflowed** — layout too big; look for a missing `Expanded`
- **setState() called after dispose()** — async result landed on a dead screen
- **Null check operator used on a null value** — a `!` on something that was null

## Disabled Buttons

A Material button with `onPressed: null` renders greyed-out and inert — by design, that's how you disable buttons. If a button "does nothing", check what its callback actually is.

> 💡 **Pro Tip:** In a local project, Flutter DevTools gives you a widget inspector, performance timeline, and network tab. Launch it from VS Code / Android Studio or with `dart devtools`.

> ⚠️ **Important:** Remove or demote noisy `debugPrint` calls before shipping. For structured production logging, use the `logging` package with levels instead of raw prints.
