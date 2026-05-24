const fs = require('fs');
const path = require('path');

// Fix start in classes.scss
const classesFile = path.join(__dirname, 'src/style/scss/classes.scss');
if (fs.existsSync(classesFile)) {
    let content = fs.readFileSync(classesFile, 'utf8');
    content = content.replace(/justify-content:\s*start\s*;/g, 'justify-content: flex-start;');
    content = content.replace(/align-items:\s*start\s*;/g, 'align-items: flex-start;');
    fs.writeFileSync(classesFile, content, 'utf8');
    console.log('Fixed classes.scss');
}

// Fix imports in module.scss files
const moduleFiles = [
    'src/components/ui/MyButtonForm/MyButtonFrom.module.scss',
    'src/components/ui/MyButton/MyButton.module.scss',
    'src/components/Header/Header.module.scss'
].map(f => path.join(__dirname, f));

moduleFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace app.scss with vars.scss
    content = content.replace(/app\.scss/g, 'vars.scss');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed imports in', file);
});
