const challenges = {
    // Getting Started
    0: {
        title: "Hello Flutter World",
        topic: "Getting Started",
        code: `import 'package:flutter/material.dart';

                void main() {
                  runApp(const MyApp());
                }

                class MyApp extends StatelessWidget {
                  const MyApp();

                  @override
                  Widget build(BuildContext context) {
                    return MaterialApp(
                      title: 'Flutter App',
                      home: Scaffold(
                        appBar: AppBar(title: const Text('My First App')),
                        body: const Center(
                          child: Text(
                            'Hello, Flutter!',
                            style: TextStyle(fontSize: 24),
                          ),
                        ),
                      ),
                    );
                  }
                }`,
        hint: "Create a basic MaterialApp with a Scaffold containing an AppBar and centered Text widget."
    },

    // Widgets & UI - Basic
    1: {
        title: "Product Card Widget",
        topic: "Widgets & UI",
        code: `import 'package:flutter/material.dart';

              void main() {
                runApp(const MyApp());
              }

              class MyApp extends StatelessWidget {
                const MyApp();

                @override
                Widget build(BuildContext context) {
                  return MaterialApp(
                    home: Scaffold(
                      appBar: AppBar(title: const Text('Product Card')),
                      body: const Center(child: ProductCard()),
                    ),
                  );
                }
              }

              class ProductCard extends StatelessWidget {
                const ProductCard();

                @override
                Widget build(BuildContext context) {
                  return Card(
                    margin: const EdgeInsets.all(16),
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Laptop',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 8),
                          const Text('High-performance computing device'),
                          const SizedBox(height: 12),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                '\$999',
                                style: TextStyle(fontSize: 18, color: Colors.green),
                              ),
                              ElevatedButton(
                                onPressed: () {},
                                child: const Text('Add to Cart'),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  );
                }
              }`,
        hint: "Create a Card with product details including name, description, price, and a button."
    },

    // Widgets & UI - Lists
    2: {
        title: "Product List View",
        topic: "Widgets & UI",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Products')),
        body: const ProductList(),
      ),
    );
  }
}

class ProductList extends StatelessWidget {
  const ProductList();

  @override
  Widget build(BuildContext context) {
    final products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];

    return ListView.builder(
      itemCount: products.length,
      itemBuilder: (context, index) {
        return ListTile(
          leading: const Icon(Icons.shopping_bag),
          title: Text(products[index]),
          subtitle: const Text('Click to view details'),
          trailing: const Icon(Icons.arrow_forward),
        );
      },
    );
  }
}`,
        hint: "Use ListView.builder to create a scrollable list of products with ListTile widgets."
    },

    // Widgets & UI - StatefulWidget
    3: {
        title: "Interactive Counter for Stock",
        topic: "Widgets & UI",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Stock Counter')),
        body: const Center(child: StockCounter()),
      ),
    );
  }
}

class StockCounter extends StatefulWidget {
  const StockCounter();

  @override
  State<StockCounter> createState() => _StockCounterState();
}

class _StockCounterState extends State<StockCounter> {
  int stockCount = 10;

  void incrementStock() {
    setState(() {
      stockCount++;
    });
  }

  void decrementStock() {
    setState(() {
      if (stockCount > 0) stockCount--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Text('Current Stock', style: TextStyle(fontSize: 18)),
        const SizedBox(height: 16),
        Text(
          stockCount.toString(),
          style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 32),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: decrementStock,
              child: const Text('- Remove'),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: incrementStock,
              child: const Text('+ Add'),
            ),
          ],
        ),
      ],
    );
  }
}`,
        hint: "Create a StatefulWidget to manage inventory stock count with increment/decrement buttons."
    },

    // Assets Management
    4: {
        title: "Product Grid with Icons",
        topic: "Assets Management",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Product Grid')),
        body: const ProductGrid(),
      ),
    );
  }
}

class ProductGrid extends StatelessWidget {
  const ProductGrid();

  @override
  Widget build(BuildContext context) {
    final products = [
      {'name': 'Laptop', 'icon': Icons.computer},
      {'name': 'Mouse', 'icon': Icons.touch_app},
      {'name': 'Keyboard', 'icon': Icons.keyboard},
      {'name': 'Monitor', 'icon': Icons.tv},
      {'name': 'Headphones', 'icon': Icons.headphones},
      {'name': 'USB Cable', 'icon': Icons.cable},
    ];

    return GridView.builder(
      padding: const EdgeInsets.all(8),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 8,
        mainAxisSpacing: 8,
      ),
      itemCount: products.length,
      itemBuilder: (context, index) {
        return Card(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(products[index]['icon'] as IconData, size: 48),
              const SizedBox(height: 8),
              Text(products[index]['name'] as String),
            ],
          ),
        );
      },
    );
  }
}`,
        hint: "Use GridView.builder with icon assets to display products in a grid layout."
    },

    // Navigation System
    5: {
        title: "Basic Navigation with Routes",
        topic: "Navigation System",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navigation App',
      routes: {
        '/': (context) => const HomePage(),
        '/details': (context) => const DetailsPage(),
      },
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pushNamed(context, '/details');
          },
          child: const Text('Go to Details'),
        ),
      ),
    );
  }
}

class DetailsPage extends StatelessWidget {
  const DetailsPage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Details'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: const Center(
        child: Text('Product Details Page'),
      ),
    );
  }
}`,
        hint: "Set up named routes to navigate between HomePage and DetailsPage using Navigator."
    },

    // Navigation System - Product Details
    6: {
        title: "Product Details Navigation",
        topic: "Navigation System",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const ProductListScreen(),
    );
  }
}

class ProductListScreen extends StatelessWidget {
  const ProductListScreen();

  @override
  Widget build(BuildContext context) {
    final products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor'];

    return Scaffold(
      appBar: AppBar(title: const Text('Inventory')),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(products[index]),
            trailing: const Icon(Icons.arrow_forward),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ProductDetailScreen(
                    productName: products[index],
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

class ProductDetailScreen extends StatelessWidget {
  final String productName;

  const ProductDetailScreen({required this.productName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(productName),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.shopping_bag, size: 80),
            const SizedBox(height: 16),
            Text(
              productName,
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            const Text('Price: \$99.99'),
            const SizedBox(height: 16),
            const Text('Stock: 15 units'),
          ],
        ),
      ),
    );
  }
}`,
        hint: "Pass data between screens using constructor parameters and Navigator.push()."
    },

    // Theme & Styling
    7: {
        title: "Custom Theme Application",
        topic: "Theme & Styling",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Themed App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF1976D2),
          elevation: 0,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFF1976D2),
            foregroundColor: Colors.white,
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          ),
        ),
        cardTheme: CardTheme(
          elevation: 4,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
      ),
      home: Scaffold(
        appBar: AppBar(title: const Text('Styled App')),
        body: Center(
          child: Card(
            margin: const EdgeInsets.all(16),
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    'Custom Theme',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {},
                    child: const Text('Styled Button'),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}`,
        hint: "Define a custom ThemeData with colors, typography, and component styles."
    },

    // Theme & Styling - Dark Mode
    8: {
        title: "Light and Dark Theme Toggle",
        topic: "Theme & Styling",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp();

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool isDarkMode = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Theme Toggle',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        brightness: Brightness.light,
        useMaterial3: true,
      ),
      darkTheme: ThemeData(
        primarySwatch: Colors.blue,
        brightness: Brightness.dark,
        useMaterial3: true,
      ),
      themeMode: isDarkMode ? ThemeMode.dark : ThemeMode.light,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Theme Toggle'),
          actions: [
            IconButton(
              icon: Icon(isDarkMode ? Icons.light_mode : Icons.dark_mode),
              onPressed: () {
                setState(() {
                  isDarkMode = !isDarkMode;
                });
              },
            ),
          ],
        ),
        body: Center(
          child: Card(
            margin: const EdgeInsets.all(16),
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    isDarkMode ? Icons.dark_mode : Icons.light_mode,
                    size: 64,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    isDarkMode ? 'Dark Mode' : 'Light Mode',
                    style: Theme.of(context).textTheme.headlineSmall,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Tap the icon in the AppBar to toggle',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}`,
        hint: "Use StateManagement in MaterialApp to toggle between light and dark themes."
    },

    // Data Persistence - Shared Preferences
    9: {
        title: "Save and Load User Preferences",
        topic: "Data Persistence",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Data Persistence')),
        body: const PreferenceScreen(),
      ),
    );
  }
}

class PreferenceScreen extends StatefulWidget {
  const PreferenceScreen();

  @override
  State<PreferenceScreen> createState() => _PreferenceScreenState();
}

class _PreferenceScreenState extends State<PreferenceScreen> {
  String savedName = 'No name saved';
  final TextEditingController nameController = TextEditingController();

  void saveData() {
    setState(() {
      savedName = nameController.text.isNotEmpty
          ? nameController.text
          : 'No name saved';
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Data saved!')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextField(
            controller: nameController,
            decoration: const InputDecoration(
              labelText: 'Enter your name',
              border: OutlineInputBorder(),
            ),
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: saveData,
            child: const Text('Save'),
          ),
          const SizedBox(height: 32),
          Text(
            'Saved Name: \$savedName',
            style: const TextStyle(fontSize: 18),
          ),
        ],
      ),
    );
  }
}`,
        hint: "Create a simple form to save and display persisted data (preparation for SharedPreferences)."
    },

    // Data Persistence - Local Database
    10: {
        title: "Inventory Item Storage",
        topic: "Data Persistence",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Inventory Manager')),
        body: const InventoryScreen(),
      ),
    );
  }
}

class InventoryItem {
  final String id;
  final String name;
  final int quantity;
  final double price;

  InventoryItem({
    required this.id,
    required this.name,
    required this.quantity,
    required this.price,
  });
}

class InventoryScreen extends StatefulWidget {
  const InventoryScreen();

  @override
  State<InventoryScreen> createState() => _InventoryScreenState();
}

class _InventoryScreenState extends State<InventoryScreen> {
  final List<InventoryItem> items = [
    InventoryItem(id: '1', name: 'Laptop', quantity: 5, price: 999.99),
    InventoryItem(id: '2', name: 'Mouse', quantity: 15, price: 29.99),
    InventoryItem(id: '3', name: 'Keyboard', quantity: 8, price: 79.99),
  ];

  void addItem(String name, int quantity, double price) {
    setState(() {
      items.add(
        InventoryItem(
          id: DateTime.now().toString(),
          name: name,
          quantity: quantity,
          price: price,
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) {
        final item = items[index];
        return ListTile(
          title: Text(item.name),
          subtitle: Text('Stock: \${item.quantity} | Price: \\\$\${item.price.toStringAsFixed(2)}'),
          trailing: Text(
            'Total: \\\$\${(item.quantity * item.price).toStringAsFixed(2)}',
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
        );
      },
    );
  }
}`,
        hint: "Create a model class to represent inventory items and manage a list in memory."
    },

    // pubspec.yaml Config
    11: {
        title: "Adding Dependencies to pubspec.yaml",
        topic: "pubspec.yaml Config",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Dependencies Info')),
        body: const Center(
          child: SingleChildScrollView(
            padding: EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Dependencies Used in pubspec.yaml:',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 16),
                DependencyCard(
                  name: 'shared_preferences',
                  version: '^2.0.0',
                  description: 'For local data persistence',
                ),
                SizedBox(height: 12),
                DependencyCard(
                  name: 'sqflite',
                  version: '^2.0.0',
                  description: 'For local database storage',
                ),
                SizedBox(height: 12),
                DependencyCard(
                  name: 'provider',
                  version: '^6.0.0',
                  description: 'For state management',
                ),
                SizedBox(height: 12),
                DependencyCard(
                  name: 'intl',
                  version: '^0.18.0',
                  description: 'For internationalization',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class DependencyCard extends StatelessWidget {
  final String name;
  final String version;
  final String description;

  const DependencyCard({
    required this.name,
    required this.version,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              name,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
            ),
            Text('Version: \$version'),
            Text(description),
          ],
        ),
      ),
    );
  }
}`,
        hint: "Display information about common dependencies to add to pubspec.yaml for inventory app."
    },

    // Debugging & Logging
    12: {
        title: "Debug Logging and Error Handling",
        topic: "Debugging & Logging",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Debugging & Logging')),
        body: const LoggingScreen(),
      ),
    );
  }
}

class LoggingScreen extends StatefulWidget {
  const LoggingScreen();

  @override
  State<LoggingScreen> createState() => _LoggingScreenState();
}

class _LoggingScreenState extends State<LoggingScreen> {
  final List<String> logs = ['App started'];

  void performAction(String action) {
    debugPrint('[ACTION] User performed: \$action at \${DateTime.now()}');
    setState(() {
      logs.add('\$action - \${DateTime.now().toString().split('.')[0]}');
    });
  }

  void handleError(String error) {
    debugPrint('[ERROR] \$error');
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Error: \$error')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: ListView.builder(
            itemCount: logs.length,
            itemBuilder: (context, index) {
              return ListTile(
                title: Text(logs[index]),
                leading: const Icon(Icons.bug_report),
              );
            },
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              ElevatedButton(
                onPressed: () => performAction('Button tapped'),
                child: const Text('Tap to Log'),
              ),
              const SizedBox(height: 8),
              ElevatedButton(
                onPressed: () => handleError('Sample error occurred'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red,
                ),
                child: const Text('Trigger Error'),
              ),
            ],
          ),
        ),
      ],
    );
  }
}`,
        hint: "Use debugPrint() and logging to track app behavior and handle errors gracefully."
    },

    // Comprehensive Inventory App
    13: {
        title: "Complete Inventory Management Application",
        topic: "All Topics",
        code: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp();

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool isDarkMode = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Inventory System',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
        cardTheme: CardTheme(
          elevation: 4,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
      ),
      darkTheme: ThemeData.dark(useMaterial3: true),
      themeMode: isDarkMode ? ThemeMode.dark : ThemeMode.light,
      home: InventoryApp(
        onThemeToggle: () => setState(() => isDarkMode = !isDarkMode),
      ),
    );
  }
}

class InventoryApp extends StatefulWidget {
  final VoidCallback onThemeToggle;

  const InventoryApp({required this.onThemeToggle});

  @override
  State<InventoryApp> createState() => _InventoryAppState();
}

class _InventoryAppState extends State<InventoryApp> {
  final List<InventoryProduct> products = [
    InventoryProduct(
      id: '1',
      name: 'Laptop',
      category: 'Electronics',
      quantity: 5,
      price: 999.99,
    ),
    InventoryProduct(
      id: '2',
      name: 'Mouse',
      category: 'Accessories',
      quantity: 25,
      price: 29.99,
    ),
    InventoryProduct(
      id: '3',
      name: 'Keyboard',
      category: 'Accessories',
      quantity: 12,
      price: 79.99,
    ),
    InventoryProduct(
      id: '4',
      name: 'Monitor',
      category: 'Electronics',
      quantity: 8,
      price: 299.99,
    ),
  ];

  void updateQuantity(String productId, int newQuantity) {
    final index = products.indexWhere((p) => p.id == productId);
    if (index >= 0) {
      setState(() {
        products[index].quantity = newQuantity;
      });
      debugPrint('[LOG] Updated \${products[index].name} quantity to \$newQuantity');
    }
  }

  void addProduct(InventoryProduct product) {
    setState(() {
      products.add(product);
    });
    debugPrint('[LOG] Added new product: \${product.name}');
  }

  double get totalInventoryValue {
    return products.fold(
      0,
      (sum, p) => sum + (p.quantity * p.price),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Inventory Manager'),
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.brightness_4),
            onPressed: widget.onThemeToggle,
          ),
        ],
      ),
      body: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            color: Theme.of(context).primaryColor.withOpacity(0.1),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Total Inventory Value',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
                ),
                const SizedBox(height: 8),
                Text(
                  '\\\$\${totalInventoryValue.toStringAsFixed(2)}',
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        color: Colors.green,
                        fontWeight: FontWeight.bold,
                      ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: products.length,
              itemBuilder: (context, index) {
                final product = products[index];
                return ProductTile(
                  product: product,
                  onQuantityChanged: (newQuantity) =>
                      updateQuantity(product.id, newQuantity),
                  onTap: () => navigateToDetails(product),
                );
              },
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => showAddProductDialog(),
        child: const Icon(Icons.add),
      ),
    );
  }

  void navigateToDetails(InventoryProduct product) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => ProductDetailPage(product: product),
      ),
    );
  }

  void showAddProductDialog() {
    final nameController = TextEditingController();
    final quantityController = TextEditingController();
    final priceController = TextEditingController();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Add New Product'),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: nameController,
                decoration: const InputDecoration(labelText: 'Product Name'),
              ),
              TextField(
                controller: quantityController,
                decoration: const InputDecoration(labelText: 'Quantity'),
                keyboardType: TextInputType.number,
              ),
              TextField(
                controller: priceController,
                decoration: const InputDecoration(labelText: 'Price'),
                keyboardType: TextInputType.number,
              ),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            onPressed: () {
              if (nameController.text.isNotEmpty &&
                  quantityController.text.isNotEmpty &&
                  priceController.text.isNotEmpty) {
                addProduct(
                  InventoryProduct(
                    id: DateTime.now().toString(),
                    name: nameController.text,
                    category: 'General',
                    quantity: int.parse(quantityController.text),
                    price: double.parse(priceController.text),
                  ),
                );
                Navigator.pop(context);
              }
            },
            child: const Text('Add'),
          ),
        ],
      ),
    );
  }
}

class InventoryProduct {
  final String id;
  final String name;
  final String category;
  int quantity;
  final double price;

  InventoryProduct({
    required this.id,
    required this.name,
    required this.category,
    required this.quantity,
    required this.price,
  });
}

class ProductTile extends StatelessWidget {
  final InventoryProduct product;
  final Function(int) onQuantityChanged;
  final VoidCallback onTap;

  const ProductTile({
    required this.product,
    required this.onQuantityChanged,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      child: ListTile(
        leading: CircleAvatar(
          child: Text(product.name[0]),
        ),
        title: Text(product.name),
        subtitle: Text(
          'Stock: \${product.quantity} | \\\$\${product.price.toStringAsFixed(2)}',
        ),
        trailing: SizedBox(
          width: 80,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              InkWell(
                onTap: () => onQuantityChanged(product.quantity - 1),
                child: const Icon(Icons.remove, size: 20),
              ),
              const SizedBox(width: 8),
              InkWell(
                onTap: () => onQuantityChanged(product.quantity + 1),
                child: const Icon(Icons.add, size: 20),
              ),
            ],
          ),
        ),
        onTap: onTap,
      ),
    );
  }
}

class ProductDetailPage extends StatelessWidget {
  final InventoryProduct product;

  const ProductDetailPage({required this.product});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(product.name)),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      product.name,
                      style: Theme.of(context).textTheme.headlineSmall,
                    ),
                    const SizedBox(height: 16),
                    DetailRow(label: 'Category', value: product.category),
                    DetailRow(
                      label: 'Unit Price',
                      value: '\\\$\${product.price.toStringAsFixed(2)}',
                    ),
                    DetailRow(
                      label: 'Current Stock',
                      value: '\${product.quantity}',
                    ),
                    DetailRow(
                      label: 'Total Value',
                      value:
                          '\\\$\${(product.quantity * product.price).toStringAsFixed(2)}',
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class DetailRow extends StatelessWidget {
  final String label;
  final String value;

  const DetailRow({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontWeight: FontWeight.w500)),
          Text(value, style: const TextStyle(fontSize: 16)),
        ],
      ),
    );
  }
}`,
        hint: "Build a complete inventory app combining all learned concepts: state management, navigation, theming, data models, and logging."
    }
};
