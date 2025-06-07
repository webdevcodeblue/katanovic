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
      const originalContent = content;

      // First, fix any double prefixes that already exist
      content = content.replace(
        /\/katanovic\/katanovic\/images\//g,
        '/katanovic/images/'
      );

      // Then fix paths that don't have any prefix yet
      // Fix regular image src paths (only if they don't already have katanovic prefix)
      content = content.replace(
        /src="(?!\/katanovic)\/images\//g,
        'src="/katanovic/images/'
      );

      // Fix background image URL paths - standard format
      content = content.replace(
        /url\('(?!\/katanovic)\/images\//g,
        "url('/katanovic/images/"
      );
      content = content.replace(
        /url\("(?!\/katanovic)\/images\//g,
        'url("/katanovic/images/'
      );

      // Fix HTML encoded background image URL paths (&#x27; is encoded apostrophe)
      content = content.replace(
        /url\(&#x27;(?!\/katanovic)\/images\//g,
        'url(&#x27;/katanovic/images/'
      );
      content = content.replace(
        /url\(&quot;(?!\/katanovic)\/images\//g,
        'url(&quot;/katanovic/images/'
      );

      // Fix href paths for favicons and manifest (only if they don't already have katanovic prefix)
      content = content.replace(
        /href="(?!\/katanovic)\/favicon/g,
        'href="/katanovic/favicon'
      );
      content = content.replace(
        /href="(?!\/katanovic)\/site\.webmanifest/g,
        'href="/katanovic/site.webmanifest'
      );
      content = content.replace(
        /href="(?!\/katanovic)\/apple-touch-icon/g,
        'href="/katanovic/apple-touch-icon'
      );

      // Only write if content has changed
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed paths in: ${fullPath}`);
      } else {
        console.log(`No changes needed for: ${fullPath}`);
      }
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
