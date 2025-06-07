const fs = require('fs');
const path = require('path');

function fixImagePaths(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixImagePaths(fullPath);
    } else if (item.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Fix regular image src paths
      content = content.replace(/src="\/images\//g, 'src="/katanovic/images/');

      // Fix background image URL paths
      content = content.replace(/url\('\/images\//g, "url('/katanovic/images/");

      // Fix href paths for favicons and manifest
      content = content.replace(/href="\/favicon/g, 'href="/katanovic/favicon');
      content = content.replace(
        /href="\/apple-touch-icon/g,
        'href="/katanovic/apple-touch-icon'
      );
      content = content.replace(
        /href="\/site\.webmanifest"/g,
        'href="/katanovic/site.webmanifest"'
      );

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed paths in: ${fullPath}`);
    }
  }
}

console.log('Fixing image paths for GitHub Pages...');
fixImagePaths('./out');
console.log('✅ All image paths fixed!');
