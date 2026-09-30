const fs = require('fs');
const path = require('path');

const files = [
    'src/components/ui/MyButtonForm/MyButtonFrom.module.scss',
    'src/components/ui/MyButton/MyButton.module.scss',
    'src/components/ui/Accordion2/AccordionItem/AccordionItem2.module.scss'
].map(f => path.join(__dirname, f));

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    const original = content;
    // Replace start with flex-start for align-items and justify-content
    content = content.replace(/align-items:\s*start\s*;/g, 'align-items: flex-start;');
    content = content.replace(/justify-content:\s*start\s*;/g, 'justify-content: flex-start;');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed', file);
    }
});
