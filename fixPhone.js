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
    
    let modified = false;
    
    if (content.includes('+7 (901) 181-11-12') || content.includes('+7 (903) 117-59-07') || content.includes('pk-vektor@internet.ru')) {
        
        if (!content.includes('COMPANY_PHONE')) {
            content = 'import { COMPANY_PHONE, COMPANY_PHONE_2, COMPANY_EMAIL } from "@/constants/info";\n' + content;
        }

        content = content.replace(/\+7 \(901\) 181-11-12/g, '{COMPANY_PHONE}');
        content = content.replace(/\+7 \(903\) 117-59-07/g, '{COMPANY_PHONE_2}');
        content = content.replace(/pk-vektor@internet\.ru/g, '{COMPANY_EMAIL}');
        
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed', file);
    }
});
