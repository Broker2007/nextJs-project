const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/ProductsData/ProductsData.js');
let content = fs.readFileSync(filePath, 'utf8');

const importRegex = /import\s+(\w+)\s+from\s+"@\/assets\/product\/([^"]+)"/g;
const map = {};

let match;
while ((match = importRegex.exec(content)) !== null) {
    map[match[1]] = match[2];
}

// Remove all matched imports
content = content.replace(importRegex, '');

// Replace src: varName,
content = content.replace(/src:\s*(\w+),/g, (match, varName) => {
    if (map[varName]) {
        return `src: "/product/${map[varName]}",`;
    }
    return match; // keep original if not in map
});

fs.writeFileSync(filePath, content, 'utf8');
console.log("Replaced imports successfully.");
