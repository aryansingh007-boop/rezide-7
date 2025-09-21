const fs = require('fs');
const path = require('path');

// Check if all required images exist in the public/images/rezide folder
const requiredImages = [
  'logo.png',
  'presentation.jpg',
  'workshop.jpg',
  'event.jpg',
  'additional.jpg'
];

const publicImagesPath = path.join(__dirname, '..', 'public', 'images', 'rezide');

console.log('🔍 Checking image files...');
console.log('📁 Public images directory:', publicImagesPath);

let allImagesExist = true;

requiredImages.forEach(imageName => {
  const imagePath = path.join(publicImagesPath, imageName);
  const exists = fs.existsSync(imagePath);
  
  if (exists) {
    console.log(`✅ ${imageName} - Found`);
  } else {
    console.log(`❌ ${imageName} - Missing`);
    allImagesExist = false;
  }
});

if (allImagesExist) {
  console.log('\n🎉 All images are present! Ready for deployment.');
} else {
  console.log('\n⚠️  Some images are missing. Please check the public/images folder.');
}

// List all files in the images directory
console.log('\n📋 All files in public/images:');
try {
  const files = fs.readdirSync(publicImagesPath);
  files.forEach(file => {
    console.log(`   - ${file}`);
  });
} catch (error) {
  console.log('   Error reading directory:', error.message);
}
