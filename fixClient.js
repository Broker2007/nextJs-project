const fs = require('fs');
const path = require('path');

const files = [
    'src/components/Header/Header.jsx',
    'src/app/products/[id]/page.jsx',
    'src/app/products/page.jsx',
    'src/app/page.jsx',
    'src/app/equipment/page.jsx',
    'src/app/about/page.jsx',
    'src/app/contact/page.jsx'
].map(f => path.join(__dirname, f));

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if starts with import and second line is use client
    const regex = /^(import [^\r\n]+\r?\n)(["']use client["'];?\r?\n)/;
    if (regex.test(content)) {
        content = content.replace(regex, '$2$1');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed', file);
    }
});
