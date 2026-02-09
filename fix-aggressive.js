/**
 * Script to AGGRESSIVELY fix Vietnamese OCR errors in corpus.ts
 * 
 * Strategy:
 * Any single consonant followed by a space and a diacritic vowel is almost certainly an error.
 * Example: "b áo" -> "báo", "c ác" -> "các", "t ôi" -> "tôi"
 * 
 * Exception: None in standard Vietnamese text (single consonants don't stand alone).
 * We exclude 'a', 'o', 'u', 'i', 'e', 'y' from the "consonant" list just to be super safe, 
 * although they act as vowels mostly.
 * 
 * Consonants to check: b, c, d, đ, g, h, k, l, m, n, p, q, r, s, t, v, x
 */

const fs = require('fs');
const path = require('path');

const corpusPath = path.join(__dirname, 'src/lib/data/corpus.ts');
let content = fs.readFileSync(corpusPath, 'utf8');

// List of consonants that should NEVER stand alone before a vowel
// format: [regex_pattern, replacement]
const consonants = "bcdđghklmnpqrstvx"; // Excluded vowels and y
// Diacritic vowels (and plain vowels that can't follow a lone consonant)
// Actually we can just match any vowel unicode range if possible, but let's stick to the list we know
const vowels = "aàáảãạăằắẳẵặâầấẩẫậeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ";

// Regex:
// \b: word boundary
// ([consonants]): group 1
// \s+: space
// ([vowels]...): group 2 - word starting with a vowel
// global, case insensitive

// We construct the Regex dynamically
// Note: We need to handle Upper and Lower case
// Pattern: /\b([bcd...]) ([àá...]\w*)/gi

// Let's create a specific list of vowels that definitely shouldn't follow a lone consonant space
// Basically ALL vowels. "b a" -> "ba", "c a" -> "ca"
// But let's be careful with things like "phần a", "mục b". 
// "mục b" context: "b" is followed by space or punctuation.
// Our pattern looks for "b" followed by space followed by VOWEL.
// "mục b ấm" -> "mục bầm"? Unlikely usage.
// "phần a ý" -> "phần ay"? No.
// So pattern: Consonant + Space + Vowel is extremely safe to merge.

// Fix 1: Consonant + Space + Vowel (with or without diacritics)
// We use a comprehensive list of Vietnamese vowels
const allVowels = "aàáảãạăằắẳẵặâầấẩẫậeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ";
const allConsonants = "bcdđghklmnpqrstvxQTY"; // Added some potential OCR caps errors

// Regex pattern:
// Look for a single consonant (surrounded by boundary or space or punctuation), followed by space, followed by a vowel char
// We use capture groups to replace "$1$2$3" -> prefix + consonant + vowel (no space between cons and vowel)

const aggressiveRegex = new RegExp(`(^|[^a-zA-ZđĐ])([${allConsonants}])\\s+([${allVowels}][a-zàáảãạăằắẳẵặâầấẩẫậeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ]*)`, 'gmi');

// We need to run this replacement multiple times to handle overlaps?
// replaceAll in JS handles global matches, but overlapping matches are tricky.
// However, since we consume the consonant and vowel, overlaps are unlikely to be an issue here unless we have "b a c e".
// "b a" becomes "ba". "c e" becomes "ce". They don't overlap in the consumed part.

let fixedCount = 0;
// Use a function to count replacements for logging
content = content.replace(aggressiveRegex, (match, p1, p2, p3) => {
    fixedCount++;
    return p1 + p2 + p3;
});

// Run a second pass just in case
content = content.replace(aggressiveRegex, (match, p1, p2, p3) => {
    fixedCount++;
    return p1 + p2 + p3;
});

console.log(`Aggressive fix applied approx ${fixedCount} times.`);

// Additional specific manual fixes for things found in scan
const manualFixes = [
    ['N ếu', 'Nếu'],
    ['n ếu', 'nếu'],
    ['v à', 'và'],
    ['v ào', 'vào'],
    ['V à', 'Và'],
    ['c ủa', 'của'],
    ['ho á', 'hoá'], // a non-diacritic 'a' followed by diacritic 'a' is rare, this is usually 'hoá'
    ['h o á', 'hoá'],
    ['h oá', 'hoá'],
    ['lu ôn', 'luôn'],
    ['Lu ôn', 'Luôn'],
    ['m uốn', 'muốn'],
    ['M uốn', 'Muốn'],
    ['c ũ', 'cũ'],

    // Common digraphs split
    ['k h', 'kh'],
    ['n g', 'ng'],
    ['t r', 'tr'],
    ['t h', 'th'],
    ['c h', 'ch'],
    ['p h', 'ph'],
    ['n h', 'nh'],
    ['g h', 'gh'],
    ['g i', 'gi'],
    ['q u', 'qu'],
];

for (const [pattern, replacement] of manualFixes) {
    // Global replace
    content = content.split(pattern).join(replacement);
}

fs.writeFileSync(corpusPath, content, 'utf8');
console.log('✅ Aggressive cleanup complete.');
