function parseJSONSafe(jsonString) {
    try {
      // Attempt to parse the JSON string
      const parsedData = JSON.parse(jsonString);
      // Additional processing can be done here if necessary
      return parsedData;
    } catch (error) {
      // Handle any errors that occurred during parsing
      console.error('Error parsing JSON:', error.message);
      // Return null or an appropriate fallback value
      return null;
    }
  }
  