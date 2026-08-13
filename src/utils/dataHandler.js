const fs = require('fs');
const path = require('path');

/**
 * Reads and parses JSON data from a file.
 * Creates an empty array file if the file does not exist yet.
 */
const readData = (filePath) => {
  try {
    const absolutePath = path.resolve(filePath);

    // If file doesn't exist, initialize it with an empty array
    if (!fs.existsSync(absolutePath)) {
      writeData(absolutePath, []);
      return [];
    }

    const fileData = fs.readFileSync(absolutePath, 'utf8');
    return fileData ? JSON.parse(fileData) : [];
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return [];
  }
};

/**
 * Writes data object/array to a JSON file.
 */
const writeData = (filePath, data) => {
  try {
    const absolutePath = path.resolve(filePath);
    
    // Ensure parent directories exist
    const dir = path.dirname(absolutePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Error writing file at ${filePath}:`, error);
  }
};

module.exports = {
  readData,
  writeData
};