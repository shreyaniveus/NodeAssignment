const fs = require('fs').promises;

async function createFile() {
  const filename = 'file.txt';
  const content = 'File content...';

  try {
    await fs.writeFile(filename, content);
    console.log(`File "${filename}" created successfully.`);
  } catch (error) {
    console.error('Error creating file:', error);
  }
}

createFile();
