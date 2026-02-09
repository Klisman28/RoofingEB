const fs = require('fs');
const path = require('path');

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
    'robots.txt',
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
    'tsconfig.json',
    'ACTUALIZAR_HOSTINGER.md',
    'EMAIL_SETUP.md',
    'QUICK_REFERENCE.md',
    'test_api.ps1',
    'test_contact_api.ps1'
];

try {
    const files = fs.readdirSync(rootDir);
    files.forEach(file => {
        const fullPath = path.join(rootDir, file);
        if (fs.lstatSync(fullPath).isDirectory()) return;

        // Skip known safe files
        if (safeFiles.includes(file)) return;
        // Skip script files
        if (file.endsWith('.js') && (file.startsWith('clean') || path.dirname(file).endsWith('scripts'))) return; // although this file is in scripts/

        // Target .html and .txt that look like pages
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
