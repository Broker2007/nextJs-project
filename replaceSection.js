const fs = require('fs');
const path = require('path');

const files = [
    'src/app/products/[id]/page.jsx',
    'src/app/products/page.jsx',
    'src/app/page.jsx',
    'src/app/equipment/page.jsx',
    'src/app/contact/page.jsx',
    'src/app/about/page.jsx'
].map(f => path.join(__dirname, f));

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    const originalContent = content;

    // add import if missing
    if (!content.includes('ContactSection')) {
        const importBlockMatch = content.match(/^(?:import [^\n]+(?:;)?[\r\n]+)+/m);
        if (importBlockMatch) {
            content = content.replace(importBlockMatch[0], importBlockMatch[0] + 'import ContactSection from "@/components/ContactSection/ContactSection";\n');
        } else {
             // Just in case we didn't match the block, put it after "use client" if it exists
             if (content.includes('"use client"')) {
                 content = content.replace(/"use client"(?:;)?[\r\n]+/, '$&import ContactSection from "@/components/ContactSection/ContactSection";\n');
             } else {
                 content = 'import ContactSection from "@/components/ContactSection/ContactSection";\n' + content;
             }
        }
    }

    const regex = /<div className=\{"d-f flex-wrap jc-sp ai-s quection_contact_parent[\s\S]*?<MyForm className=\{"max_width380"\}\/>\s*<\/div>/;
    
    if (regex.test(content)) {
        content = content.replace(regex, '<ContactSection />');
        // Let's also remove import MyForm if we aren't using it anymore in this file
        // Wait, MyForm might be used elsewhere? Contact page might have a second MyForm.
        // Better to leave imports alone, unused imports are just warnings, or Next.js ignores them.
    }

    if (originalContent !== content) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed', file);
    }
});
