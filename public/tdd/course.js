/* course.js: the lesson content for both tracks.
 *
 *   TDD_COURSE.tracks          the two tracks (Flutter and Dart, Unity and C#)
 *   TDD_COURSE.build(id, C)    returns the modules for a track. C(code, opts) draws a code block.
 *
 * Step types: read, demo, quiz, task (fix | refactor | write-test), checklist, showcase.
 * Tokens like {red} become glossary tooltips. Code that cannot run in the browser
 * (widgets, scenes) is shown with a "not run" label.
 */
(function (root) {
  'use strict';

  var TRACKS = {
    dart: { id: 'dart', lang: 'dart', name: 'Flutter and Dart', short: 'Flutter', icon: 'F',
      blurb: 'Test the logic behind your Flutter apps with flutter_test and Dart. Examples come from a college coffee-shop app.' },
    cs: { id: 'cs', lang: 'cs', name: 'Unity and C#', short: 'Unity', icon: 'U',
      blurb: 'Test your Unity game logic with NUnit and C#. Examples come from player health, scores and turns.' }
  };

  function indent(lines, n) { var p = new Array(n + 1).join(' '); return lines.map(function (l) { return l ? p + l : l; }).join('\n'); }

  /* ---- builders for test files ---- */
  function dartFile(tests) { return "import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n" + tests.join('\n\n') + '\n}'; }
  function dT(desc, lines) { return "  test('" + desc + "', () {\n" + indent(lines, 4) + '\n  });'; }
  function csFile(cls, tests, extra) { return 'using NUnit.Framework;\n\n[TestFixture]\npublic class ' + cls + '\n{\n' + (extra ? extra + '\n\n' : '') + tests.join('\n\n') + '\n}'; }
  function cT(name, lines) { return '    [Test]\n    public void ' + name + '()\n    {\n' + indent(lines, 8) + '\n    }'; }
  function csClass(name, members, isStatic) { return 'public ' + (isStatic === false ? '' : 'static ') + 'class ' + name + '\n{\n' + indent(members.split('\n'), 4) + '\n}'; }

  function build(id, C) {
    var dart = id === 'dart';
    var L = dart ? 'dart' : 'cs';
    var code = function (src, title) { return C(src, { title: title || (dart ? 'Dart' : 'C#'), lang: L }); };
    var staticCode = function (src, title) { return C(src, { title: (title || (dart ? 'Dart' : 'C#')) + ' (not run in the browser)', lang: L }); };
    var X = {};

    /* ============================ shared words ============================ */
    X.fw = dart ? 'flutter_test' : 'NUnit';
    X.app = dart ? 'Flutter app' : 'Unity game';

    /* ============================ M1: where tests live ============================ */
    X.where = dart
      ? '<p>In a Flutter project, tests live in the <code>test/</code> folder and file names end in <code>_test.dart</code>. Run them with <code>flutter test</code> in the terminal, or press the green arrow beside a test in VS Code or Android Studio.</p>' +
        code("import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  test('my first test', () {\n    expect(1 + 1, equals(2));\n  });\n}", 'test/first_test.dart') +
        '<p>The <code>flutter_test</code> package comes with Flutter, so there is nothing extra to install.</p>'
      : '<p>In Unity, tests live in a <strong>Tests</strong> folder with their own assembly definition. Open <strong>Window, General, Test Runner</strong>, choose the <strong>EditMode</strong> tab, and press <strong>Create EditMode Test Assembly Folder</strong>. Press <strong>Run All</strong> to run them.</p>' +
        code('using NUnit.Framework;\n\npublic class FirstTests\n{\n    [Test]\n    public void MyFirstTest()\n    {\n        Assert.AreEqual(2, 1 + 1);\n    }\n}', 'Assets/Tests/EditMode/FirstTests.cs') +
        '<p>Unity uses <strong>NUnit</strong>, a standard C# test library. {editmode} tests run quickly without playing the scene, which makes them perfect for TDD.</p>';

    /* ============================ M2: anatomy ============================ */
    X.anatomy = dart
      ? '<p>Most tests follow {aaa}.</p>' +
        code("test('adds two numbers', () {\n  final result = add(2, 3);   // Arrange and Act\n  expect(result, equals(5));  // Assert\n});", 'A test in Dart') +
        '<ul><li><code>test(\'name\', ...)</code> gives the test a name that says what should happen.</li><li><code>add(2, 3)</code> runs the code being tested.</li><li><code>{expect}(result, {equals}(5))</code> is the {assertion}. If result is not 5, the test fails.</li></ul>'
      : '<p>Most tests follow {aaa}.</p>' +
        code('[Test]\npublic void Add_TwoNumbers_ReturnsSum()\n{\n    int result = Calc.Add(2, 3);   // Arrange and Act\n    Assert.AreEqual(5, result);    // Assert\n}', 'A test in C#') +
        '<ul><li><code>[Test]</code> marks a method as a test. Unity\'s Test Runner finds it.</li><li><code>Calc.Add(2, 3)</code> runs the code being tested.</li><li><code>{areequal}(5, result)</code> is the {assertion}. Careful: the <em>expected</em> value goes first, then the <em>actual</em> value.</li></ul>';

    X.addCode = dart ? 'int add(int a, int b) {\n  return a + b;\n}' : csClass('Calc', 'public static int Add(int a, int b)\n{\n    return a + b;\n}');
    X.addBug = dart ? 'int add(int a, int b) {\n  return a - b;   // bug!\n}' : csClass('Calc', 'public static int Add(int a, int b)\n{\n    return a - b;   // bug!\n}');
    X.addTests = dart
      ? dartFile([dT('adds two positive numbers', ['expect(add(2, 3), equals(5));']), dT('adds a negative number', ['expect(add(5, -2), equals(3));'])])
      : csFile('CalcTests', [cT('Add_TwoPositives_ReturnsSum', ['Assert.AreEqual(5, Calc.Add(2, 3));']), cT('Add_NegativeNumber_Subtracts', ['Assert.AreEqual(3, Calc.Add(5, -2));'])]);
    X.quizAnat = dart
      ? { q: 'In expect(total, equals(10)), which part is the value your code produced?', opts: [
          { t: 'equals', why: 'equals is the matcher. It describes what the value should be.' },
          { t: 'total', why: 'Correct. total is the actual result. equals(10) is the expectation.' },
          { t: '10', why: '10 is what you expect. The actual value goes first in expect().' }], correct: 1 }
      : { q: 'In Assert.AreEqual(10, total), which argument is the value your code produced?', opts: [
          { t: '10', why: 'In NUnit the expected value comes first, so 10 is the expectation.' },
          { t: 'total', why: 'Correct. The actual value is the second argument.' },
          { t: 'Assert', why: 'Assert is the class that holds the checks. It is not a value.' }], correct: 1 };
    X.dbl = dart
      ? { brief: '<p>The tests below are already written. They fail, because <code>doubleShots</code> does nothing yet. It should double the number of espresso shots. Write the code so every test passes.</p><p><span class="chip now">Goal</span> Get from {red} to {green}.</p>',
          stub: 'int doubleShots(int shots) {\n  // your code here\n}',
          tests: dartFile([dT('doubles a positive number', ['expect(doubleShots(2), equals(4));']), dT('doubling zero gives zero', ['expect(doubleShots(0), equals(0));']), dT('doubles a negative number', ['expect(doubleShots(-3), equals(-6));']), dT('doubles a larger number', ['expect(doubleShots(25), equals(50));'])]),
          hints: ['Run the tests first. Read what each one expects.', 'The function needs a return statement.', 'Doubling means multiplying by 2: return shots * 2;'] }
      : { brief: '<p>The tests below are already written. They fail, because <code>DoubleDamage</code> does nothing yet. It should double the damage of a critical hit. Write the code so every test passes.</p><p><span class="chip now">Goal</span> Get from {red} to {green}.</p>',
          stub: csClass('Combat', 'public static int DoubleDamage(int damage)\n{\n    // your code here\n}'),
          tests: csFile('CombatTests', [cT('DoubleDamage_Positive_Doubles', ['Assert.AreEqual(4, Combat.DoubleDamage(2));']), cT('DoubleDamage_Zero_IsZero', ['Assert.AreEqual(0, Combat.DoubleDamage(0));']), cT('DoubleDamage_Negative_Doubles', ['Assert.AreEqual(-6, Combat.DoubleDamage(-3));']), cT('DoubleDamage_Large_Doubles', ['Assert.AreEqual(50, Combat.DoubleDamage(25));'])]),
          hints: ['Run the tests first. Read what each one expects.', 'The method needs a return statement.', 'Doubling means multiplying by 2: return damage * 2;'] };

    /* ============================ M3: red ============================ */
    X.evenIntro = dart
      ? '<p>Say you are alternating the background colour of rows in a list. You need a function called <code>isEvenRow</code>. A good first test is just one example:</p>' + code("test('returns true for an even row', () {\n  expect(isEvenRow(4), isTrue);\n});", 'One small test')
      : '<p>Say your game alternates turns between two players. You need a method called <code>IsEvenTurn</code>. A good first test is just one example:</p>' + code('[Test]\npublic void IsEvenTurn_FourthTurn_ReturnsTrue()\n{\n    Assert.IsTrue(TurnOrder.IsEvenTurn(4));\n}', 'One small test');
    X.nameTip = dart
      ? '<p>Name tests like sentences: what does the code do, and in which situation? <code>returns true for an even row</code> is far more useful than <code>test 1</code>.</p>'
      : '<p>In C# the common pattern is <code>Method_Scenario_ExpectedResult</code>, for example <code>IsEvenTurn_FourthTurn_ReturnsTrue</code>. It reads like a sentence in the Test Runner.</p>';
    X.evenDemo = dart
      ? { code: '// isEvenRow does not exist yet.', tests: dartFile([dT('returns true for an even row', ['expect(isEvenRow(4), isTrue);'])]), missing: 'isEvenRow is not defined' }
      : { code: '// The TurnOrder class does not exist yet.', tests: csFile('TurnOrderTests', [cT('IsEvenTurn_FourthTurn_ReturnsTrue', ['Assert.IsTrue(TurnOrder.IsEvenTurn(4));'])]), missing: 'TurnOrder is not defined' };
    X.evenIntroDemo = dart
      ? '<p>We have <strong>not</strong> written <code>isEvenRow</code> yet, only the test. Run it and read the message.</p><p>In your editor this would show as a compile error. Here, "isEvenRow is not defined" is a good {red}. It fails because the code is missing, which is exactly the reason we expect.</p>'
      : '<p>We have <strong>not</strong> written <code>TurnOrder</code> yet, only the test. Run it and read the message.</p><p>In Unity you would see a compile error in the Console. Here, "TurnOrder is not defined" is a good {red}. It fails because the code is missing, which is exactly the reason we expect.</p>';
    function evenStub() { return dart ? 'bool isEvenRow(int index) {\n  return false;\n}' : csClass('TurnOrder', 'public static bool IsEvenTurn(int turn)\n{\n    return false;\n}'); }
    X.even = {
      stub: evenStub(),
      starter: dart ? "import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  // Write at least 3 tests for isEvenRow.\n  // Shape:\n  // test('name', () {\n  //   expect(actual, equals(expected));\n  // });\n}\n"
                    : 'using NUnit.Framework;\n\n[TestFixture]\npublic class TurnOrderTests\n{\n    // Write at least 3 tests for IsEvenTurn. Shape:\n    // [Test]\n    // public void Name()\n    // {\n    //     Assert.AreEqual(expected, actual);\n    // }\n}\n',
      reference: dart ? 'bool isEvenRow(int index) {\n  return index % 2 == 0;\n}' : csClass('TurnOrder', 'public static bool IsEvenTurn(int turn)\n{\n    return turn % 2 == 0;\n}'),
      mutants: dart
        ? ['bool isEvenRow(int index) { return true; }', 'bool isEvenRow(int index) { return index > 10; }', 'bool isEvenRow(int index) { return index % 2 == 1; }']
        : [csClass('TurnOrder', 'public static bool IsEvenTurn(int turn) { return true; }'), csClass('TurnOrder', 'public static bool IsEvenTurn(int turn) { return turn > 10; }'), csClass('TurnOrder', 'public static bool IsEvenTurn(int turn) { return turn % 2 == 1; }')],
      brief: '<p>This time <strong>you</strong> write the tests. The code below is a {stub}, an unfinished version that always returns false.</p><p>Write at least <strong>3 tests</strong>. The checker will confirm that:</p><ul><li>your tests {red} (fail) against the unfinished code,</li><li>they all pass against a correct version, so they are testing the right thing,</li><li>they catch some {mutant}s.</li></ul>',
      hints: dart
        ? ['Test one even number, one odd number and zero.', "An even test looks like: expect(isEvenRow(4), isTrue);", "Example set: isEvenRow(4) is true, isEvenRow(7) is false, isEvenRow(0) is true."]
        : ['Test one even turn, one odd turn and zero.', 'An even test looks like: Assert.IsTrue(TurnOrder.IsEvenTurn(4));', 'Example set: IsEvenTurn(4) is true, IsEvenTurn(7) is false, IsEvenTurn(0) is true.'] };

    /* ============================ M4: green ============================ */
    X.fakeIntro = dart
      ? '<p>Imagine your first test says <code>stockLabel(0)</code> should give <code>\'Sold out\'</code>. The simplest passing code is:</p>' + code("String stockLabel(int count) {\n  return 'Sold out';   // fake it!\n}") +
        '<p>That is allowed. Now add the next test: <code>stockLabel(9)</code> should give <code>\'In stock\'</code>. The fake no longer works, so you are forced to write real logic:</p>' + code("String stockLabel(int count) {\n  if (count <= 0) {\n    return 'Sold out';\n  }\n  return 'In stock';\n}")
      : '<p>Imagine your first test says <code>HealthState(0)</code> should give <code>"Dead"</code>. The simplest passing code is:</p>' + code('public static string HealthState(int hp)\n{\n    return "Dead";   // fake it!\n}') +
        '<p>That is allowed. Now add the next test: <code>HealthState(100)</code> should give <code>"Healthy"</code>. The fake no longer works, so you are forced to write real logic:</p>' + code('public static string HealthState(int hp)\n{\n    if (hp <= 0)\n    {\n        return "Dead";\n    }\n    return "Healthy";\n}');
    X.quizGreen = dart
      ? { q: "You have one test: stockLabel(0) should be 'Sold out'. What does \"the simplest code\" mean here?", opts: [
          { t: "Any code that passes it, even return 'Sold out'. The next test will force a real solution.", why: 'Right. Pass the test you have, then let the next test push the code forward.' },
          { t: 'A full stock system with a database, a cache and error handling', why: 'That is far more than one test asks for. Extra code with no test is risky.' },
          { t: 'Nothing. Wait until every test is written first.', why: 'TDD works one test at a time, not all at once.' },
          { t: 'Copy a finished solution from the internet', why: 'Then you would not learn what the tests are driving you towards.' }], correct: 0 }
      : { q: 'You have one test: HealthState(0) should be "Dead". What does "the simplest code" mean here?', opts: [
          { t: 'Any code that passes it, even return "Dead". The next test will force a real solution.', why: 'Right. Pass the test you have, then let the next test push the code forward.' },
          { t: 'A full status system with events, animations and a state machine', why: 'That is far more than one test asks for. Extra code with no test is risky.' },
          { t: 'Nothing. Wait until every test is written first.', why: 'TDD works one test at a time, not all at once.' },
          { t: 'Copy a finished solution from the internet', why: 'Then you would not learn what the tests are driving you towards.' }], correct: 0 };
    X.label = dart
      ? { brief: "<p>Time to run the loop. <code>stockLabel(count)</code> is shown on each drink card and must follow these rules:</p><ul><li>0 or fewer gives <code>'Sold out'</code>.</li><li>1 to 4 gives <code>'Low stock'</code>.</li><li>5 or more gives <code>'In stock'</code>.</li></ul><p>Tip: make the tests pass one by one, from the top. Run often. Seeing the count go up is the {green} step in action.</p>",
          stub: "String stockLabel(int count) {\n  return '';\n}",
          tests: dartFile([dT('0 is sold out', ["expect(stockLabel(0), equals('Sold out'));"]), dT('negative is sold out', ["expect(stockLabel(-1), equals('Sold out'));"]), dT('1 is low stock', ["expect(stockLabel(1), equals('Low stock'));"]), dT('4 is low stock', ["expect(stockLabel(4), equals('Low stock'));"]), dT('5 is in stock', ["expect(stockLabel(5), equals('In stock'));"]), dT('20 is in stock', ["expect(stockLabel(20), equals('In stock'));"])]),
          hints: ["Start with the first test only: return 'Sold out';", 'Add if (count <= 0) { return ...; } and keep going.', "Check the smallest band first. Structure: if count <= 0 return 'Sold out'; else if count < 5 return 'Low stock'; otherwise return 'In stock'."] }
      : { brief: '<p>Time to run the loop. <code>HealthState(hp)</code> feeds the health bar colour and must follow these rules:</p><ul><li>0 or fewer gives <code>"Dead"</code>.</li><li>1 to 24 gives <code>"Critical"</code>.</li><li>25 or more gives <code>"Healthy"</code>.</li></ul><p>Tip: make the tests pass one by one, from the top. Run often. Seeing the count go up is the {green} step in action.</p>',
          stub: csClass('HealthLabels', 'public static string HealthState(int hp)\n{\n    return "";\n}'),
          tests: csFile('HealthLabelsTests', [cT('HealthState_Zero_IsDead', ['Assert.AreEqual("Dead", HealthLabels.HealthState(0));']), cT('HealthState_Negative_IsDead', ['Assert.AreEqual("Dead", HealthLabels.HealthState(-5));']), cT('HealthState_One_IsCritical', ['Assert.AreEqual("Critical", HealthLabels.HealthState(1));']), cT('HealthState_TwentyFour_IsCritical', ['Assert.AreEqual("Critical", HealthLabels.HealthState(24));']), cT('HealthState_TwentyFive_IsHealthy', ['Assert.AreEqual("Healthy", HealthLabels.HealthState(25));']), cT('HealthState_Full_IsHealthy', ['Assert.AreEqual("Healthy", HealthLabels.HealthState(100));'])]),
          hints: ['Start with the first test only: return "Dead";', 'Add if (hp <= 0) { return ...; } and keep going.', 'Check the smallest band first. Structure: if hp <= 0 return "Dead"; else if hp < 25 return "Critical"; otherwise return "Healthy".'] };

    /* ============================ M5: refactor ============================ */
    X.refIntro = '<p>Once the tests are green, the code works but it may be messy. Now you can {refactor}: improve how the code is written without changing what it does.</p>' +
      '<p>Things worth tidying:</p><ul><li>Names that do not explain themselves</li><li>Repeated code</li><li>Long chains of <code>if</code> and <code>else</code></li><li>"Magic numbers": numbers with no name, like <code>1000</code> or <code>25</code></li></ul>' +
      '<p>Three rules keep refactoring safe:</p><ol><li><strong>Only refactor when everything is green.</strong></li><li><strong>Change one small thing, then run the tests.</strong></li><li><strong>Do not add new features.</strong> That needs a new {red} test first.</li></ol>' +
      (dart ? '<p>Your editor helps too. In VS Code, press <kbd>F2</kbd> to rename a symbol everywhere safely.</p>' : '<p>Your editor helps too. In Visual Studio or Rider, press <kbd>F2</kbd> or use the Rename refactoring to change a name everywhere safely.</p>');
    X.discBefore = dart
      ? 'int discountFor(int items) {\n  if (items >= 10) {\n    return 20;\n  } else if (items >= 5) {\n    return 10;\n  }\n  return 0;\n}'
      : csClass('Pricing', 'public static int DiscountFor(int items)\n{\n    if (items >= 10)\n    {\n        return 20;\n    }\n    else if (items >= 5)\n    {\n        return 10;\n    }\n    return 0;\n}');
    X.discAfter = dart
      ? 'const bulkItems = 10;\nconst bulkDiscount = 20;\nconst smallBulkItems = 5;\nconst smallBulkDiscount = 10;\n\nint discountFor(int items) {\n  if (items >= bulkItems) {\n    return bulkDiscount;\n  } else if (items >= smallBulkItems) {\n    return smallBulkDiscount;\n  }\n  return 0;\n}'
      : csClass('Pricing', 'private const int BulkItems = 10;\nprivate const int BulkDiscount = 20;\nprivate const int SmallBulkItems = 5;\nprivate const int SmallBulkDiscount = 10;\n\npublic static int DiscountFor(int items)\n{\n    if (items >= BulkItems)\n    {\n        return BulkDiscount;\n    }\n    else if (items >= SmallBulkItems)\n    {\n        return SmallBulkDiscount;\n    }\n    return 0;\n}');
    X.discTests = dart
      ? dartFile([dT('no discount for a few items', ['expect(discountFor(2), equals(0));']), dT('small discount from 5 items', ['expect(discountFor(5), equals(10));']), dT('big discount from 10 items', ['expect(discountFor(10), equals(20));'])])
      : csFile('PricingTests', [cT('DiscountFor_FewItems_IsZero', ['Assert.AreEqual(0, Pricing.DiscountFor(2));']), cT('DiscountFor_FiveItems_IsTen', ['Assert.AreEqual(10, Pricing.DiscountFor(5));']), cT('DiscountFor_TenItems_IsTwenty', ['Assert.AreEqual(20, Pricing.DiscountFor(10));'])]);
    X.tier = dart
      ? { brief: '<p>This function works and the tests pass, but the numbers <code>1000</code> and <code>500</code> are "magic numbers". <strong>Refactor</strong> it: give each one a <strong>named constant</strong> (use <code>const</code>) and use the names in the function. The tests must stay green the whole time.</p><p>The check needs three things: all tests pass, the code has changed, and each number appears only once (in its constant).</p>',
          stub: "String tierFor(int points) {\n  if (points >= 1000) {\n    return 'Gold';\n  } else if (points >= 500) {\n    return 'Silver';\n  }\n  return 'Bronze';\n}",
          tests: dartFile([dT('1000 points is Gold', ["expect(tierFor(1000), equals('Gold'));"]), dT('999 points is Silver', ["expect(tierFor(999), equals('Silver'));"]), dT('500 points is Silver', ["expect(tierFor(500), equals('Silver'));"]), dT('499 points is Bronze', ["expect(tierFor(499), equals('Bronze'));"]), dT('0 points is Bronze', ["expect(tierFor(0), equals('Bronze'));"])]),
          hints: ['Run the tests before you change anything so you know they start green.', 'Above the function write: const goldPoints = 1000; and the same for silver.', 'Replace the numbers in the function with goldPoints and silverPoints. Run the tests again.'], constKey: 'const' }
      : { brief: '<p>This method works and the tests pass, but the numbers <code>1000</code> and <code>500</code> are "magic numbers". <strong>Refactor</strong> it: give each one a <strong>named constant</strong> (use <code>const</code>) and use the names in the method. The tests must stay green the whole time.</p><p>The check needs three things: all tests pass, the code has changed, and each number appears only once (in its constant).</p>',
          stub: csClass('Ranks', 'public static string RankFor(int score)\n{\n    if (score >= 1000)\n    {\n        return "Gold";\n    }\n    else if (score >= 500)\n    {\n        return "Silver";\n    }\n    return "Bronze";\n}'),
          tests: csFile('RanksTests', [cT('RankFor_1000_IsGold', ['Assert.AreEqual("Gold", Ranks.RankFor(1000));']), cT('RankFor_999_IsSilver', ['Assert.AreEqual("Silver", Ranks.RankFor(999));']), cT('RankFor_500_IsSilver', ['Assert.AreEqual("Silver", Ranks.RankFor(500));']), cT('RankFor_499_IsBronze', ['Assert.AreEqual("Bronze", Ranks.RankFor(499));']), cT('RankFor_Zero_IsBronze', ['Assert.AreEqual("Bronze", Ranks.RankFor(0));'])]),
          hints: ['Run the tests before you change anything so you know they start green.', 'Inside the class write: private const int GoldScore = 1000; and the same for silver.', 'Replace the numbers in the method with GoldScore and SilverScore. Run the tests again.'], constKey: 'const' };
    X.tier.magic = [1000, 500];

    /* ============================ M6: good tests ============================ */
    X.clearTests = dart
      ? '<ul><li><strong>Name it like a sentence.</strong> <code>shows Sold out when the count is zero</code>, not <code>test 3</code>.</li><li><strong>One idea per test.</strong> If it fails, you know what is wrong.</li><li><strong>Keep it simple.</strong> A test should not need its own tests.</li><li><strong>Keep tests independent.</strong> One test should never rely on another having run first. Use <code>setUp()</code> to create fresh data for each test.</li></ul>' +
        code("test('total is 0 for an empty cart', () {\n  final cart = Cart();           // Arrange\n  final total = cart.total;      // Act\n  expect(total, equals(0));      // Assert\n});")
      : '<ul><li><strong>Name it like a sentence.</strong> <code>TakeDamage_MoreThanHealth_StopsAtZero</code> tells you everything without opening the test.</li><li><strong>One idea per test.</strong> If it fails, you know what is wrong.</li><li><strong>Keep it simple.</strong> A test should not need its own tests.</li><li><strong>Keep tests independent.</strong> One test should never rely on another having run first. Use a <code>[SetUp]</code> method to create fresh data for each test.</li></ul>' +
        code('[Test]\npublic void Total_EmptyInventory_IsZero()\n{\n    var inventory = new Inventory();        // Arrange\n    int total = inventory.TotalValue;       // Act\n    Assert.AreEqual(0, total);              // Assert\n}');
    X.edgeExamples = dart
      ? '<p>For a Flutter quantity stepper that allows 1 to 10, test 0, 1, 10 and 11. For a form validator, test <code>null</code>, an empty string and exactly the minimum length.</p>'
      : '<p>For a Unity inventory stack limit of 99, test 0, 1, 99 and 100. For health, test taking exactly the remaining health, one more than that, and a negative amount.</p>';
    X.quizName = dart
      ? { q: 'Which test name is the most useful when it fails?', opts: [{ t: "'test 1'", why: 'When this fails you have to open the test to learn what it was checking.' }, { t: "'works'", why: 'Too vague. What works, and in which situation?' }, { t: "'returns the minimum when the quantity is below the range'", why: 'Correct. It names the behaviour and the situation.' }, { t: "'clampTest'", why: 'It names the function but not what should happen.' }], correct: 2 }
      : { q: 'Which test name is the most useful when it fails?', opts: [{ t: 'Test1', why: 'When this fails you have to open the test to learn what it was checking.' }, { t: 'Works', why: 'Too vague. What works, and in which situation?' }, { t: 'ClampQuantity_BelowMinimum_ReturnsMinimum', why: 'Correct. It names the method, the situation and the expected result.' }, { t: 'ClampTest', why: 'It names the method but not what should happen.' }], correct: 2 };
    X.manyCases = dart
      ? { intro: "<p>Testing the same rule with many inputs? In Dart, loop over a list of cases and create one test for each. Press <strong>Run tests</strong>. Each case shows up as its own named test.</p>",
          code: "String stockLabel(int count) {\n  if (count <= 0) {\n    return 'Sold out';\n  } else if (count < 5) {\n    return 'Low stock';\n  }\n  return 'In stock';\n}",
          tests: "import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  final cases = [\n    [0, 'Sold out'],\n    [4, 'Low stock'],\n    [5, 'In stock'],\n  ];\n\n  for (final c in cases) {\n    test('stockLabel(${c[0]}) is ${c[1]}', () {\n      expect(stockLabel(c[0]), equals(c[1]));\n    });\n  }\n}" }
      : { intro: '<p>Testing the same rule with many inputs? NUnit has <code>[TestCase]</code>. One method runs once for each row. Press <strong>Run tests</strong>. Each case shows up as its own test, just like in Unity\'s Test Runner.</p>',
          code: csClass('HealthLabels', 'public static string HealthState(int hp)\n{\n    if (hp <= 0)\n    {\n        return "Dead";\n    }\n    else if (hp < 25)\n    {\n        return "Critical";\n    }\n    return "Healthy";\n}'),
          tests: 'using NUnit.Framework;\n\n[TestFixture]\npublic class HealthLabelsTests\n{\n    [TestCase(0, "Dead")]\n    [TestCase(24, "Critical")]\n    [TestCase(25, "Healthy")]\n    public void HealthState_ReturnsExpectedLabel(int hp, string expected)\n    {\n        Assert.AreEqual(expected, HealthLabels.HealthState(hp));\n    }\n}' };
    X.clamp = {
      stub: dart ? 'int clampQuantity(int quantity, int min, int max) {\n  return quantity;\n}' : csClass('Inventory', 'public static int ClampQuantity(int quantity, int min, int max)\n{\n    return quantity;\n}'),
      starter: dart ? "import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  // Example: clampQuantity(15, 1, 10) should give 10\n  // Think: below the range, above it, inside it, and exactly on each boundary.\n}\n"
                    : 'using NUnit.Framework;\n\n[TestFixture]\npublic class InventoryTests\n{\n    // Example: ClampQuantity(15, 1, 10) should give 10\n    // Think: below the range, above it, inside it, and exactly on each boundary.\n}\n',
      reference: dart ? 'int clampQuantity(int quantity, int min, int max) {\n  if (quantity < min) return min;\n  if (quantity > max) return max;\n  return quantity;\n}'
                      : csClass('Inventory', 'public static int ClampQuantity(int quantity, int min, int max)\n{\n    if (quantity < min) return min;\n    if (quantity > max) return max;\n    return quantity;\n}'),
      mutants: dart
        ? ['int clampQuantity(int quantity, int min, int max) { if (quantity < min) return min; return quantity; }',
           'int clampQuantity(int quantity, int min, int max) { if (quantity > max) return max; return quantity; }',
           'int clampQuantity(int quantity, int min, int max) { if (quantity < min) return min; if (quantity > max) return max; if (quantity == min) return min + 1; return quantity; }',
           'int clampQuantity(int quantity, int min, int max) { if (quantity < min) return min; if (quantity > max) return max; if (quantity == max) return max - 1; return quantity; }']
        : [csClass('Inventory', 'public static int ClampQuantity(int quantity, int min, int max) { if (quantity < min) return min; return quantity; }'),
           csClass('Inventory', 'public static int ClampQuantity(int quantity, int min, int max) { if (quantity > max) return max; return quantity; }'),
           csClass('Inventory', 'public static int ClampQuantity(int quantity, int min, int max) { if (quantity < min) return min; if (quantity > max) return max; if (quantity == min) return min + 1; return quantity; }'),
           csClass('Inventory', 'public static int ClampQuantity(int quantity, int min, int max) { if (quantity < min) return min; if (quantity > max) return max; if (quantity == max) return max - 1; return quantity; }')],
      brief: dart ? '<p><code>clampQuantity(quantity, min, max)</code> keeps the number on a Flutter quantity stepper inside its range. Below <code>min</code> it returns <code>min</code>. Above <code>max</code> it returns <code>max</code>. Otherwise it returns the quantity.</p><p>Write at least <strong>5 tests</strong>. The checker will plant bugs in the code, and your tests must catch all of them.</p>'
                 : '<p><code>ClampQuantity(quantity, min, max)</code> keeps an inventory stack inside its limits. Below <code>min</code> it returns <code>min</code>. Above <code>max</code> it returns <code>max</code>. Otherwise it returns the quantity.</p><p>Write at least <strong>5 tests</strong>. The checker will plant bugs in the code, and your tests must catch all of them.</p>',
      hints: dart
        ? ['You need at least one test for each of: below the range, above the range, inside the range.', 'Some bugs only show on the boundary. Test the quantity equal to min and equal to max.', 'Example set for clampQuantity(n, 1, 10): 0 gives 1, 15 gives 10, 5 gives 5, 1 gives 1, 10 gives 10.']
        : ['You need at least one test for each of: below the range, above the range, inside the range.', 'Some bugs only show on the boundary. Test the quantity equal to min and equal to max.', 'Example set for ClampQuantity(n, 1, 10): 0 gives 1, 15 gives 10, 5 gives 5, 1 gives 1, 10 gives 10.'] };

    /* ============================ M7: beyond logic ============================ */
    X.splitRead = dart
      ? '<p>The tests so far check plain Dart functions. That is on purpose. <strong>Keep the rules out of your widgets.</strong> A widget should only show what the logic decides:</p>' +
        staticCode("// The rule lives in a plain function you can test in milliseconds.\nString stockLabel(int count) { /* ... */ }\n\n// The widget only displays it.\nclass DrinkCard extends StatelessWidget {\n  const DrinkCard({super.key, required this.count});\n  final int count;\n\n  @override\n  Widget build(BuildContext context) {\n    return Text(stockLabel(count));\n  }\n}") +
        '<p>Testing the rule is fast and simple. Testing the widget needs a pretend screen, which is slower, so keep those tests for checking that the pieces are wired up.</p>'
      : '<p>The tests so far check plain C# classes. That is on purpose. <strong>Keep the rules out of your MonoBehaviours.</strong> A MonoBehaviour should only connect Unity to your logic:</p>' +
        staticCode('// The rule lives in a plain C# class: no scene, no GameObject.\npublic class Health\n{\n    public int Current { get; private set; }\n    public void TakeDamage(int amount) { /* ... */ }\n}\n\n// The MonoBehaviour only connects Unity to it.\npublic class PlayerController : MonoBehaviour\n{\n    private Health health = new Health(100);\n\n    private void OnTriggerEnter(Collider other)\n    {\n        health.TakeDamage(10);\n    }\n}') +
        '<p>Testing <code>Health</code> in {editmode} takes milliseconds. Testing <code>PlayerController</code> needs a scene and {playmode}, which is slower, so keep those tests for checking that the pieces are wired up.</p>';
    X.sim = dart
      ? { intro: '<p>Sometimes you do want to test the screen. Flutter has <strong>widget tests</strong> that build a widget on a pretend screen. The browser cannot run widgets, so press <strong>Show output</strong> to see what <code>flutter test</code> would print for this {red} test.</p>',
          code: "class DrinkCard extends StatelessWidget {\n  const DrinkCard({super.key, required this.count});\n  final int count;\n\n  @override\n  Widget build(BuildContext context) {\n    return Text(count > 0 ? 'In stock' : '');   // forgot the Sold out text\n  }\n}",
          tests: "testWidgets('DrinkCard shows Sold out at zero', (tester) async {\n  await tester.pumpWidget(\n    const MaterialApp(home: DrinkCard(count: 0)),\n  );\n\n  expect(find.text('Sold out'), findsOneWidget);\n});",
          output: '00:01 +0 -1: DrinkCard shows Sold out at zero [E]\n  Expected: exactly one matching candidate\n    Actual: _TextFinder:<Found 0 widgets with text "Sold out": []>\n     Which: means none were found but one was expected\n\n00:01 +0 -1: Some tests failed.' }
      : { intro: '<p>Sometimes you do want to test the real scene. Unity has {playmode} tests that run while the game plays. The browser cannot run Unity, so press <strong>Show output</strong> to see what the Test Runner would report for this {red} test.</p>',
          code: 'public class PlayerController : MonoBehaviour\n{\n    private Health health = new Health(100);\n    public bool IsDead => health.IsDead;\n\n    public void Hit(int damage)\n    {\n        // forgot to call health.TakeDamage(damage)\n    }\n}',
          tests: '[UnityTest]\npublic IEnumerator PlayerController_Dies_WhenHitHard()\n{\n    var go = new GameObject();\n    var player = go.AddComponent<PlayerController>();\n\n    player.Hit(500);\n    yield return null;\n\n    Assert.IsTrue(player.IsDead);\n}',
          output: 'PlayerController_Dies_WhenHitHard (0.034s)\n---\nExpected: True\nBut was:  False\n---\nat PlayerControllerTests.PlayerController_Dies_WhenHitHard () [0x00021]\n\nTest Run Finished: 0 passed, 1 failed' };
    X.quizSplit = dart
      ? { q: "Where should the rule 'a stock label is Sold out at zero' live so it is quick to test?", opts: [{ t: 'In a plain Dart function that the widget calls', why: 'Correct. You can test it in milliseconds with no screen needed.' }, { t: 'Inside the widget build() method', why: 'Then you need a pretend screen just to check one rule.' }, { t: 'In a comment', why: 'Comments are not checked by anything.' }], correct: 0 }
      : { q: "Where should the rule 'health never drops below zero' live so it is quick to test?", opts: [{ t: 'In a plain C# class that the MonoBehaviour calls', why: 'Correct. You can test it in EditMode in milliseconds with no scene.' }, { t: 'Inside Update() on the MonoBehaviour', why: 'Then you need a scene and PlayMode just to check one rule.' }, { t: 'In a comment', why: 'Comments are not checked by anything.' }], correct: 0 };

    /* ============================ M8: GitHub planning ============================ */
    var P = dart
      ? { title: 'Stock label on drink cards', story: 'As a customer, I want to see if a drink is almost sold out, so that I can choose something else.',
          crit: ["Shows 'Sold out' when the count is 0 or less", "Shows 'Low stock' when the count is 1 to 4", "Shows 'In stock' when the count is 5 or more"],
          testNames: ["shows Sold out when the count is 0 or less", "shows Low stock when the count is 1 to 4", "shows In stock when the count is 5 or more"],
          card: '#12 Stock label', branch: '12-stock-label', commits: ["test: add failing test for Sold out label   (Red)", "feat: show Sold out when stock is zero      (Green)", "refactor: extract soldOutAt constant        (Refactor)"],
          pretty: 'drink cards', ph: 'Stock label on drink cards', phStory: 'As a customer, I want to see if a drink is almost sold out, so that I can choose something else.', ph1: "- [ ] Shows 'Sold out' when the count is 0 or less" }
      : { title: 'Player health', story: 'As a player, I want my health to behave sensibly, so that the game feels fair.',
          crit: ['Taking damage reduces current health', 'Current health never drops below zero', 'Healing never goes above maximum health'],
          testNames: ['TakeDamage_ReducesCurrent', 'TakeDamage_NeverBelowZero', 'Heal_NeverAboveMax'],
          card: '#12 Player health', branch: '12-player-health', commits: ['test: add failing test for damage below zero   (Red)', 'feat: clamp health at zero                    (Green)', 'refactor: extract MinHealth constant          (Refactor)'],
          pretty: 'the player', ph: 'Player health', phStory: 'As a player, I want my health to behave sensibly, so that the game feels fair.', ph1: '- [ ] Taking damage reduces current health' };
    X.P = P;
    X.issueCard = '<div class="gh"><div class="gh-h"><span>' + P.title + '</span><span class="state">Open</span></div><div class="gh-b"><p><span class="lab">tdd</span><span class="lab">feature</span></p><p><strong>User story:</strong> ' + P.story + '</p><p><strong>Acceptance criteria</strong></p><ul>' + P.crit.map(function (c) { return '<li>&#9744; ' + c.replace(/</g, '&lt;') + '</li>'; }).join('') + '</ul></div></div>';
    X.mapTable = '<table class="map"><caption class="sr-only">Acceptance criteria and matching tests</caption><thead><tr><th scope="col">Acceptance criterion</th><th scope="col">' + (dart ? 'Test description' : 'Test method name') + '</th></tr></thead><tbody>' +
      P.crit.map(function (c, i) { return '<tr><td>' + c.replace(/</g, '&lt;') + '</td><td><code>' + P.testNames[i] + '</code></td></tr>'; }).join('') + '</tbody></table>';
    X.quizCrit = dart
      ? { q: 'Which acceptance criterion is easiest to turn into a test?', opts: [{ t: 'The drink cards should look nice', why: 'What does "nice" mean? Nobody can write a test for that.' }, { t: "Shows 'Sold out' when the count is 0 or less", why: 'Correct. It has a clear input and a clear expected output.' }, { t: 'The app should feel fast', why: 'Too vague to test as written.' }, { t: 'Code should be clean', why: 'Important, but it is not a behaviour to test. Refactoring covers that.' }], correct: 1 }
      : { q: 'Which acceptance criterion is easiest to turn into a test?', opts: [{ t: 'The player should feel powerful', why: 'Feelings cannot be tested with code.' }, { t: 'Current health never drops below zero', why: 'Correct. It has a clear input and a clear expected output.' }, { t: 'The game should be fun', why: 'Too vague to test as written.' }, { t: 'Code should be clean', why: 'Important, but it is not a behaviour to test. Refactoring covers that.' }], correct: 1 };
    X.issueMd = '## User story\nAs a [who], I want [what], so that [why].\n\n## Acceptance criteria\n- [ ] Criterion one (becomes a test)\n- [ ] Criterion two (becomes a test)\n- [ ] Criterion three (becomes a test)\n\n## Notes\nEdge cases to remember: zero, empty, boundaries.';
    X.simIssue = { ph: P.ph, story: P.phStory, crit: ph1crit(P), mkTest: function (c) {
      if (dart) return "test('" + c.replace(/'/g, '') + "', () {\n  // TODO: write the expectation\n});";
      var name = c.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).map(function (w) { return w[0].toUpperCase() + w.slice(1); }).join('_');
      return '[Test]\npublic void ' + (name || 'NewTest') + '()\n{\n    // TODO: write the assertion\n}';
    }, startersTitle: dart ? 'Starter tests, one per criterion (Dart)' : 'Starter tests, one per criterion (C#)', card: P.card, lang: L };
    function ph1crit(p) { return p.ph1; }

    /* ============================ M9: ship ============================ */
    X.ci = dart
      ? 'name: Tests\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: subosito/flutter-action@v2\n        with:\n          channel: stable\n      - run: flutter pub get\n      - run: flutter test'
      : 'name: Tests\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          lfs: true\n      - uses: game-ci/unity-test-runner@v4\n        env:\n          UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}\n        with:\n          testMode: editmode';
    X.ciNote = dart
      ? '<p>This uses the community <code>flutter-action</code> to install Flutter, then runs <code>flutter test</code>. Save it as <code>.github/workflows/tests.yml</code>.</p>'
      : '<p>This uses the community <code>game-ci/unity-test-runner</code> action to run your {editmode} tests. Unity needs a licence, so you add it once as a repository secret called <code>UNITY_LICENSE</code> (see the game-ci documentation). Save the file as <code>.github/workflows/tests.yml</code>.</p>';
    X.prCommits = dart
      ? [{ msg: 'test: add failing test for Sold out label', tag: 'Red', cls: 'red', code: "String stockLabel(int count) {\n  return 'In stock';\n}" },
         { msg: 'feat: show Sold out when stock is zero', tag: 'Green', cls: 'green', code: "String stockLabel(int count) {\n  if (count <= 0) {\n    return 'Sold out';\n  }\n  return 'In stock';\n}" },
         { msg: 'refactor: name the sold-out threshold', tag: 'Refactor', cls: 'blue', code: "const soldOutAt = 0;\n\nString stockLabel(int count) {\n  if (count <= soldOutAt) {\n    return 'Sold out';\n  }\n  return 'In stock';\n}" }]
      : [{ msg: 'test: add failing test for Dead label', tag: 'Red', cls: 'red', code: csClass('HealthLabels', 'public static string HealthState(int hp)\n{\n    return "Healthy";\n}') },
         { msg: 'feat: return Dead when health is zero', tag: 'Green', cls: 'green', code: csClass('HealthLabels', 'public static string HealthState(int hp)\n{\n    if (hp <= 0)\n    {\n        return "Dead";\n    }\n    return "Healthy";\n}') },
         { msg: 'refactor: name the dead threshold', tag: 'Refactor', cls: 'blue', code: csClass('HealthLabels', 'private const int DeadAt = 0;\n\npublic static string HealthState(int hp)\n{\n    if (hp <= DeadAt)\n    {\n        return "Dead";\n    }\n    return "Healthy";\n}') }];
    X.prTests = dart
      ? dartFile([dT('shows Sold out at zero', ["expect(stockLabel(0), equals('Sold out'));"]), dT('shows In stock for plenty', ["expect(stockLabel(9), equals('In stock'));"])])
      : csFile('HealthLabelsTests', [cT('HealthState_Zero_IsDead', ['Assert.AreEqual("Dead", HealthLabels.HealthState(0));']), cT('HealthState_Plenty_IsHealthy', ['Assert.AreEqual("Healthy", HealthLabels.HealthState(100));'])]);
    X.prFile = dart ? 'lib/stock_label.dart' : 'Assets/Scripts/HealthLabels.cs';
    X.prTitle = dart ? 'Add stock label for drink cards' : 'Add health label for the player';
    X.quizClose = { q: 'You write "Closes #12" in a pull request description. What happens when the pull request is merged?', opts: [{ t: 'Nothing. It is just a comment.', why: 'GitHub reads those words and acts on them.' }, { t: 'Issue 12 is closed automatically.', why: 'Correct. The issue closes and any linked Project card moves to Done.' }, { t: 'The branch is renamed to 12.', why: 'Branch names are not changed by this.' }, { t: 'The tests are skipped.', why: 'It has no effect on tests. Your Actions workflow still runs them.' }], correct: 1 };
    X.quizCommit = dart
      ? { q: 'You just made a new test pass and all tests are green. Which commit message fits best?', opts: [{ t: 'stuff', why: 'Messages should say what changed. "stuff" helps nobody.' }, { t: 'test: add failing test for empty cart', why: 'That describes a Red step. Your test is already passing now.' }, { t: 'feat: show Sold out when stock is zero', why: 'Correct. It describes the behaviour you just added (Green).' }, { t: 'fixed it', why: 'Say what you fixed. Future you will not remember.' }], correct: 2 }
      : { q: 'You just made a new test pass and all tests are green. Which commit message fits best?', opts: [{ t: 'stuff', why: 'Messages should say what changed. "stuff" helps nobody.' }, { t: 'test: add failing test for health below zero', why: 'That describes a Red step. Your test is already passing now.' }, { t: 'feat: clamp health at zero', why: 'Correct. It describes the behaviour you just added (Green).' }, { t: 'fixed it', why: 'Say what you fixed. Future you will not remember.' }], correct: 2 };
    X.unityNote = dart ? '' : '<p class="callout"><strong>Unity tip:</strong> add a <code>.gitignore</code> for Unity (the <code>Library</code>, <code>Temp</code> and <code>Logs</code> folders should never be committed) and commit the <code>.meta</code> files. Small commits matter even more in Unity because scene and prefab files are easy to break.</p>';

    /* ============================ M10: final ============================ */
    function healthClass(o) {
      o = o || {};
      return csClass('Health',
        'public int Max { get; private set; }\npublic int Current { get; private set; }\npublic bool IsDead { get { return ' + (o.isDead || 'Current <= 0') + '; } }\n\n' +
        'public Health(int max)\n{\n    Max = max;\n    Current = max;\n}\n\n' +
        'public void TakeDamage(int amount)\n{\n' + (o.dmgGuard === false ? '' : '    if (amount <= 0) return;\n') + '    ' + (o.dmg || 'Current = Mathf.Max(0, Current - amount);') + '\n}\n\n' +
        'public void Heal(int amount)\n{\n' + (o.healGuard === false ? '' : '    if (amount <= 0) return;\n') + '    ' + (o.heal || 'Current = Mathf.Min(Max, Current + amount);') + '\n}', false);
    }
    var healthStub = csClass('Health', 'public int Max { get; private set; }\npublic int Current { get; private set; }\npublic bool IsDead { get { return false; } }\n\npublic Health(int max)\n{\n    Max = max;\n    Current = max;\n}\n\npublic void TakeDamage(int amount)\n{\n}\n\npublic void Heal(int amount)\n{\n}', false);
    X.finalCard = dart
      ? '<div class="gh"><div class="gh-h"><span>Password field validation</span><span class="state">Ready</span></div><div class="gh-b"><p><span class="lab">tdd</span><span class="lab">feature</span></p><p><strong>User story:</strong> As a new user, I want clear feedback on my password, so that I can fix it before I sign up.</p><p><strong>Acceptance criteria</strong> (for <code>String? validatePassword(String? value)</code>, the kind of function a Flutter <code>TextFormField</code> validator uses)</p><ul><li>&#9744; Returns <code>null</code> when the password is valid</li><li>&#9744; Returns <code>\'Required\'</code> when it is null or empty</li><li>&#9744; Returns <code>\'Use at least 8 characters\'</code> when shorter than 8</li><li>&#9744; Returns <code>\'Add a number\'</code> when it has no digit</li><li>&#9744; Returns <code>\'Add a capital letter\'</code> when it has no capital</li></ul></div></div>'
      : '<div class="gh"><div class="gh-h"><span>Player health component</span><span class="state">Ready</span></div><div class="gh-b"><p><span class="lab">tdd</span><span class="lab">feature</span></p><p><strong>User story:</strong> As a player, I want my health to behave sensibly, so that the game feels fair.</p><p><strong>Acceptance criteria</strong> (for a plain C# class <code>Health</code> with <code>Max</code>, <code>Current</code>, <code>IsDead</code>, <code>TakeDamage(int)</code> and <code>Heal(int)</code>)</p><ul><li>&#9744; A new Health starts with Current equal to Max</li><li>&#9744; TakeDamage reduces Current, but never below 0</li><li>&#9744; Heal increases Current, but never above Max</li><li>&#9744; IsDead is true at 0 and false above 0</li><li>&#9744; Zero or negative amounts change nothing</li></ul></div></div>';
    X.final1 = dart
      ? { fn: 'validatePassword', minTests: 6,
          brief: '<p>Turn the acceptance criteria into at least <strong>6 tests</strong>. Remember the boundary at 8 characters, <code>null</code>, an empty string, a password with no number and one with no capital. The checker plants bugs in hidden versions of the function, and your tests must catch every one.</p>',
          stub: 'String? validatePassword(String? value) {\n  return null;\n}',
          starter: "import 'package:flutter_test/flutter_test.dart';\n\nvoid main() {\n  // One test per acceptance criterion, plus edge cases.\n  // Valid example: 'Sunny2day'\n}\n",
          reference: "String? validatePassword(String? value) {\n  if (value == null || value.isEmpty) return 'Required';\n  if (value.length < 8) return 'Use at least 8 characters';\n  if (!value.contains(RegExp(r'[0-9]'))) return 'Add a number';\n  if (!value.contains(RegExp(r'[A-Z]'))) return 'Add a capital letter';\n  return null;\n}",
          mutants: [
            "String? validatePassword(String? value) {\n  if (value == null || value.isEmpty) return 'Required';\n  if (value.length < 7) return 'Use at least 8 characters';\n  if (!value.contains(RegExp(r'[0-9]'))) return 'Add a number';\n  if (!value.contains(RegExp(r'[A-Z]'))) return 'Add a capital letter';\n  return null;\n}",
            "String? validatePassword(String? value) {\n  if (value == null || value.isEmpty) return 'Required';\n  if (value.length <= 8) return 'Use at least 8 characters';\n  if (!value.contains(RegExp(r'[0-9]'))) return 'Add a number';\n  if (!value.contains(RegExp(r'[A-Z]'))) return 'Add a capital letter';\n  return null;\n}",
            "String? validatePassword(String? value) {\n  if (value == null || value.isEmpty) return 'Required';\n  if (value.length < 8) return 'Use at least 8 characters';\n  if (!value.contains(RegExp(r'[A-Z]'))) return 'Add a capital letter';\n  return null;\n}",
            "String? validatePassword(String? value) {\n  if (value == null || value.isEmpty) return 'Required';\n  if (value.length < 8) return 'Use at least 8 characters';\n  if (!value.contains(RegExp(r'[0-9]'))) return 'Add a number';\n  return null;\n}",
            "String? validatePassword(String? value) {\n  if (value.isEmpty) return 'Required';\n  if (value.length < 8) return 'Use at least 8 characters';\n  if (!value.contains(RegExp(r'[0-9]'))) return 'Add a number';\n  if (!value.contains(RegExp(r'[A-Z]'))) return 'Add a capital letter';\n  return null;\n}"],
          hints: ["Write one test for a valid password: expect(validatePassword('Sunny2day'), isNull);", "Then one test per message. Example: expect(validatePassword('Ab1'), equals('Use at least 8 characters'));", "Add boundary tests: exactly 8 characters with a number and capital (valid) and 7 characters (too short). Do not forget null and an empty string."] }
      : { fn: 'Health', minTests: 6,
          brief: '<p>Turn the acceptance criteria into at least <strong>6 tests</strong>. Remember damage bigger than the remaining health, healing past the maximum, exactly zero health, and zero or negative amounts. The checker plants bugs in hidden versions of the class, and your tests must catch every one.</p>',
          stub: healthStub,
          starter: 'using NUnit.Framework;\n\n[TestFixture]\npublic class HealthTests\n{\n    // One test per acceptance criterion, plus edge cases.\n    // Tip: a [SetUp] method can create a fresh Health(100) before every test.\n}\n',
          reference: healthClass(),
          mutants: [healthClass({ dmg: 'Current -= amount;' }), healthClass({ heal: 'Current += amount;' }), healthClass({ isDead: 'Current < 0' }), healthClass({ dmgGuard: false }), healthClass({ healGuard: false })],
          hints: ['Write a test for a new Health(100): Current should be 100.', 'Then test TakeDamage(30) gives 70, TakeDamage(500) gives 0, and IsDead at exactly 0.', 'Also test Heal(10) after damage, Heal beyond Max, and TakeDamage(-5) and Heal(-5) leaving Current unchanged.'] };
    X.final2 = dart
      ? { brief: '<p>Your teammate wrote these tests from the same issue. The function is a {stub} that always returns <code>null</code>. Write <code>validatePassword</code> so every test passes. Run often, and fix one failure at a time.</p>',
          stub: 'String? validatePassword(String? value) {\n  return null;\n}',
          tests: dartFile([dT('valid password returns null', ["expect(validatePassword('Sunny2day'), isNull);"]), dT('exactly 8 characters is valid', ["expect(validatePassword('Abcdef12'), isNull);"]), dT('null is required', ["expect(validatePassword(null), equals('Required'));"]), dT('empty is required', ["expect(validatePassword(''), equals('Required'));"]), dT('7 characters is too short', ["expect(validatePassword('Abcde12'), equals('Use at least 8 characters'));"]), dT('no number asks for a number', ["expect(validatePassword('Sunnyyday'), equals('Add a number'));"]), dT('no capital asks for a capital', ["expect(validatePassword('sunny2day'), equals('Add a capital letter'));"])]),
          hints: ["Handle null and empty first: if (value == null || value.isEmpty) return 'Required';", "Next check the length: if (value.length < 8) return 'Use at least 8 characters';", "Use value.contains(RegExp(r'[0-9]')) for a digit and RegExp(r'[A-Z]') for a capital. Return null at the end."] }
      : { brief: '<p>Your teammate wrote these tests from the same issue. The class is a {stub}: the methods do nothing. Make every test pass. Run often, and fix one failure at a time.</p>',
          stub: healthStub,
          tests: csFile('HealthTests', [
            cT('NewHealth_StartsAtMax', ['var health = new Health(100);', 'Assert.AreEqual(100, health.Current);']),
            cT('TakeDamage_ReducesCurrent', ['var health = new Health(100);', 'health.TakeDamage(30);', 'Assert.AreEqual(70, health.Current);']),
            cT('TakeDamage_MoreThanHealth_StopsAtZero', ['var health = new Health(100);', 'health.TakeDamage(500);', 'Assert.AreEqual(0, health.Current);']),
            cT('Heal_IncreasesCurrent', ['var health = new Health(100);', 'health.TakeDamage(50);', 'health.Heal(20);', 'Assert.AreEqual(70, health.Current);']),
            cT('Heal_PastMax_StopsAtMax', ['var health = new Health(100);', 'health.TakeDamage(10);', 'health.Heal(500);', 'Assert.AreEqual(100, health.Current);']),
            cT('IsDead_AtZero_IsTrue', ['var health = new Health(100);', 'health.TakeDamage(100);', 'Assert.IsTrue(health.IsDead);']),
            cT('IsDead_WhenAlive_IsFalse', ['var health = new Health(100);', 'Assert.IsFalse(health.IsDead);']),
            cT('NegativeAmounts_ChangeNothing', ['var health = new Health(100);', 'health.TakeDamage(-10);', 'health.Heal(-10);', 'Assert.AreEqual(100, health.Current);'])]),
          hints: ['Do one method at a time. TakeDamage first: Current = Current - amount;', 'Use Mathf.Max(0, ...) so health never drops below zero, and Mathf.Min(Max, ...) so Heal never goes above Max.', 'IsDead is Current <= 0. For negative or zero amounts, return early: if (amount <= 0) return;'] };

    /* ============================ assemble ============================ */
    var modules = [
      { id: 'idea', title: 'The big idea', time: 10, goal: 'Explain what {TDD} is and describe the Red, Green, Refactor loop in your own words.', steps: [
        { title: 'Test first, code second', type: 'read', html:
          '<p>Most people write code first, then run the ' + X.app + ' and click around to see if it works. {TDD} flips this around.</p>' +
          '<ol><li>You write a small {test} that describes what the code <em>should</em> do.</li><li>The test fails, because the code does not exist yet.</li><li>You write the code that makes the test pass.</li></ol>' +
          '<p>Think of a marking scheme. If you know exactly how your work will be marked <em>before</em> you start, you do a better job. A test is a marking scheme for your code.</p>' },
        { title: 'The loop: Red, Green, Refactor', type: 'read', html:
          '<p>TDD works in short laps. Each lap takes a few minutes.</p>' +
          '<ol class="loop"><li class="l-red"><h4>1. {red}</h4><p>Write one test for one tiny behaviour. Run it. It must fail.</p></li><li class="l-green"><h4>2. {green}</h4><p>Write the simplest code that makes the test pass. Nothing extra.</p></li><li class="l-blue"><h4>3. {refactor}</h4><p>Tidy up your code and your test. Run the tests again. They stay green.</p></li></ol>' +
          '<p class="loop-note">Then go round again with the next small behaviour.</p><p>The colours come from test runners, which show failing tests in red and passing tests in green.</p>' },
        { title: 'Why bother?', type: 'read', html:
          '<ul><li><strong>You catch mistakes early.</strong> A failing test tells you the problem within seconds, not after you have played through three levels or tapped through five screens.</li><li><strong>You can change code without fear.</strong> If something breaks, a {regression} shows up straight away.</li><li><strong>You think before you type.</strong> Writing the test makes you decide what "correct" means.</li><li><strong>Your tests explain the code.</strong> New people can read them to see what each part is meant to do.</li></ul>' +
          '<p class="note"><strong>Be honest about limits:</strong> TDD is less useful for quick throw-away experiments or for deciding how a screen should look or a game should feel. It shines on logic: calculations, rules and data handling.</p>' },
        { title: 'Where do tests live in your project?', type: 'read', html: X.where },
        { title: 'Check: what comes first?', type: 'quiz', q: 'In TDD, what is the very first thing you do on each lap?', opts: [{ t: 'Write the code for the feature', why: 'In TDD the code comes second. You need a test to aim at first.' }, { t: 'Write a test that fails', why: 'Right. A failing test proves the behaviour is missing and gives you a target.' }, { t: 'Tidy up the code', why: 'Tidying (refactoring) is the last part of the lap, not the first.' }, { t: 'Ask someone to review it', why: 'Review matters, but it happens later, once the work exists.' }], correct: 1 },
        { title: 'Check: put the loop in order', type: 'quiz', q: 'Which order is the TDD loop?', opts: [{ t: 'Green, Red, Refactor', why: 'Green cannot come first. There must be a failing test before you make anything pass.' }, { t: 'Refactor, Red, Green', why: 'You refactor working code, so it comes last.' }, { t: 'Red, Green, Refactor', why: 'Correct. Fail, pass, then tidy.' }, { t: 'Red, Refactor, Green', why: 'You should not tidy while a test is failing. Get to green first.' }], correct: 2 }
      ] },

      { id: 'anatomy', title: 'Anatomy of a test', time: 12, goal: 'Read a test, run it, understand a failure message, and make your first failing test pass.', steps: [
        { title: 'Three parts of every test', type: 'read', html: X.anatomy + '<p>This course checks your ' + (dart ? 'Dart' : 'C#') + ' right here in the browser, using a small built-in test runner. It supports a useful part of the language (functions, classes, if, loops, strings and lists), and your real project\'s compiler checks everything else.</p>' },
        { title: 'Run a passing test', type: 'demo', expect: 'pass', intro: '<p>Here is some code and two tests. Press <strong>Run tests</strong>. Everything should go green.</p>', code: X.addCode, tests: X.addTests },
        { title: 'Run a failing test', type: 'demo', expect: 'fail', intro: '<p>Now the code has a bug: it subtracts instead of adding. Run the tests. <strong>They should fail.</strong> A failing test is not a problem. It is the test doing its job.</p><p>Read the message under each failure. It tells you what the test wanted and what the code gave.</p>', code: X.addBug, tests: X.addTests },
        { title: 'Check: spot the parts', type: 'quiz', q: X.quizAnat.q, opts: X.quizAnat.opts, correct: X.quizAnat.correct },
        { title: 'Your turn: make it green', type: 'task', kind: 'fix', brief: X.dbl.brief, stub: X.dbl.stub, tests: X.dbl.tests, hints: X.dbl.hints }
      ] },

      { id: 'red', title: 'Red: write the failing test', time: 12, goal: 'Choose a tiny behaviour, write a test that fails for the right reason, and write your own tests.', steps: [
        { title: 'Start with the smallest behaviour', type: 'read', html: '<p>Do not try to test everything at once. Pick <strong>one</strong> small behaviour and write one test for it.</p>' + X.evenIntro + X.nameTip },
        { title: 'See it fail', type: 'demo', expect: 'fail', intro: X.evenIntroDemo, code: X.evenDemo.code, tests: X.evenDemo.tests },
        { title: 'Fail for the right reason', type: 'read', html: '<p>A red test is only useful if it fails <em>for the reason you expect</em>.</p><ul><li><strong>Good red:</strong> "Expected true but was false". The behaviour is missing.</li><li><strong>Bad red:</strong> a typo in the test, or a missing bracket. That tells you nothing about your code.</li><li><strong>Suspicious:</strong> a new test that passes straight away. Either the behaviour already existed or the test checks nothing.</li></ul><p>Always run the test and <em>see it fail</em> before you write the code. It is the only way to know the test can fail at all.</p>' },
        { title: 'Your turn: write the tests', type: 'task', kind: 'write-test', fn: 'even', minTests: 3, brief: X.even.brief, stub: X.even.stub, starter: X.even.starter, reference: X.even.reference, mutants: X.even.mutants, hints: X.even.hints }
      ] },

      { id: 'green', title: 'Green: the simplest code', time: 12, goal: 'Write just enough code to pass each test, and let new tests grow the solution step by step.', steps: [
        { title: 'Write the simplest thing', type: 'read', html: '<p>In the {green} step your only job is to make the failing test pass. Do not add extra features. Do not guess what you might need later.</p><p>This feels strange at first. It keeps your code small and means every line exists because a test asked for it.</p><p class="note"><strong>Rule of thumb:</strong> if no test needs the line, do not write it yet.</p>' },
        { title: 'Fake it, then prove it', type: 'read', html: X.fakeIntro + '<p>Each new test pushes the code to become more general. Adding tests to force better code is called <em>triangulation</em>.</p>' },
        { title: 'Check: what is "simplest"?', type: 'quiz', q: X.quizGreen.q, opts: X.quizGreen.opts, correct: X.quizGreen.correct },
        { title: 'Your turn: grow the rules', type: 'task', kind: 'fix', brief: X.label.brief, stub: X.label.stub, tests: X.label.tests, hints: X.label.hints }
      ] },

      { id: 'refactor', title: 'Refactor: tidy up safely', time: 12, goal: 'Improve working code without changing what it does, using your tests as a safety net.', steps: [
        { title: 'Tests are your safety net', type: 'read', html: X.refIntro },
        { title: 'Before: works, but full of magic numbers', type: 'demo', expect: 'pass', intro: '<p>This code works, and the tests prove it. But the numbers 10, 20, 5 and 10 have no names.</p>', code: X.discBefore, tests: X.discTests },
        { title: 'After: same tests, tidier code', type: 'demo', expect: 'pass', intro: '<p>We gave the numbers names. The <strong>tests did not change</strong>, and they still pass. That is how you know the behaviour stayed the same.</p>', code: X.discAfter, tests: X.discTests },
        { title: 'Your turn: refactor', type: 'task', kind: 'refactor', brief: X.tier.brief, stub: X.tier.stub, tests: X.tier.tests, magic: X.tier.magic, hints: X.tier.hints },
        { title: 'Check: when is it safe?', type: 'quiz', q: 'When is it safe to refactor?', opts: [{ t: 'While a test is failing, so you can fix both at once', why: 'Mixing a fix and a tidy-up makes it hard to tell what broke. Get to green first.' }, { t: 'When all tests are green', why: 'Correct. Green tests are your safety net.' }, { t: 'Before writing any tests', why: 'Without tests you cannot tell whether you changed the behaviour.' }, { t: 'Only at the very end of a project', why: 'Small tidy-ups every lap stop mess from piling up.' }], correct: 1 }
      ] },

      { id: 'good', title: 'Good tests and edge cases', time: 15, goal: 'Write clear tests, hunt for edge cases, run many cases at once, and prove your tests can catch real bugs.', steps: [
        { title: 'Clear tests', type: 'read', html: '<p>Good tests are easy to read and fail for one reason only.</p>' + X.clearTests },
        { title: 'Hunt for edge cases', type: 'read', html: '<p>Bugs love the edges. For every function, ask: what happens at the limits? Try the <strong>Zero, One, Many, Edge</strong> list:</p><ul><li><strong>Zero:</strong> 0, an empty string, an empty list.</li><li><strong>One:</strong> a single item.</li><li><strong>Many:</strong> a typical example with several items.</li><li><strong>Edge:</strong> negative numbers, the exact {boundary}, the biggest and smallest allowed values' + (dart ? ', <code>null</code>' : '') + '.</li></ul>' + X.edgeExamples + '<p>These are all {edge}s. Most real bugs hide on those lines.</p>' },
        { title: 'Check: the best test name', type: 'quiz', q: X.quizName.q, opts: X.quizName.opts, correct: X.quizName.correct },
        { title: 'Run many cases at once', type: 'demo', expect: 'pass', intro: X.manyCases.intro, code: X.manyCases.code, tests: X.manyCases.tests },
        { title: 'Do your tests catch bugs?', type: 'read', html: '<p>Passing tests do not prove the code is right. They only prove the code is right <em>for the cases you wrote</em>.</p><p>A smart way to check test quality is to add a bug on purpose and see if the tests notice. We call that a {mutant}. If your tests still pass, they have a gap.</p><p>In the next task the checker has several hidden buggy versions of the code. Your tests need to fail on every one of them. The only way to do that is to cover the edges.</p>' },
        { title: 'Your turn: test the edges', type: 'task', kind: 'write-test', fn: 'clamp', minTests: 5, brief: X.clamp.brief, stub: X.clamp.stub, starter: X.clamp.starter, reference: X.clamp.reference, mutants: X.clamp.mutants, hints: X.clamp.hints }
      ] },

      { id: 'beyond', title: 'Beyond logic: ' + (dart ? 'widgets' : 'scenes'), time: 10, goal: 'Keep rules in plain code so they are easy to test, and know when a ' + (dart ? 'widget' : 'PlayMode') + ' test fits.', steps: [
        { title: dart ? 'Keep the rules out of widgets' : 'Keep the rules out of MonoBehaviours', type: 'read', html: X.splitRead },
        { title: dart ? 'Showcase: a widget test' : 'Showcase: a PlayMode test', type: 'demo', sim: true, intro: X.sim.intro, code: X.sim.code, tests: X.sim.tests, output: X.sim.output, testsTitle: dart ? 'Widget test' : 'PlayMode test' },
        { title: 'Check: where does the rule live?', type: 'quiz', q: X.quizSplit.q, opts: X.quizSplit.opts, correct: X.quizSplit.correct },
        { title: 'How many of each kind?', type: 'read', html: '<p>Think of a pyramid. At the bottom are lots of fast tests for plain logic. In the middle are a few ' + (dart ? 'widget tests' : '{editmode} tests that use several classes together') + '. At the top are very few ' + (dart ? 'integration tests that run the whole app' : '{playmode} tests that run a real scene') + '.</p><p>The more of your rules you keep in plain ' + (dart ? 'Dart' : 'C#') + ', the more of your game or app you can build with fast Red, Green, Refactor laps. That is why the rest of this course stays with plain logic.</p>' }
      ] },

      { id: 'plan', title: 'Plan it with GitHub issues and Projects', time: 15, goal: 'Turn an idea into a GitHub issue with testable acceptance criteria and track it on a Project board.', steps: [
        { title: 'From idea to issue', type: 'read', html: '<p>Before you write any test you need to know what you are building. On GitHub, that starts with an {issue}.</p><p>A good issue has a short title, a {story} and {criteria}:</p>' + X.issueCard + '<p>Each issue is <em>one</em> small piece of work. If it feels big, split it into several issues.</p>' },
        { title: 'Criteria become test names', type: 'read', html: '<p>Here is the link between GitHub and TDD. <strong>Every acceptance criterion becomes at least one test.</strong> You do not need to invent tests from nothing.</p>' + X.mapTable + '<p>When all the tests are green, all the criteria are met, and the issue is finished.</p>' },
        { title: 'Check: a testable criterion', type: 'quiz', q: X.quizCrit.q, opts: X.quizCrit.opts, correct: X.quizCrit.correct },
        { title: 'Track work on a Project board', type: 'read', html:
          '<p>A {project} shows all your issues as cards on one board. Your team sees at a glance what is waiting, what is being built and what is done.</p>' +
          '<ol class="board"><li><b>Backlog</b>Ideas not yet planned</li><li><b>Ready</b>Has acceptance criteria</li><li><b>In progress</b>Red, Green, Refactor happens here</li><li><b>In review</b>A {pr} is open</li><li><b>Done</b>Merged and closed</li></ol>' +
          '<p>An issue is <strong>Ready</strong> only when its acceptance criteria are written. That is your "definition of ready" for TDD.</p>' +
          '<h4>How to set one up</h4><ol><li>Open your repository on GitHub and choose <strong>Projects</strong>, then <strong>New project</strong>.</li><li>Pick the <strong>Board</strong> template.</li><li>Rename the Status columns to match the five above.</li><li>Choose <strong>Add item</strong> and search for an issue, or press <kbd>+</kbd> in a column to create one.</li></ol><p>Use {label}s such as <code>tdd</code>, <code>bug</code> and <code>feature</code> to filter the board.</p>' },
        { title: 'Copy the issue template', type: 'read', html: '<p>Use this body whenever you create a new issue. It forces you to write acceptance criteria <em>before</em> any code.</p>' + C(X.issueMd, { title: 'Issue body (Markdown)', lang: 'text', copy: true }) + '<p class="callout">This repository already includes it as an issue form in <code>.github/ISSUE_TEMPLATE</code>. If you copy or fork the repository, the same form appears when you press <strong>New issue</strong>.</p>' },
        { title: 'Showcase: create the issue', type: 'showcase', demo: 'issue', intro: '<p>Practise on a safe copy of GitHub\'s <strong>New issue</strong> page. The fields start with a ' + (dart ? 'Flutter' : 'Unity') + ' example. Replace the example criteria with your own (or the ones from this lesson), then press <strong>Submit new issue</strong>.</p>' },
        { title: 'Showcase: move the card across the board', type: 'showcase', demo: 'board', intro: '<p>Your issue is now a card on a {project} board. Move it from <strong>Backlog</strong> to <strong>Done</strong>. Each column has a rule that must be met first, just like a real team\'s "definition of done". The buttons work with a keyboard, so no dragging is needed.</p>' },
        { title: 'Try it in your own repository', type: 'checklist', intro: '<p>Do these on GitHub, then tick each box. These are honour-based, so be honest: the next module builds on them.</p>', items: ['I have a repository to practise in (a new empty one is fine).', 'I created a Project using the Board template.', 'I created an issue with a user story and at least three acceptance criteria as a checklist.', 'I added the issue to my Project and moved it to Ready.'] }
      ] },

      { id: 'ship', title: 'Branch, commit, review, merge', time: 15, goal: 'Work on an issue in a branch, record Red, Green and Refactor in your commits, and merge through a pull request that runs your tests.', steps: [
        { title: 'One issue, one branch', type: 'read', html: '<p>Never build on the {main}. Create a {branch} for each issue. Put the issue number in the name so it is easy to link back:</p>' + C(P.branch, { title: 'Branch name', lang: 'text' }) + '<p>The easy way: open the issue on GitHub, find <strong>Development</strong> in the right-hand sidebar and choose <strong>Create a branch</strong>. GitHub links the branch to the issue for you.</p>' + X.unityNote },
        { title: 'Commits tell the Red, Green, Refactor story', type: 'read', html: '<p>A {commit} is a saved snapshot. Make a small one at the end of each step of the loop. Run your tests before every commit.</p>' + C(P.commits.join('\n'), { title: 'Commit messages', lang: 'text', copy: true }) + '<p>Anyone reading your history can see that you wrote the test first. It is also easy to undo one small commit if something goes wrong.</p>' },
        { title: 'Check: which commit?', type: 'quiz', q: X.quizCommit.q, opts: X.quizCommit.opts, correct: X.quizCommit.correct },
        { title: 'Open a pull request that closes the issue', type: 'read', html: '<p>When the work is done, push your branch and open a {pr}. Link the issue in the description:</p>' + C('## What changed\nAdds ' + (dart ? 'the stock label for drink cards' : 'health clamping for the player') + ' with tests.\n\n## How I tested\n- [x] Wrote the failing tests first\n- [x] All tests pass\n- [x] Refactored with tests green\n\nCloses #12', { title: 'Pull request description (Markdown)', lang: 'text', copy: true }) + '<p>The words <code>Closes #12</code> are special. When the pull request is merged, GitHub <strong>closes issue 12 automatically</strong> and the card on your Project moves to Done.</p><p>This repository includes this as a pull request template in <code>.github</code>.</p>' },
        { title: 'Let GitHub run your tests', type: 'read', html: '<p>{ci} runs your tests on every push so nobody has to remember to. On GitHub it is called <strong>GitHub Actions</strong>.</p>' + X.ciNote + C(X.ci, { title: '.github/workflows/tests.yml', lang: 'text', copy: true }) + '<p>You will see a green tick or a red cross on every pull request. In <strong>Settings, Branches</strong> you can require that check to pass before anything is merged into main.</p>' },
        { title: 'Showcase: a pull request with live checks', type: 'showcase', demo: 'pr', intro: '<p>This is a simulated {pr}. The checks run <strong>real tests</strong> on each commit. Start with the Red commit, watch the check fail and block the merge, then push the next commits and merge once it turns green.</p>' },
        { title: 'Check: what does it do?', type: 'quiz', q: X.quizClose.q, opts: X.quizClose.opts, correct: X.quizClose.correct },
        { title: 'Try it in your own repository', type: 'checklist', intro: '<p>Use the issue from the last module. Tick each box when it is done on GitHub.</p>', items: ['I created a branch from my issue (the name includes the issue number).', 'I made at least three commits: one Red, one Green and one Refactor.', 'I opened a pull request with "Closes #" and the issue number.', 'I merged the pull request and saw the issue close and the card move to Done.'] }
      ] },

      { id: 'final', title: 'Final challenge: ' + (dart ? 'password validator' : 'player health'), time: 20, goal: 'Put it all together: start from an issue, write tests first, make them pass, and be ready to ship.', steps: [
        { title: 'The issue', type: 'read', html: '<p>A teammate has put this issue in <strong>Ready</strong> on your board. You will do the work in two parts, just like a real lap of TDD.</p>' + X.finalCard + '<ol><li><strong>Part 1, {red}:</strong> write your own tests from the criteria.</li><li><strong>Part 2, {green}:</strong> make your team\'s tests pass.</li></ol>' },
        { title: 'Part 1: write the tests (Red)', type: 'task', kind: 'write-test', fn: X.final1.fn, minTests: X.final1.minTests, brief: X.final1.brief, stub: X.final1.stub, starter: X.final1.starter, reference: X.final1.reference, mutants: X.final1.mutants, hints: X.final1.hints },
        { title: 'Part 2: make the tests pass (Green)', type: 'task', kind: 'fix', brief: X.final2.brief, stub: X.final2.stub, tests: X.final2.tests, hints: X.final2.hints },
        { title: 'Ready to ship', type: 'checklist', intro: '<p>Final step. Before you would merge this in a real project, you check the whole loop. Be honest with each one.</p>', items: ['I wrote the tests before the code and saw them fail.', 'I wrote only enough code to make them pass.', 'I could refactor the code and the tests would tell me if I broke it.', 'I know how to link my work to an issue and a Project board with a branch and pull request.'] }
      ] }
    ];
    return { modules: modules, X: X };
  }

  root.TDD_COURSE = { tracks: TRACKS, build: build };
})(typeof self !== 'undefined' ? self : this);
