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

      // Fix background image URL paths - standard format
      content = content.replace(/url\('\/images\//g, "url('/katanovic/images/");
      content = content.replace(/url\("\/images\//g, 'url("/katanovic/images/');

      // Fix HTML encoded background image URL paths (&#x27; is encoded apostrophe)
      content = content.replace(
        /url\(&#x27;\/images\//g,
        'url(&#x27;/katanovic/images/'
      );
      content = content.replace(
        /url\(&quot;\/images\//g,
        'url(&quot;/katanovic/images/'
      );

      // Fix href paths for favicons and manifest
      content = content.replace(/href="\/favicon/g, 'href="/katanovic/favicon');
      content = content.replace(
        /href="\/site\.webmanifest/g,
        'href="/katanovic/site.webmanifest'
      );
      content = content.replace(
        /href="\/apple-touch-icon/g,
        'href="/katanovic/apple-touch-icon'
      );

      // Fix any remaining /images/ references in any context
      content = content.replace(/\/images\//g, '/katanovic/images/');

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed paths in: ${fullPath}`);
    }
  }
}

// Fix paths in the out directory
if (fs.existsSync('out')) {
  console.log('Fixing image paths in out/ directory...');
  fixImagePaths('out');
  console.log('Image paths fixed successfully!');
} else {
  console.log('out/ directory not found. Please run "npm run build" first.');
}
