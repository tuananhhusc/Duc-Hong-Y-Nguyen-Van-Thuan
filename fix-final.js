/**
 * Script to fix specific sticky words and remaining artifacts in corpus.ts
 */

const fs = require('fs');
const path = require('path');

const corpusPath = path.join(__dirname, 'src/lib/data/corpus.ts');
let content = fs.readFileSync(corpusPath, 'utf8');

const specificFixes = [
    // Long sticky words from scan
    ['muốngianhậphoặc', 'muốn gia nhập hoặc'],
    ['mừnghátAlleluia', 'mừng hát Alleluia'],
    ['tranghoànghẳnhoi', 'trang hoàng hẳn hoi'],

    // CamelCase / Capitalization sticky words
    ['BácÁi', 'Bác Ái'],
    ['bácÁi', 'bác Ái'],
    ['đứcÁi', 'đức Ái'],
    ['PhúcÂm', 'Phúc Âm'],
    ['PhúcÂ', 'Phúc Â'],
    ['TânƯớc', 'Tân Ước'],
    ['TânƯ', 'Tân Ư'],
    ['CựuƯớc', 'Cựu Ước'],
    ['CựuƯ', 'Cựu Ư'],
    ['Ơngọi', 'Ơn gọi'],
    ['ơngọi', 'ơn gọi'],
    ['máyIBM', 'máy IBM'],
    ['bênAi', 'bên Ai'],
    ['đếnAi', 'đến Ai'],
    ['ThánhThể', 'Thánh Thể'],
    ['GiáoHội', 'Giáo Hội'],
    ['GiáoDân', 'Giáo Dân'],
    ['CôngĐồng', 'Công Đồng'],

    // Lowercase sticky words
    ['thựchiện', 'thực hiện'],
    ['hânhoan', 'hân hoan'],
    ['hânhoanhát', 'hân hoan hát'],
    ['vinhdanh', 'vinh danh'],
    ['ômấp', 'ôm ấp'],
    ['tânhôn', 'tân hôn'],
    ['tânhônở', 'tân hôn ở'],
    ['biếtrõ', 'biết rõ'],
    ['tậnHiến', 'tận Hiến'], // Mixed case
    ['tậnhiến', 'tận hiến'],
    ['cáchội', 'các hội'], // "các hội viên"
    ['cảnhà', 'cả nhà'],
    ['cầnthiết', 'cần thiết'],
    ['tấtcảnhững', 'tất cả những'],
    ['tấtcả', 'tất cả'],
    ['cảnhững', 'cả những'],
    ['ranhư', 'ra như'],
    ['Chanhân', 'Cha nhân'],
    ['bácái', 'bác ái'], // re-apply just in case

    // Common joined words that might occur
    ['lờichúa', 'lời chúa'],
    ['LờiChúa', 'Lời Chúa'],
    ['ThánhKinh', 'Thánh Kinh'],
    ['nướcChúa', 'nước Chúa'],
    ['dânChúa', 'dân Chúa'],
    ['conngười', 'con người'],
    ['mọingười', 'mọi người'],
    ['thếgiới', 'thế giới'],
    ['hoabình', 'hòa bình'],
    ['tựdo', 'tự do'],
    ['cônglý', 'công lý'],
    ['sựthật', 'sự thật'],
    ['chânlý', 'chân lý'],
    ['việcngĩa', 'việc nghĩa'], // typo? việc nghĩa
    ['việcnghĩa', 'việc nghĩa'],

    // Fix potential bad joins from previous regex
    ['vớicác', 'với các'],
    ['củaác', 'của các'], // if "c ủa c ác" -> "củaác"? Check context
    ['vềc', 'về c'], // likely "về các" or "về cõi"
    ['làc', 'là c'],
    ['củac', 'của c'],
    ['choC', 'cho C'],
    ['choTi', 'cho Ti'], // cho Tim? cho Tình?
    ['hoanhãm', 'hoan hãm'],
    ['hiệný', 'hiện ý'],
    ['nguyệný', 'nguyện ý'],
];

let count = 0;
for (const [pattern, replacement] of specificFixes) {
    if (content.includes(pattern)) {
        content = content.split(pattern).join(replacement);
        count++;
    }
}

console.log(`Applied ${count} types of specific sticky word fixes.`);

fs.writeFileSync(corpusPath, content, 'utf8');
