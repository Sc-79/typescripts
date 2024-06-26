interface Person {
    readonly id: number;
    name: string;
  }
  
  const person: Person = { id: 1, name: "John" };
  person.name = "Jane"; // OK
  person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
  