Name: Nephat Gikunju
Date: 2025-07-03

# Programming Paradigms Assignment - Answers

## Part 1: Concept Check

1.  **What is a programming paradigm?**
    A programming paradigm is a fundamental style or approach to building the structure and organization of computer programs. It's a way of thinking about how to solve problems using code, influencing how you organize data, define operations, and manage program flow. It's not a specific language, but rather a methodology that a language can support.

2.  **How is Object-Oriented Programming different from Procedural Programming?**
    * **Procedural Programming** focuses on a sequence of instructions or steps (procedures, functions, or subroutines) that operate on data. Data and the functions that manipulate that data are often kept separate. It's like following a recipe where you execute steps one after another.
    * **Object-Oriented Programming (OOP)**, in contrast, organizes code around "objects." An object bundles both data (properties or attributes) and the functions (methods or behaviors) that operate on that data into a single unit. It aims to model real-world entities and their interactions, where objects have their own responsibilities.

3.  **Give one real-world analogy for Functional Programming.**
    A real-world analogy for Functional Programming is a **mathematical function**. For instance, the function $f(x) = x^2$. Given the same input ($x=5$), it will always produce the same output ($25$), and it doesn't change any external state or have "side effects." Each step in a functional program is like applying a pure mathematical function: it takes an input, produces an output, and doesn't modify anything outside of itself.

4.  **Why might someone choose Declarative code over Procedural in UI development?**
    In UI development, choosing declarative code over procedural often leads to more robust and easier-to-understand applications. Declarative code allows you to describe *what* you want the UI to look like (the desired end-state) based on your data, rather than having to specify *how* to achieve that state step-by-step (which is procedural). This is beneficial because UIs can be complex and constantly changing. With declarative code, the framework handles the intricate details of updating the underlying UI (e.g., the DOM in web development), reducing manual manipulation errors and making the code more concise and predictable when dealing with state changes.

## Part 3: Paradigm Mapping

1.  **Building a complex UI with reusable components**
    * **Paradigm:** Declarative (often combined with OOP principles for components)
    * **Justification:** Modern UI frameworks (like React, Vue, Angular) extensively use a declarative approach. Developers describe the desired UI state, and the framework efficiently renders and updates it. Reusable components align well with the encapsulation and modularity provided by object-oriented design, but the primary interaction with the UI layer is declarative.

2.  **Writing a short script to automate image resizing**
    * **Paradigm:** Procedural
    * **Justification:** For a straightforward automation task like image resizing, a procedural approach is typically the most direct and efficient. The script follows a clear, sequential flow of operations: load image, apply resize transformation, save image. The focus is on the explicit steps to achieve the desired outcome.

3.  **Creating a math utility library that’s easy to test and reuse**
    * **Paradigm:** Functional
    * **Justification:** Functional programming emphasizes pure functions—functions that, given the same input, always return the same output and have no side effects. This characteristic makes functional code incredibly easy to test in isolation, predictable, and highly reusable because functions don't depend on or alter external state. Math operations themselves are inherently stateless and deterministic, making them a natural fit for pure functions.

4.  **Modeling different types of bank accounts with shared and custom rules**
    * **Paradigm:** Object-Oriented Programming (OOP)
    * **Justification:** This scenario is a classic use case for OOP. Bank accounts (e.g., SavingsAccount, CheckingAccount) can be modeled as objects that encapsulate their own data (balance, account number) and behaviors (deposit, withdraw). Inheritance can be used to define a common `BankAccount` class with shared rules, while subclasses can extend or override these rules to implement custom behaviors (e.g., interest calculation for savings, overdraft protection for checking). This approach provides excellent modularity, reusability, and maintainability for complex systems.

## Part 4: Apply & Reflect

### 4B. Reflection on To-Do List Implementation

* **Why did you choose this paradigm?**
    I chose the Object-Oriented Programming (OOP) paradigm for the To-Do List manager because it felt like the most natural and intuitive way to model the problem domain. A "To-Do List" is fundamentally a collection of "tasks." In OOP, we can represent each individual "task" as an object (`Task` class) with its own properties (e.g., `description`, `completed` status) and behaviors (e.g., `markComplete()`). The overall "To-Do List" itself can also be an object (`ToDoList` class) that manages the collection of `Task` objects, providing methods to interact with them (add, mark complete, count). This approach closely mirrors real-world entities and their interactions.

* **What are its tradeoffs or strengths?**
    * **Strengths:**
        * **Modularity and Organization:** The code is well-structured into distinct, self-contained units (`Task` and `ToDoList` classes), making it easier to understand, navigate, and manage.
        * **Encapsulation:** Each `Task` object encapsulates its own state (`description`, `completed`), and the `ToDoList` encapsulates its collection of tasks. This protects internal data and ensures that changes are made through defined methods, promoting data integrity.
        * **Maintainability:** If the definition of a "task" needs to change (e.g., adding a `dueDate`), modifications are localized within the `Task` class, minimizing impact on other parts of the system.
        * **Extensibility:** It's relatively easy to extend the system by adding new types of tasks (e.g., `UrgentTask` inheriting from `Task`) or new features to the `ToDoList` manager.
    * **Tradeoffs:**
        * **Initial Boilerplate:** For a very simple To-Do list, defining classes and constructors might seem like a bit more initial setup compared to a purely procedural script.
        * **Potential Complexity:** If not designed carefully, deep inheritance hierarchies or overly complex object relationships can sometimes make an OOP system difficult to debug or reason about, though this is less likely for a simple To-Do list.

* **Would your solution scale in a large team or codebase?**
    Yes, this OOP solution would scale well in a large team or codebase. The clear separation of concerns into `Task` and `ToDoList` classes means that different developers could work on different parts of the system concurrently without significant conflicts. The encapsulated nature of objects improves testability, as individual classes and their methods can be unit-tested in isolation. 
