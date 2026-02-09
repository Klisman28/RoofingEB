const fs = require('fs');
const path = require('path');

// Assuming script is run from project root or scripts/ folder, determine root.
// If run as `node scripts/clean.js`, __dirname is /path/to/project/scripts
const rootDir = path.resolve(__dirname, '..');

console.log(`Cleaning artifacts in: ${rootDir}`);

const dirsToRemove = ['.next', 'out'];

// Helper to remove directory recursively
function deleteFolderRecursive(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
        console.log(`Deleted directory: ${path.relative(rootDir, directoryPath)}`);
    } else {
        console.log(`Directory not found (already clean): ${path.relative(rootDir, directoryPath)}`);
    }
}

// Remove directories
dirsToRemove.forEach(dir => {
    deleteFolderRecursive(path.join(rootDir, dir));
});

// Remove generated root files
const safeFiles = [
    'google_api_output.txt',
    'robots.txt', // often manually managed in public/, but sometimes generated. keep safe just in case unless in out/
    'LICENSE',
    'README.md',
    '.gitignore',
    '.env',
    '.env.local',
    '.env.example',
    'next.config.js',
    'package.json',
    'package-lock.json',
    'postcss.config.js',
    'tailwind.config.js',
    'jsconfig.json',
    'tsconfig.json'
];

try {
    const files = fs.readdirSync(rootDir);
    files.forEach(file => {
        const fullPath = path.join(rootDir, file);
        if (fs.lstatSync(fullPath).isDirectory()) return;

        // Skip known safe files
        if (safeFiles.includes(file)) return;
        // Skip script files
        if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.json') || file.endsWith('.md')) return;

        // Target .html and .txt that look like pages
        // User mentioned: 404.html, about.html, etc.
        const isHtml = file.endsWith('.html');
        const isTxT = file.endsWith('.txt');

        if (isHtml || (isTxT && !safeFiles.includes(file))) {
            console.log(`Deleting generated file: ${file}`);
            fs.unlinkSync(fullPath);
        }
    });

    console.log("Clean complete.");
} catch (err) {
    console.error("Error cleaning root files:", err);
}
