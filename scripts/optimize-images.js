const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + "MB";
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { quality = 80, progressive = true } = options;

  try {
    const ext = path.extname(inputPath).toLowerCase();
    let sharpInstance = sharp(inputPath);

    if (ext === ".jpg" || ext === ".jpeg") {
      await sharpInstance.jpeg({ quality, progressive }).toFile(outputPath);
    } else if (ext === ".png") {
      await sharpInstance.png({ quality, progressive }).toFile(outputPath);
    } else {
      // For other formats, just copy
      fs.copyFileSync(inputPath, outputPath);
    }

    return true;
  } catch (error) {
    console.warn(
      `⚠️  Could not optimize ${path.basename(inputPath)}: ${error.message}`
    );
    // Fallback: copy original file
    fs.copyFileSync(inputPath, outputPath);
    return false;
  }
}

async function optimizeImages() {
  console.log("🖼️  Starting image optimization with Sharp...");

  // Create optimized directories
  const optimizedSrcDir = "src/img-optimized";
  const optimizedPublicDir = "public/public_img_optimized/projects";

  if (!fs.existsSync(optimizedSrcDir)) {
    fs.mkdirSync(optimizedSrcDir, { recursive: true });
  }

  if (!fs.existsSync(optimizedPublicDir)) {
    fs.mkdirSync(optimizedPublicDir, { recursive: true });
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  try {
    // Check if source directories exist
    const srcImgDir = "src/img";
    const publicImgDir = "public/public_img/projects";

    let srcImages = [];
    let projectImages = [];

    if (fs.existsSync(srcImgDir)) {
      srcImages = fs
        .readdirSync(srcImgDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));
    }

    if (fs.existsSync(publicImgDir)) {
      projectImages = fs
        .readdirSync(publicImgDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));
    }

    if (srcImages.length > 0) {
      console.log("📁 Optimizing src/img/ images...");

      // Optimize src images
      for (const file of srcImages) {
        const inputPath = path.join(srcImgDir, file);
        const outputPath = path.join(optimizedSrcDir, file);

        const originalSize = getFileSize(inputPath);

        await optimizeImage(inputPath, outputPath, { quality: 80 });

        const optimizedSize = getFileSize(outputPath);
        const savings = (
          ((originalSize - optimizedSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(
          `✅ ${file}: ${formatBytes(originalSize)} → ${formatBytes(
            optimizedSize
          )} (${savings}% smaller)`
        );

        totalOriginalSize += originalSize;
        totalOptimizedSize += optimizedSize;
      }
    }

    if (projectImages.length > 0) {
      console.log("📁 Optimizing public/public_img/projects/ images...");

      // Optimize project images with slightly higher quality
      for (const file of projectImages) {
        const inputPath = path.join(publicImgDir, file);
        const outputPath = path.join(optimizedPublicDir, file);

        const originalSize = getFileSize(inputPath);

        await optimizeImage(inputPath, outputPath, { quality: 85 });

        const optimizedSize = getFileSize(outputPath);
        const savings = (
          ((originalSize - optimizedSize) / originalSize) *
          100
        ).toFixed(1);

        console.log(
          `✅ ${file}: ${formatBytes(originalSize)} → ${formatBytes(
            optimizedSize
          )} (${savings}% smaller)`
        );

        totalOriginalSize += originalSize;
        totalOptimizedSize += optimizedSize;
      }
    }

    if (totalOriginalSize > 0) {
      // Show totals
      const totalSavings = (
        ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
        100
      ).toFixed(1);
      console.log(`\n🎉 Optimization complete!`);
      console.log(
        `📊 Total size: ${formatBytes(totalOriginalSize)} → ${formatBytes(
          totalOptimizedSize
        )}`
      );
      console.log(
        `💾 Total savings: ${totalSavings}% (${formatBytes(
          totalOriginalSize - totalOptimizedSize
        )})`
      );

      console.log("\n📝 Next steps:");
      console.log("1. Update your imports to use the optimized images");
      console.log("2. Replace src/img/ references with src/img-optimized/");
      console.log(
        "3. Replace public/public_img/projects/ references with public/public_img_optimized/projects/"
      );
    } else {
      console.log("ℹ️  No images found to optimize.");
    }
  } catch (error) {
    console.error("❌ Error optimizing images:", error.message);
    process.exit(1);
  }
}

optimizeImages().catch(console.error);
