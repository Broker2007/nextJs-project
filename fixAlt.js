const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if(filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Match <Image ... /> or <Image> ... </Image>
    // We only care about adding alt if missing.
    // Replace <Image (not containing alt=) with <Image alt="изображение"
    // To handle multiline correctly, we match <Image followed by anything until >
    
    // We will use a regex to find <Image tags
    const imageTagRegex = /<Image([\s\S]*?)(\/?>)/g;
    
    content = content.replace(imageTagRegex, (match, attrs, endTag) => {
        // if attributes already contain alt=, do nothing
        if (/\balt\s*=/.test(attrs)) {
            return match;
        }
        // otherwise inject alt="изображение"
        return `<Image alt="изображение"${attrs}${endTag}`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed alts in', filePath);
    }
  }
});
