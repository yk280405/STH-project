// Java Unit 1 Complete Notes — sourced from Java_Unit1_Complete_Notes.pdf

export const JAVA_CONTENT = {
  unit: "Unit 1",
  subject: "Java Programming",
  pdfUrl: "/notes/Java_Unit1_Complete_Notes.pdf",
  chapters: [
    {
      id: "java-fundamentals",
      number: "1",
      title: "Java Fundamentals",
      topics: ["Intro to Java", "C++ vs Java", "Keywords & Tokens", "Data Types", "Access Modifiers"],
      color: "#C4913A",
      icon: "☕",
      sections: [
        {
          id: "intro",
          title: "1.1 Introduction to Java",
          content: [
            {
              type: "definition",
              heading: "What is Java?",
              text: "Java is a purely Object-Oriented Programming language developed by Sun Microsystems of USA in 1991. It was originally called 'Oak' by James Gosling, one of its inventors.",
            },
            {
              type: "simple",
              text: "Think of Java like a universal translator. You write code once, and it can run on any machine — Windows, Mac, Linux — without changes. This is called Write Once, Run Anywhere (WORA).",
            },
            {
              type: "note",
              text: "JDK = Java Development Kit (tools for developing Java). JRE = Java Runtime Environment (runs Java programs). JVM = Java Virtual Machine (interprets bytecode to machine code).",
            },
            {
              type: "flow",
              steps: ["Source Code (.java)", "Compiler (javac)", "Bytecode (.class)", "JVM", "Machine Code"],
              label: "How Java Works: Write Once, Run Anywhere (WORA)",
            },
          ],
        },
        {
          id: "cpp-vs-java",
          title: "1.2 Difference Between C++ and Java",
          content: [
            {
              type: "table",
              headers: ["Feature", "C++", "Java"],
              rows: [
                ["Platform", "Platform dependent", "Platform independent (WORA)"],
                ["Memory Mgmt", "Manual (pointers)", "Automatic (Garbage Collection)"],
                ["Multiple Inherit.", "Supported", "Not supported (use Interfaces)"],
                ["Pointers", "Used", "Not used (safer)"],
                ["Compilation", "Compiled to machine code", "Compiled to Bytecode then interpreted"],
                ["OOP", "Partially OOP", "Purely Object Oriented"],
                ["Header Files", "Uses #include", "Uses import statements"],
              ],
            },
          ],
        },
        {
          id: "keywords-tokens",
          title: "1.3 Keywords and Tokens",
          content: [
            {
              type: "definition",
              heading: "Keywords",
              text: "Words reserved and used by the Java compiler. They cannot be used as identifiers (variable names, class names, etc.)",
            },
            {
              type: "simple",
              text: "Keywords are like reserved words in English grammar that have a fixed meaning. For example, 'class', 'public', 'void', 'if', 'else' are all keywords — Java already knows what they mean. You cannot name your variable void or int.",
            },
            {
              type: "keywords",
              words: ["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while"],
            },
            {
              type: "definition",
              heading: "Tokens",
              text: "The smallest individual unit in a Java program. Java tokens include keywords, identifiers, literals, operators, and separators.",
            },
            {
              type: "table",
              headers: ["Token Type", "Description", "Example"],
              rows: [
                ["Keyword", "Reserved word", "int, class, if"],
                ["Identifier", "Name given by programmer", "myVariable, Employee"],
                ["Literal", "Constant value", "101, 10.1f, 'A', \"Hello\""],
                ["Operator", "Performs operation", "+, -, *, /, ==, &&"],
                ["Separator", "Separates code elements", "{ } ( ) ; ,"],
              ],
            },
          ],
        },
        {
          id: "data-types",
          title: "1.4 Data Types in Java",
          content: [
            {
              type: "definition",
              heading: "Data Types",
              text: "Data types specify the type of data a variable can hold. Java is statically typed — every variable must be declared before use.",
            },
            {
              type: "simple",
              text: "Think of data types as different types of boxes. An int box holds whole numbers, a double box holds decimal numbers, a char box holds a single character, and a boolean box holds only true or false.",
            },
            {
              type: "table",
              headers: ["Type", "Size", "Default", "Range / Example"],
              rows: [
                ["byte", "1 byte", "0", "-128 to 127"],
                ["short", "2 bytes", "0", "-32,768 to 32,767"],
                ["int", "4 bytes", "0", "-2³¹ to 2³¹-1 (most common)"],
                ["long", "8 bytes", "0L", "-2⁶³ to 2⁶³-1"],
                ["float", "4 bytes", "0.0f", "Decimal (use f suffix)"],
                ["double", "8 bytes", "0.0d", "Decimal – default for decimals"],
                ["char", "2 bytes", "'\\u0000'", "0 to 65535 (Unicode)"],
                ["boolean", "JVM dep.", "false", "true or false only"],
              ],
            },
            {
              type: "code",
              filename: "DataTypesDemo.java",
              code: `public class DataTypesDemo {
  public static void main(String[] args) {
    byte age = 25;           // small whole number
    short year = 2024;       // medium whole number
    int marks = 95;          // most common integer
    long bigNum = 9876543210L; // very large number (use L suffix)
    float price = 99.99f;    // decimal (use f suffix)
    double pi = 3.14159265;  // high precision decimal
    char grade = 'A';        // single character
    boolean passed = true;   // only true or false

    System.out.println("Age: " + age);
    System.out.println("Marks: " + marks);
    System.out.println("Grade: " + grade);
    System.out.println("Passed: " + passed);
  }
}`,
            },
            {
              type: "note",
              text: "Data types fall into 2 categories: (1) Primitive — byte, short, int, long, float, double, char, boolean. (2) Non-Primitive (Derived) — String, Arrays, Classes, Interfaces.",
            },
          ],
        },
        {
          id: "access-modifiers",
          title: "1.5 Access Modifiers",
          content: [
            {
              type: "definition",
              heading: "Access Modifiers",
              text: "Access modifiers determine where a property or method is accessible from. They control the visibility of classes, fields, and methods.",
            },
            {
              type: "simple",
              text: "Think of access modifiers like privacy settings. public = anyone can see it (like a public park). private = only the owner can see it (like a diary). protected = only family can see it (like a home).",
            },
            {
              type: "table",
              headers: ["Modifier", "Same Class", "Same Package", "Subclass", "World"],
              rows: [
                ["public", "✓", "✓", "✓", "✓"],
                ["protected", "✓", "✓", "✓", "✗"],
                ["default", "✓", "✓", "✗", "✗"],
                ["private", "✓", "✗", "✗", "✗"],
              ],
            },
            {
              type: "code",
              filename: "AccessModifiers.java",
              code: `public class Employee {
  public String name;    // accessible everywhere
  private int salary;    // accessible only inside this class
  protected int id;      // accessible in class + subclass

  public int getSalary() {
    return salary;       // allowed – same class
  }

  public void setSalary(int s) {
    this.salary = s;
  }
}

class Manager extends Employee {
  void show() {
    System.out.println(name);        // OK – public
    System.out.println(id);          // OK – protected (subclass)
    // System.out.println(salary);   // ERROR! private
    System.out.println(getSalary()); // OK – via getter
  }
}`,
            },
          ],
        },
      ],
    },
    {
      id: "oops",
      number: "2",
      title: "OOPs using Java",
      topics: ["Class & Object", "Inheritance", "Encapsulation", "Abstraction", "Polymorphism", "Overloading"],
      color: "#2D3A8C",
      icon: "🧩",
      sections: [
        {
          id: "oop-intro",
          title: "2.1 What is Object-Oriented Programming?",
          content: [
            {
              type: "definition",
              heading: "Object-Oriented Programming (OOP)",
              text: "A programming paradigm that tries to map code instructions with real world, making the code short and easier to understand. Solving a problem by creating objects is one of the most popular approaches.",
            },
            {
              type: "pillars",
              items: [
                { name: "Encapsulation", desc: "Wrapping data & methods together", icon: "🔒" },
                { name: "Abstraction", desc: "Hiding internal details", icon: "🎭" },
                { name: "Inheritance", desc: "Child borrows from parent class", icon: "👨‍👦" },
                { name: "Polymorphism", desc: "One entity, many forms", icon: "🔄" },
              ],
            },
          ],
        },
        {
          id: "class-object",
          title: "2.2 Class and Object",
          content: [
            {
              type: "definition",
              heading: "Class",
              text: "A class is a blueprint for creating objects. It contains info (attributes) and actions (methods) that the objects created from it will have.",
            },
            {
              type: "definition",
              heading: "Object",
              text: "An object is an instantiation (instance) of a class. Memory is allocated only after object instantiation. Any real-world object = Properties + Behaviour. In OOP: Object = Attributes + Methods.",
            },
            {
              type: "simple",
              text: "A class is like a JEE Application Form — it has fields for name, age, etc. When a student fills it out, that filled form becomes an object. Many students (objects) can fill out the same form (class).",
            },
            {
              type: "code",
              filename: "ClassAndObject.java",
              code: `public class Employee {
  public int id;
  public String name;
  int salary;

  public void getDetails() {
    System.out.println("Name: " + name + ", Salary: " + salary);
  }
}

public class Main {
  public static void main(String[] args) {
    Employee emp1 = new Employee();
    emp1.name = "Alice";
    emp1.salary = 50000;
    emp1.getDetails();
    // Output: Name: Alice, Salary: 50000

    Employee emp2 = new Employee();
    emp2.name = "Bob";
    emp2.salary = 60000;
    emp2.getDetails();
    // Output: Name: Bob, Salary: 60000
  }
}`,
            },
          ],
        },
        {
          id: "inheritance",
          title: "2.3 Inheritance",
          content: [
            {
              type: "definition",
              heading: "Inheritance",
              text: "Inheritance is used to borrow properties and methods from an existing class. The existing class is called the Superclass (Parent) and the new class is called the Subclass (Child). Declared using the 'extends' keyword in Java.",
            },
            {
              type: "simple",
              text: "A child inherits traits from parents. Similarly in Java, a child class inherits methods and fields from its parent class. Java does NOT support multiple inheritance directly (two parent classes), but you can use Interfaces for this.",
            },
            {
              type: "code",
              filename: "Inheritance.java",
              code: `class Animal {
  String name;
  void eat() { System.out.println(name + " is eating."); }
  void breathe() { System.out.println(name + " is breathing."); }
}

class Dog extends Animal {
  void bark() { System.out.println(name + " says: Woof!"); }
}

class Cat extends Animal {
  void meow() { System.out.println(name + " says: Meow!"); }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.name = "Bruno";
    d.eat();     // inherited from Animal
    d.breathe(); // inherited from Animal
    d.bark();    // Dog's own method

    Cat c = new Cat();
    c.name = "Kitty";
    c.eat();     // inherited
    c.meow();    // Cat's own
  }
}`,
            },
            {
              type: "important",
              text: "Constructor execution order in Inheritance: When a derived class object is created, the Parent constructor runs FIRST, then the Child constructor. Use 'super(a, b)' to call the parent constructor with parameters.",
            },
          ],
        },
        {
          id: "encapsulation",
          title: "2.4 Encapsulation",
          content: [
            {
              type: "definition",
              heading: "Encapsulation",
              text: "The act of putting various components together in a capsule (a class). In Java, encapsulation means that sensitive data can be hidden from users using 'private' and accessed via getters/setters.",
            },
            {
              type: "simple",
              text: "A laptop is a single entity — it has WiFi, Speaker, Storage inside one box. You use the laptop without knowing how every internal part works. Similarly, in Java you hide data (make it private) and only expose what's necessary.",
            },
            {
              type: "code",
              filename: "Encapsulation.java",
              code: `public class BankAccount {
  private double balance; // hidden from outside

  public double getBalance() {
    return balance;
  }

  public void deposit(double amount) {
    if (amount > 0) {
      balance += amount;
      System.out.println("Deposited: " + amount);
    } else {
      System.out.println("Invalid amount!");
    }
  }
}

public class Main {
  public static void main(String[] args) {
    BankAccount acc = new BankAccount();
    acc.deposit(5000);
    System.out.println("Balance: " + acc.getBalance());
    // acc.balance = 1000000; // ERROR! Cannot access private field
  }
}`,
            },
          ],
        },
        {
          id: "abstraction",
          title: "2.5 Abstraction",
          content: [
            {
              type: "definition",
              heading: "Abstraction",
              text: "Hiding internal details and showing only essential information to the user. Achieved using Abstract Classes and Interfaces in Java. An abstract method is declared without an implementation.",
            },
            {
              type: "simple",
              text: "You use a phone without knowing how it was made internally. The phone shows you buttons and a screen (essential info) but hides all the circuits inside. Abstract classes define what should be done but not how.",
            },
            {
              type: "code",
              filename: "Abstraction.java",
              code: `abstract class Shape {
  abstract double area();       // abstract method – no body
  abstract double perimeter();  // must be implemented by child

  void display() {
    System.out.println("I am a shape.");
  }
}

class Circle extends Shape {
  double radius;
  Circle(double r) { this.radius = r; }

  @Override
  double area() { return Math.PI * radius * radius; }

  @Override
  double perimeter() { return 2 * Math.PI * radius; }
}

class Rectangle extends Shape {
  double length, width;
  Rectangle(double l, double w) { length=l; width=w; }

  @Override
  double area() { return length * width; }

  @Override
  double perimeter() { return 2 * (length + width); }
}

public class Main {
  public static void main(String[] args) {
    Shape s1 = new Circle(7);
    System.out.println("Circle Area: " + s1.area());

    Shape s2 = new Rectangle(4, 6);
    System.out.println("Rectangle Area: " + s2.area());
  }
}`,
            },
          ],
        },
        {
          id: "polymorphism",
          title: "2.6 Polymorphism",
          content: [
            {
              type: "definition",
              heading: "Polymorphism",
              text: "One entity, many forms. Polymorphism allows a method or object to behave differently in different situations. In Java there are two types: Method Overloading (Compile-time) and Method Overriding (Run-time).",
            },
            {
              type: "simple",
              text: "A SmartPhone is a Phone, a Calculator, and a Camera — one object, many forms. Similarly a method named draw() can draw a Circle when called on a Circle object and draw a Square when called on a Square object.",
            },
            {
              type: "definition",
              heading: "Method Overloading (Compile-time Polymorphism)",
              text: "Two or more methods can have the same name but different parameters. Note: Method overloading CANNOT be performed by changing only the return type.",
            },
            {
              type: "code",
              filename: "MethodOverloading.java",
              code: `class Calculator {
  int add(int a, int b) { return a + b; }
  double add(double a, double b) { return a + b; }
  int add(int a, int b, int c) { return a + b + c; }
}

public class Main {
  public static void main(String[] args) {
    Calculator calc = new Calculator();
    System.out.println(calc.add(2, 3));       // 5
    System.out.println(calc.add(2.5, 3.5));   // 6.0
    System.out.println(calc.add(1, 2, 3));    // 6
  }
}`,
            },
            {
              type: "definition",
              heading: "Method Overriding (Run-time Polymorphism)",
              text: "If a child class implements the same method present in the parent class again, it is known as Method Overriding. The child class redefines the parent's method.",
            },
            {
              type: "code",
              filename: "MethodOverriding.java",
              code: `class Animal {
  void sound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
  @Override
  void sound() { System.out.println("Dog says: Woof!"); }
}

class Cat extends Animal {
  @Override
  void sound() { System.out.println("Cat says: Meow!"); }
}

public class Main {
  public static void main(String[] args) {
    Animal a;
    a = new Dog();  // Dynamic Method Dispatch
    a.sound();      // Dog says: Woof!

    a = new Cat();
    a.sound();      // Cat says: Meow!
  }
}`,
            },
            {
              type: "table",
              headers: ["", "Overloading", "Overriding"],
              rows: [
                ["Definition", "Same name, diff parameters", "Same name+params, child redefines"],
                ["Type", "Compile-time polymorphism", "Run-time polymorphism"],
                ["Class", "Same class", "Parent and child class"],
                ["Return Type", "Can differ", "Must be same (or covariant)"],
                ["Static Methods", "Can be overloaded", "Cannot be overridden"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "exception-handling",
      number: "3",
      title: "Exception Handling",
      topics: ["Intro to Exceptions", "Error vs Exception", "try-catch-throw", "throw vs throws", "Types & Hierarchy"],
      color: "#B03A2E",
      icon: "⚠️",
      sections: [
        {
          id: "exceptions-intro",
          title: "3.1 Introduction to Exceptions",
          content: [
            {
              type: "definition",
              heading: "Exception",
              text: "An Exception is an event that occurs when a program is executed, disrupting the normal flow of instructions. Runtime errors are also called Exceptions!",
            },
            {
              type: "simple",
              text: "Imagine you're running a program that divides two numbers. Everything works fine until the user enters 0 as the divisor — dividing by zero causes a crash. Java's exception handling lets you catch this crash and handle it gracefully instead of crashing the program.",
            },
          ],
        },
        {
          id: "types-of-errors",
          title: "3.2 Types of Errors in Java",
          content: [
            {
              type: "table",
              headers: ["Error Type", "When It Occurs", "Who Encounters It", "Example"],
              rows: [
                ["Syntax Error", "During compilation", "Programmer", "Missing semicolon, undeclared var"],
                ["Logical Error", "During execution (wrong output)", "Programmer", "Wrong formula, incorrect condition"],
                ["Runtime Error", "During execution (crash)", "User", "Divide by 0, null pointer, bad index"],
              ],
            },
          ],
        },
        {
          id: "error-vs-exception",
          title: "3.3 Difference: Error vs Exception",
          content: [
            {
              type: "table",
              headers: ["", "Error", "Exception"],
              rows: [
                ["Definition", "Serious problem – unrecoverable", "Condition that can be caught & handled"],
                ["Cause", "JVM / system level", "Program logic / bad input"],
                ["Recoverable?", "No", "Yes (with try-catch)"],
                ["Examples", "OutOfMemoryError, StackOverflow", "NullPointerException, ArithmeticException"],
              ],
            },
            {
              type: "hierarchy",
              label: "Java Exception Hierarchy",
              items: ["Throwable", "Error", "Exception", "Checked Exception", "Unchecked Exception"],
            },
          ],
        },
        {
          id: "try-catch",
          title: "3.4 try, catch, and throw",
          content: [
            {
              type: "definition",
              heading: "try-catch Block",
              text: "In Java, exceptions are managed using try-catch blocks. The try block contains code that might throw an exception. The catch block contains code to handle that exception.",
            },
            {
              type: "simple",
              text: "try = 'Let me try this risky code.' catch = 'If something goes wrong, I'll handle it here.' finally = 'This always runs no matter what (cleanup code).'",
            },
            {
              type: "code",
              filename: "TryCatchDemo.java",
              code: `public class TryCatchDemo {
  public static void main(String[] args) {
    try {
      int result = 10 / 0; // ArithmeticException
      System.out.println(result);
    } catch (ArithmeticException e) {
      System.out.println("Error: Cannot divide by zero!");
      System.out.println("Details: " + e.getMessage());
    } finally {
      System.out.println("This always runs (cleanup here).");
    }

    // Multiple catch blocks
    try {
      int[] arr = new int[3];
      arr[10] = 5; // ArrayIndexOutOfBoundsException
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Array index out of bounds!");
    } catch (Exception e) {
      System.out.println("Some other exception: " + e.getMessage());
    }
  }
}
// Output:
// Error: Cannot divide by zero!
// This always runs (cleanup here).
// Array index out of bounds!`,
            },
          ],
        },
        {
          id: "throw-throws",
          title: "3.5 throw vs throws",
          content: [
            {
              type: "table",
              headers: ["", "throw", "throws"],
              rows: [
                ["Purpose", "Used to explicitly throw an exception", "Declares that a method might throw"],
                ["Where", "Inside method body", "In method signature"],
                ["Used with", "Single exception instance", "Exception class name(s)"],
                ["Example", "throw new ArithmeticException()", "void calc() throws IOException"],
              ],
            },
            {
              type: "code",
              filename: "ThrowVsThrows.java",
              code: `class Division {
  static double divide(int a, int b) {
    if (b == 0) {
      throw new ArithmeticException("Cannot divide by zero!");
    }
    return (double) a / b;
  }
}

class FileHandler {
  public void readFile(String path) throws java.io.IOException {
    java.io.FileReader fr = new java.io.FileReader(path);
  }
}

public class Main {
  public static void main(String[] args) {
    try {
      System.out.println(Division.divide(10, 0));
    } catch (ArithmeticException e) {
      System.out.println("Caught: " + e.getMessage());
    }

    FileHandler fh = new FileHandler();
    try {
      fh.readFile("test.txt");
    } catch (java.io.IOException e) {
      System.out.println("File error: " + e.getMessage());
    }
  }
}`,
            },
          ],
        },
        {
          id: "types-exceptions",
          title: "3.6 Types of Exceptions",
          content: [
            {
              type: "definition",
              heading: "Checked Exception",
              text: "Compile-time exceptions handled by the compiler. You MUST handle them with try-catch or declare with 'throws'. Examples: IOException, SQLException, FileNotFoundException.",
            },
            {
              type: "definition",
              heading: "Unchecked Exception",
              text: "Runtime exceptions — not checked at compile time. They occur due to programming bugs. Examples: NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException.",
            },
            {
              type: "table",
              headers: ["Exception", "Cause", "Type"],
              rows: [
                ["NullPointerException", "Accessing object that is null", "Unchecked"],
                ["ArithmeticException", "Math error like divide by zero", "Unchecked"],
                ["ArrayIndexOutOfBoundsException", "Accessing invalid array index", "Unchecked"],
                ["IllegalArgumentException", "Invalid argument passed to method", "Unchecked"],
                ["NumberFormatException", "Converting invalid string to number", "Unchecked"],
                ["IOException", "File or stream operation failure", "Checked"],
                ["SQLException", "Database access error", "Checked"],
                ["ClassNotFoundException", "Class not found at runtime", "Checked"],
              ],
            },
          ],
        },
        {
          id: "custom-exceptions",
          title: "3.7 Custom Exceptions",
          content: [
            {
              type: "definition",
              heading: "Custom Exception",
              text: "We can write our own custom Exceptions using the Exception class in Java. Create a class that extends Exception and override methods as needed.",
            },
            {
              type: "code",
              filename: "CustomException.java",
              code: `// Step 1: Define a custom exception
class InvalidAgeException extends Exception {
  public InvalidAgeException(String message) {
    super(message);
  }
}

// Step 2: Use the custom exception
class VotingSystem {
  static void checkAge(int age) throws InvalidAgeException {
    if (age < 18) {
      throw new InvalidAgeException("Age " + age + " is below voting age!");
    }
    System.out.println("You are eligible to vote!");
  }
}

// Step 3: Handle it
public class Main {
  public static void main(String[] args) {
    try {
      VotingSystem.checkAge(15);
    } catch (InvalidAgeException e) {
      System.out.println("Caught: " + e.getMessage());
    }

    try {
      VotingSystem.checkAge(20);
    } catch (InvalidAgeException e) {
      System.out.println(e.getMessage());
    }
  }
}
// Output:
// Caught: Age 15 is below voting age!
// You are eligible to vote!`,
            },
            {
              type: "note",
              text: "Key Exception class methods: getMessage() – returns exception message. printStackTrace() – prints full stack trace. toString() – executed when System.out.println(e) is run.",
            },
            {
              type: "important",
              text: "finally block: Always executes whether an exception is handled or not. Used to release resources, close file connections, database connections, etc.",
            },
          ],
        },
      ],
    },
  ],
};
