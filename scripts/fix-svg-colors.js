const fs = require('fs');
const path = require('path');

// Directory containing SVG files
const svgDir = path.join(__dirname, '../assets/Icons');

// Read all files in the directory
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for SVG files
  const svgFiles = files.filter(file => file.endsWith('.svg'));

  // Process each SVG file
  svgFiles.forEach(file => {
    const filePath = path.join(svgDir, file);
    
    // Read the file content
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      // Replace hardcoded colors with currentColor
      let updatedContent = data
        .replace(/fill="#[0-9A-Fa-f]{3,6}"/g, 'fill="currentColor"')
        .replace(/stroke="#[0-9A-Fa-f]{3,6}"/g, 'stroke="currentColor"');

      // Write the updated content back to the file
      fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file ${file}:`, err);
          return;
        }
        console.log(`Updated ${file}`);
      });
    });
  });
}); 