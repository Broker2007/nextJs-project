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
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for <div> inside <p>
    // This is a naive regex but catches simple <p>...<div>...</p>
    const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/g);
    if (pMatch) {
        pMatch.forEach(p => {
            if (p.includes('<div')) {
                console.log(`Found <div> inside <p> in ${filePath}`);
            }
        });
    }

    // Check for <a> inside <a> (or Link inside Link)
    const aMatch = content.match(/<Link[^>]*>([\s\S]*?)<\/Link>/g);
    if (aMatch) {
        aMatch.forEach(a => {
            if (a.includes('<Link') && a.lastIndexOf('<Link') !== 0) {
                console.log(`Found <Link> inside <Link> in ${filePath}`);
            }
        });
    }
  }
});
