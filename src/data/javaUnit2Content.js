export const JAVA_UNIT2_CONTENT = {
  unit: "Unit 2",
  subject: "Java Programming",
  pdfUrl: "/notes/Java_Unit2_Complete_Notes.pdf",
  chapters: [
    {
      id: "collections-multithreading",
      number: "4",
      title: "Collections & Multithreading",
      topics: ["ArrayList", "LinkedList", "HashMap", "TreeMap", "HashSet", "Threads", "Synchronization"],
      color: "#2D3A8C",
      icon: "📦",
      sections: [
        {
          id: "collections-intro",
          title: "4.1 Collections Framework",
          content: [
            { type: "definition", heading: "Collections Framework", text: "A Collection represents a group of objects. Java Collections Framework provides Classes and Interfaces that allow us to write code quickly and efficiently for storing, retrieving, and manipulating groups of data." },
            { type: "simple", text: "Think of a Collection like a bag, list, or map. An array has fixed size — if you need to resize it, insert in between, or delete an element, you're stuck. Collections solve all this automatically." },
            { type: "table", headers: ["Problem with Arrays", "Solution with Collections"], rows: [
              ["Fixed size — cannot resize", "ArrayList grows/shrinks automatically"],
              ["No built-in search/sort", "Collections.sort(), contains(), etc."],
              ["Cannot store key-value pairs", "HashMap / TreeMap for key-value storage"],
              ["Cannot ensure unique elements", "HashSet / TreeSet guarantees uniqueness"],
            ]},
            { type: "table", headers: ["Collection", "Duplicates?", "Ordered?", "Key-Value?", "Best Use"], rows: [
              ["ArrayList",  "Yes", "Yes (insertion)", "No",  "Variable size list"],
              ["LinkedList", "Yes", "Yes (insertion)", "No",  "Frequent insert/delete"],
              ["HashMap",    "Keys: No", "No",         "Yes", "Fast key-value lookup"],
              ["TreeMap",    "Keys: No", "Sorted by key","Yes","Sorted key-value"],
              ["HashSet",    "No",  "No",              "No",  "Unique elements"],
            ]},
          ],
        },
        {
          id: "arraylist",
          title: "4.2 ArrayList",
          content: [
            { type: "definition", heading: "ArrayList", text: "ArrayList is a resizable array. It is part of java.util package and implements the List interface. It allows duplicate elements and maintains insertion order." },
            { type: "simple", text: "An ArrayList is like a shopping list on paper — you can keep adding items, remove items from the middle, and the list automatically adjusts. Unlike a normal array, you don't need to decide the size upfront." },
            { type: "code", filename: "ArrayListDemo.java", code: `import java.util.ArrayList;
import java.util.Collections;

public class ArrayListDemo {
  public static void main(String[] args) {
    ArrayList<String> fruits = new ArrayList<>();
    fruits.add("Mango");
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Mango"); // duplicates allowed!

    System.out.println("List: " + fruits);      // [Mango, Apple, Banana, Mango]
    System.out.println("Size: " + fruits.size()); // 4
    System.out.println("Index 1: " + fruits.get(1)); // Apple

    fruits.remove("Banana");
    System.out.println("After remove: " + fruits);  // [Mango, Apple, Mango]
    System.out.println("Has Apple? " + fruits.contains("Apple")); // true

    Collections.sort(fruits);
    System.out.println("Sorted: " + fruits);   // [Apple, Mango, Mango]

    for (String f : fruits) System.out.println(" -> " + f);
  }
}` },
          ],
        },
        {
          id: "linkedlist",
          title: "4.3 LinkedList",
          content: [
            { type: "definition", heading: "LinkedList", text: "LinkedList implements both the List and Deque interfaces. Elements are stored as nodes where each node holds data and a reference to the next node. Best when you need frequent insertions and deletions." },
            { type: "simple", text: "Imagine a treasure hunt — each clue tells you where the next one is. Each node holds its value AND a pointer to the next. Inserting in the middle is easy (just change pointers), but random access is slow." },
            { type: "table", headers: ["Feature", "ArrayList", "LinkedList"], rows: [
              ["Storage",         "Dynamic Array",       "Doubly Linked Nodes"],
              ["Access by index", "Fast O(1)",           "Slow O(n)"],
              ["Insert/Delete",   "Slow O(n)",           "Fast O(1) at ends"],
              ["Memory",          "Less overhead",       "More (stores pointers)"],
              ["Best use",        "Read-heavy",          "Insert/delete heavy"],
            ]},
            { type: "code", filename: "LinkedListDemo.java", code: `import java.util.LinkedList;

public class LinkedListDemo {
  public static void main(String[] args) {
    LinkedList<Integer> nums = new LinkedList<>();
    nums.add(10); nums.add(20); nums.add(30);

    nums.addFirst(5);   // add at front
    nums.addLast(40);   // add at end
    System.out.println("List: " + nums);          // [5,10,20,30,40]
    System.out.println("First: " + nums.getFirst()); // 5
    System.out.println("Last: " + nums.getLast());   // 40

    nums.removeFirst(); nums.removeLast();
    System.out.println("After: " + nums); // [10, 20, 30]
  }
}` },
          ],
        },
        {
          id: "hashmap",
          title: "4.4 HashMap",
          content: [
            { type: "definition", heading: "HashMap", text: "HashMap stores data in key-value pairs. Keys must be unique; values can be duplicated. It does NOT maintain insertion order. Use for fast key-value lookup." },
            { type: "simple", text: "A HashMap is like a dictionary — you look up a word (key) and get its meaning (value). You can get any value instantly if you know the key." },
            { type: "code", filename: "HashMapDemo.java", code: `import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
  public static void main(String[] args) {
    HashMap<String, Integer> scores = new HashMap<>();
    scores.put("Alice", 95);
    scores.put("Bob", 82);
    scores.put("Alice", 98); // overwrites duplicate key!

    System.out.println("Alice: " + scores.get("Alice")); // 98
    System.out.println("Has Bob? " + scores.containsKey("Bob"));

    for (Map.Entry<String, Integer> e : scores.entrySet())
      System.out.println(e.getKey() + " -> " + e.getValue());

    scores.remove("Bob");
    System.out.println("Keys: " + scores.keySet());
  }
}` },
          ],
        },
        {
          id: "treemap",
          title: "4.5 TreeMap",
          content: [
            { type: "definition", heading: "TreeMap", text: "TreeMap stores key-value pairs but maintains keys in SORTED (natural) order. Uses a Red-Black Tree internally. Slower than HashMap but keys are always sorted." },
            { type: "simple", text: "TreeMap is like a phone directory — entries are always sorted alphabetically by name (key). Use TreeMap over HashMap when you need sorted output." },
            { type: "code", filename: "TreeMapDemo.java", code: `import java.util.TreeMap;

public class TreeMapDemo {
  public static void main(String[] args) {
    TreeMap<String, Integer> map = new TreeMap<>();
    map.put("Banana", 3);
    map.put("Apple", 5);
    map.put("Mango", 2);
    map.put("Cherry", 8);

    System.out.println("TreeMap: " + map);
    // Output: {Apple=5, Banana=3, Cherry=8, Mango=2}

    System.out.println("First key: " + map.firstKey()); // Apple
    System.out.println("Last key: " + map.lastKey());   // Mango
    System.out.println("Before Mango: " + map.headMap("Mango"));
  }
}` },
          ],
        },
        {
          id: "hashset",
          title: "4.6 HashSet",
          content: [
            { type: "definition", heading: "HashSet", text: "HashSet implements the Set interface and stores UNIQUE elements only — no duplicates allowed. It does not maintain insertion order. Backed by a HashMap internally." },
            { type: "simple", text: "A HashSet is like a school attendance register — each student's name appears only once. If you add a duplicate, it's simply ignored." },
            { type: "code", filename: "HashSetDemo.java", code: `import java.util.HashSet;

public class HashSetDemo {
  public static void main(String[] args) {
    HashSet<String> names = new HashSet<>();
    names.add("Alice"); names.add("Bob"); names.add("Carol");
    names.add("Alice"); // duplicate - ignored!
    names.add("Bob");   // duplicate - ignored!

    System.out.println("Set: " + names);  // No duplicates
    System.out.println("Size: " + names.size()); // 3
    System.out.println("Has Carol? " + names.contains("Carol")); // true

    names.remove("Bob");
    for (String n : names) System.out.println(" -> " + n);
  }
}` },
          ],
        },
        {
          id: "multithreading",
          title: "4.7 Multithreading",
          content: [
            { type: "definition", heading: "Multithreading", text: "Multithreading allows concurrent execution of two or more parts of a program. A Thread is the smallest unit of a process. Multiple threads share the same memory area (heap)." },
            { type: "simple", text: "Imagine a word processor — one thread handles your typing, another auto-saves in the background, and a third checks grammar. All three run at the same time!" },
            { type: "code", filename: "ThreadDemo.java", code: `// WAY 1: Extend Thread
class MyThread extends Thread {
  public void run() {
    for (int i = 1; i <= 5; i++) System.out.println("Thread1: " + i);
  }
}

// WAY 2: Implement Runnable (preferred)
class MyRunnable implements Runnable {
  public void run() {
    for (int i = 1; i <= 5; i++) System.out.println("Thread2: " + i);
  }
}

public class ThreadDemo {
  public static void main(String[] args) {
    new MyThread().start();
    new Thread(new MyRunnable()).start();
    // WAY 3: Lambda (Java 8+)
    new Thread(() -> System.out.println("Lambda Thread!")).start();
    System.out.println("Main thread continues...");
  }
}` },
          ],
        },
        {
          id: "thread-lifecycle",
          title: "4.8 Thread Life Cycle",
          content: [
            { type: "flow", label: "Thread Life Cycle", steps: ["NEW", "RUNNABLE", "RUNNING", "BLOCKED/WAITING", "TERMINATED"] },
            { type: "table", headers: ["State", "Description"], rows: [
              ["NEW",            "Thread created but start() not yet called"],
              ["RUNNABLE",       "start() called — waiting for CPU scheduler"],
              ["RUNNING",        "Scheduler selected it — run() executing"],
              ["BLOCKED/WAITING","Alive but waiting for lock / notify"],
              ["TERMINATED",     "run() finished — thread is dead"],
            ]},
          ],
        },
        {
          id: "thread-priority",
          title: "4.9 Thread Priority",
          content: [
            { type: "definition", heading: "Thread Priority", text: "Every thread has a priority (1–10). Higher priority threads get more CPU time. Default is 5 (NORM_PRIORITY). Use getPriority() and setPriority()." },
            { type: "code", filename: "PriorityDemo.java", code: `public class PriorityDemo {
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> System.out.println("Low priority"));
    Thread t2 = new Thread(() -> System.out.println("High priority"));
    Thread t3 = new Thread(() -> System.out.println("Normal priority"));

    t1.setPriority(Thread.MIN_PRIORITY);  // 1
    t2.setPriority(Thread.MAX_PRIORITY);  // 10
    t3.setPriority(Thread.NORM_PRIORITY); // 5

    t1.start(); t2.start(); t3.start();
    Thread.sleep(200); // pause 200ms
    System.out.println("Current: " + Thread.currentThread().getName());
  }
}` },
          ],
        },
        {
          id: "synchronization",
          title: "4.10 Thread Synchronization",
          content: [
            { type: "definition", heading: "Thread Synchronization", text: "Synchronization controls access of multiple threads to shared resources. When two or more threads access the same object and at least one modifies it, race conditions can occur. The synchronized keyword prevents this." },
            { type: "simple", text: "Two people trying to withdraw from the same bank account simultaneously — without sync both might overdraft! Synchronization acts like a lock on the ATM door — only one at a time." },
            { type: "code", filename: "SyncDemo.java", code: `class BankAccount {
  private int balance = 1000;

  public synchronized void withdraw(int amount) {
    String t = Thread.currentThread().getName();
    if (balance >= amount) {
      System.out.println(t + " withdrawing " + amount);
      balance -= amount;
      System.out.println(t + " done. Balance: " + balance);
    } else {
      System.out.println(t + ": Insufficient! Balance: " + balance);
    }
  }
}

public class SyncDemo {
  public static void main(String[] args) {
    BankAccount acc = new BankAccount();
    new Thread(() -> acc.withdraw(800), "Thread-A").start();
    new Thread(() -> acc.withdraw(800), "Thread-B").start();
  }
}
// With synchronized:
// Thread-A withdrawing 800 → Balance: 200
// Thread-B: Insufficient! Balance: 200` },
            { type: "important", text: "Use synchronized wisely — too much synchronization can cause DEADLOCK (two threads waiting on each other forever). Synchronized block: synchronized(this) { ... } locks only that block." },
          ],
        },
      ],
    },
    {
      id: "wrapper-io-lambda",
      number: "5",
      title: "Wrapper, I/O & Lambda",
      topics: ["Wrapper Classes", "Autoboxing", "Byte Streams", "Char Streams", "Serialization", "Lambda", "Functional Interfaces", "Stream API"],
      color: "#8B4A9C",
      icon: "🔮",
      sections: [
        {
          id: "wrapper-classes",
          title: "5.1 Wrapper Classes",
          content: [
            { type: "definition", heading: "Wrapper Class", text: "A Wrapper class wraps a primitive data type into an object. Java provides one wrapper class for each of the 8 primitive types. Used when Collections require objects instead of primitives." },
            { type: "simple", text: "A wrapper is like putting a plain biscuit (primitive) into a fancy box (object). The biscuit is the same, but now it can be stored in ArrayLists, passed to methods that expect objects, etc." },
            { type: "table", headers: ["Primitive", "Wrapper", "Useful Methods"], rows: [
              ["int",     "Integer",   "parseInt(), MAX_VALUE, MIN_VALUE, toBinaryString()"],
              ["double",  "Double",    "parseDouble(), isNaN(), isInfinite()"],
              ["char",    "Character", "isLetter(), isDigit(), toUpperCase(), toLowerCase()"],
              ["boolean", "Boolean",   "parseBoolean(), TRUE, FALSE"],
              ["long",    "Long",      "parseLong(), toBinaryString()"],
              ["float",   "Float",     "parseFloat(), compare()"],
              ["byte",    "Byte",      "parseByte(), MAX_VALUE"],
              ["short",   "Short",     "parseShort(), MAX_VALUE"],
            ]},
          ],
        },
        {
          id: "autoboxing",
          title: "5.2 Autoboxing and Unboxing",
          content: [
            { type: "definition", heading: "Autoboxing", text: "Automatic conversion of a primitive type to its Wrapper class by the Java compiler. Example: int → Integer automatically." },
            { type: "definition", heading: "Unboxing", text: "Automatic conversion of a Wrapper class object back to its primitive type. Example: Integer → int automatically." },
            { type: "code", filename: "AutoboxingDemo.java", code: `import java.util.ArrayList;

public class AutoboxingDemo {
  public static void main(String[] args) {
    // AUTOBOXING: primitive -> Wrapper
    int primitiveInt = 42;
    Integer wrapperInt = primitiveInt; // autoboxing

    // UNBOXING: Wrapper -> primitive
    Integer obj = 100;
    int prim = obj;  // unboxing
    System.out.println("Primitive: " + prim); // 100

    // Collections + autoboxing
    ArrayList<Integer> list = new ArrayList<>();
    list.add(10); list.add(20); // autoboxing
    int sum = list.get(0) + list.get(1); // unboxing
    System.out.println("Sum: " + sum); // 30

    System.out.println("Max int: " + Integer.MAX_VALUE);   // 2147483647
    System.out.println("Binary 10: " + Integer.toBinaryString(10)); // 1010

    char ch = 'A';
    System.out.println("isLetter: " + Character.isLetter(ch)); // true
    System.out.println("toLower: " + Character.toLowerCase(ch));  // a
  }
}` },
          ],
        },
        {
          id: "io-streams",
          title: "5.3 Byte & Character Streams",
          content: [
            { type: "definition", heading: "I/O Stream", text: "A stream is a sequence of data flowing from source to destination. Byte streams handle raw binary data. Character streams handle text data with Unicode encoding automatically." },
            { type: "table", headers: ["Type", "Base Classes", "Use Case"], rows: [
              ["Byte Streams",      "InputStream / OutputStream",       "Raw bytes — images, audio, binary files"],
              ["Character Streams", "Reader / Writer",                  "Text (Unicode) — auto handles encoding"],
              ["Object Streams",    "ObjectInputStream / OutputStream", "Serialization — save/load Java objects"],
            ]},
            { type: "code", filename: "ByteStreamDemo.java", code: `import java.io.*;

public class ByteStreamDemo {
  public static void main(String[] args) {
    // WRITE bytes
    try (FileOutputStream fos = new FileOutputStream("output.txt")) {
      fos.write("Hello, Java I/O!".getBytes());
      System.out.println("Written!");
    } catch (IOException e) { System.out.println(e.getMessage()); }

    // READ bytes
    try (FileInputStream fis = new FileInputStream("output.txt")) {
      int b;
      while ((b = fis.read()) != -1) System.out.print((char) b);
    } catch (IOException e) { System.out.println(e.getMessage()); }
  }
}` },
            { type: "code", filename: "CharStreamDemo.java", code: `import java.io.*;

public class CharStreamDemo {
  public static void main(String[] args) {
    // WRITE text
    try (BufferedWriter bw = new BufferedWriter(new FileWriter("notes.txt"))) {
      bw.write("Line 1: Java is awesome");
      bw.newLine();
      bw.write("Line 2: I/O Streams are easy");
    } catch (IOException e) { e.printStackTrace(); }

    // READ text
    try (BufferedReader br = new BufferedReader(new FileReader("notes.txt"))) {
      String line;
      while ((line = br.readLine()) != null) System.out.println(line);
    } catch (IOException e) { e.printStackTrace(); }
  }
}` },
          ],
        },
        {
          id: "serialization",
          title: "5.4 Object Serialization",
          content: [
            { type: "definition", heading: "Serialization", text: "Converting a Java object into a byte stream so it can be saved to a file or sent over a network. Deserialization is the reverse — byte stream back to object." },
            { type: "simple", text: "Like saving game progress — serialization takes a snapshot of your object and saves it to disk. Deserialization loads it back so you can continue." },
            { type: "code", filename: "SerializationDemo.java", code: `import java.io.*;

class Student implements Serializable {
  private static final long serialVersionUID = 1L;
  String name;
  int roll;
  transient String password; // NOT serialized

  Student(String name, int roll, String pwd) {
    this.name = name; this.roll = roll; this.password = pwd;
  }
}

public class SerializationDemo {
  public static void main(String[] args) throws Exception {
    Student s = new Student("Alice", 101, "secret123");

    // SERIALIZE
    ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("s.ser"));
    oos.writeObject(s); oos.close();

    // DESERIALIZE
    ObjectInputStream ois = new ObjectInputStream(new FileInputStream("s.ser"));
    Student loaded = (Student) ois.readObject(); ois.close();

    System.out.println("Name: " + loaded.name);      // Alice
    System.out.println("Roll: " + loaded.roll);       // 101
    System.out.println("Password: " + loaded.password); // null (transient!)
  }
}` },
            { type: "important", text: "transient keyword: Fields marked transient are NOT serialized. serialVersionUID: Always declare it to avoid issues when the class changes." },
          ],
        },
        {
          id: "lambda",
          title: "5.5 Lambda Expressions",
          content: [
            { type: "definition", heading: "Lambda Expression", text: "A short block of code that takes parameters and returns a value. Introduced in Java 8 for functional programming. It is an anonymous function — a function without a name. Syntax: (parameters) -> { body }" },
            { type: "simple", text: "Before Java 8, passing behavior required writing a whole class. Lambda lets you pass behavior in one line! No params: () | One param: x | Multi-param: (x,y)" },
            { type: "code", filename: "LambdaDemo.java", code: `import java.util.*;

@FunctionalInterface
interface MathOperation { int operate(int x); }

public class LambdaDemo {
  public static void main(String[] args) {
    // Lambda for Runnable
    Runnable r = () -> System.out.println("Hello from Lambda!");
    r.run();

    // Comparator - sort by length
    List<String> names = Arrays.asList("Bob", "Alice", "Charlie", "Dan");
    names.sort((a, b) -> a.length() - b.length());
    System.out.println("By length: " + names);

    // forEach
    List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
    nums.forEach(n -> System.out.print(n * 2 + " ")); // 2 4 6 8 10

    // Custom functional interface
    MathOperation square = x -> x * x;
    System.out.println("\\nSquare of 6: " + square.operate(6)); // 36
  }
}` },
          ],
        },
        {
          id: "functional-interfaces",
          title: "5.6 Functional Interfaces",
          content: [
            { type: "definition", heading: "Functional Interface", text: "An interface with exactly ONE abstract method. Annotated with @FunctionalInterface (recommended). Lambda expressions implement functional interfaces." },
            { type: "table", headers: ["Interface", "Method", "Use Case"], rows: [
              ["Runnable",      "run()",                   "Execute code in a thread"],
              ["Predicate<T>",  "test(T) → boolean",      "Test a condition"],
              ["Function<T,R>", "apply(T) → R",           "Transform T to R"],
              ["Consumer<T>",   "accept(T) → void",       "Accept value, no return"],
              ["Supplier<T>",   "get() → T",              "Supply/produce a value"],
              ["Comparator<T>", "compare(T,T) → int",     "Compare two objects"],
            ]},
            { type: "code", filename: "FunctionalDemo.java", code: `import java.util.function.*;

public class FunctionalDemo {
  public static void main(String[] args) {
    Predicate<Integer> isEven = n -> n % 2 == 0;
    System.out.println("4 even: " + isEven.test(4)); // true
    System.out.println("7 even: " + isEven.test(7)); // false

    Function<String, Integer> len = s -> s.length();
    System.out.println("'Java' len: " + len.apply("Java")); // 4

    Consumer<String> print = s -> System.out.println(">> " + s);
    print.accept("Hello Consumer!");

    Supplier<String> greet = () -> "Good Morning!";
    System.out.println(greet.get());
  }
}` },
          ],
        },
        {
          id: "method-references",
          title: "5.7 Method References",
          content: [
            { type: "definition", heading: "Method Reference", text: "Shorthand notation of a Lambda that calls an existing method. Uses the :: operator. Types: static method, instance method, arbitrary object method, constructor reference." },
            { type: "code", filename: "MethodRefDemo.java", code: `import java.util.*;

public class MethodRefDemo {
  static void printItem(String s) { System.out.println("Item: " + s); }

  public static void main(String[] args) {
    List<String> list = Arrays.asList("Banana","Apple","Cherry");

    // Lambda version
    list.forEach(s -> System.out.println("Item: " + s));

    // Static method reference — same result, shorter
    list.forEach(MethodRefDemo::printItem);

    // Instance method reference
    list.forEach(System.out::println);

    // Sort using method reference
    list.sort(String::compareToIgnoreCase);
    System.out.println("Sorted: " + list); // [Apple, Banana, Cherry]
  }
}` },
          ],
        },
        {
          id: "stream-api",
          title: "5.8 Stream API",
          content: [
            { type: "definition", heading: "Java Stream API", text: "Streams allow functional-style operations on sequences of elements. A Stream is NOT a data structure — it processes input from Collections. Operations: filter, map, reduce, sorted, collect, forEach, count." },
            { type: "simple", text: "Imagine water flowing through a pipe with filters. The source is a collection, intermediate operations (filter, map) are the filters, and the terminal operation (collect, forEach) is where processed data ends up." },
            { type: "flow", label: "Stream Pipeline", steps: ["Source (List)", "filter()", "map()", "sorted()", "collect()"] },
            { type: "code", filename: "StreamDemo.java", code: `import java.util.*;
import java.util.stream.*;

public class StreamDemo {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);

    // FILTER
    List<Integer> evens = numbers.stream()
      .filter(n -> n % 2 == 0).collect(Collectors.toList());
    System.out.println("Evens: " + evens); // [2,4,6,8,10]

    // MAP
    List<Integer> squares = numbers.stream()
      .map(n -> n * n).collect(Collectors.toList());
    System.out.println("Squares: " + squares);

    // FILTER + MAP
    List<Integer> evenSquares = numbers.stream()
      .filter(n -> n % 2 == 0).map(n -> n * n).collect(Collectors.toList());
    System.out.println("Even squares: " + evenSquares); // [4,16,36,64,100]

    // REDUCE
    int sum = numbers.stream().reduce(0, (a, b) -> a + b);
    System.out.println("Sum 1-10: " + sum); // 55

    // SORTED + COUNT
    List<String> names = Arrays.asList("Zara","Alice","Bob","Mia");
    List<String> sorted = names.stream().sorted().collect(Collectors.toList());
    System.out.println("Sorted: " + sorted); // [Alice, Bob, Mia, Zara]

    long count = numbers.stream().filter(n -> n > 5).count();
    System.out.println("Count > 5: " + count); // 5

    // METHOD REFERENCE with map
    List<String> words = Arrays.asList("hello","world","java");
    List<String> upper = words.stream()
      .map(String::toUpperCase).collect(Collectors.toList());
    System.out.println("Upper: " + upper); // [HELLO, WORLD, JAVA]
  }
}` },
            { type: "note", text: "Intermediate Operations (return Stream): filter(), map(), sorted(), distinct(), limit(), skip(). Terminal Operations (return result): collect(), forEach(), reduce(), count(), min(), max(), anyMatch()." },
          ],
        },
      ],
    },
  ],
};
