// Compact Object Function
function compactObject(obj) {
    if (Array.isArray(obj)) {
      return obj.filter(Boolean).map(compactObject); // Recursively compact arrays
    } else if (obj !== null && typeof obj === "object") {
      return Object.entries(obj)
        .reduce((acc, [key, value]) => {
          const compactedValue = compactObject(value); // Recursively compact nested objects
          if (Boolean(compactedValue)) {
            acc[key] = compactedValue;
          }
          return acc;
        }, {});
    }
    return obj;
  }
  
  // Example Usage
  const data = {
    name: "Alice",
    age: null,
    active: true,
    preferences: {
      theme: "",
      language: "en",
      notifications: undefined
    },
    hobbies: [null, "reading", undefined, "coding", ""]
  };
  
  console.log(compactObject(data));
  
  /*
  Output:
  {
    name: "Alice",
    active: true,
    preferences: { language: "en" },
    hobbies: ["reading", "coding"]
  }
  */
  