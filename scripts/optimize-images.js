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

function getAllImageFiles(
  dir,
  extensions = [".jpg", ".jpeg", ".png", ".webp"]
) {
  let results = [];

  if (!fs.existsSync(dir)) {
    return results;
  }

  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recursively search subdirectories
      results = results.concat(getAllImageFiles(filePath, extensions));
    } else {
      // Check if file has an image extension
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });

  return results;
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { quality = 80, progressive = true } = options;

  try {
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const ext = path.extname(inputPath).toLowerCase();
    let sharpInstance = sharp(inputPath);

    if (ext === ".jpg" || ext === ".jpeg") {
      await sharpInstance.jpeg({ quality, progressive }).toFile(outputPath);
    } else if (ext === ".png") {
      await sharpInstance.png({ quality, progressive }).toFile(outputPath);
    } else if (ext === ".webp") {
      await sharpInstance.webp({ quality }).toFile(outputPath);
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
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.copyFileSync(inputPath, outputPath);
    return false;
  }
}

function getOptimizedPath(inputPath, sourceDir, optimizedDir) {
  const relativePath = path.relative(sourceDir, inputPath);
  return path.join(optimizedDir, relativePath);
}

async function processImageDirectory(sourceDir, optimizedDir, options = {}) {
  const { quality = 80, logPrefix = "" } = options;

  console.log(`${logPrefix}📁 Processing ${sourceDir}...`);

  const imageFiles = getAllImageFiles(sourceDir);

  if (imageFiles.length === 0) {
    console.log(`${logPrefix}ℹ️  No images found in ${sourceDir}`);
    return { originalSize: 0, optimizedSize: 0, count: 0 };
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;

  for (const inputPath of imageFiles) {
    const outputPath = getOptimizedPath(inputPath, sourceDir, optimizedDir);
    const originalSize = getFileSize(inputPath);

    const relativePath = path.relative(sourceDir, inputPath);

    await optimizeImage(inputPath, outputPath, { quality });

    const optimizedSize = getFileSize(outputPath);
    const savings =
      originalSize > 0
        ? (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1)
        : 0;

    console.log(
      `${logPrefix}✅ ${relativePath}: ${formatBytes(
        originalSize
      )} → ${formatBytes(optimizedSize)} (${savings}% ${
        savings >= 0 ? "smaller" : "larger"
      })`
    );

    totalOriginalSize += originalSize;
    totalOptimizedSize += optimizedSize;
    processedCount++;
  }

  return {
    originalSize: totalOriginalSize,
    optimizedSize: totalOptimizedSize,
    count: processedCount,
  };
}

async function optimizeImages() {
  console.log("🖼️  Starting recursive image optimization with Sharp...");

  // Define source and optimized directories
  const imageDirectories = [
    {
      source: "src/img",
      optimized: "src/img-optimized",
      quality: 80,
      description: "Source images",
    },
    {
      source: "public/public_img",
      optimized: "public/public_img_optimized",
      quality: 85,
      description: "Public images (higher quality for projects)",
    },
  ];

  let grandTotalOriginal = 0;
  let grandTotalOptimized = 0;
  let grandTotalCount = 0;

  try {
    for (const config of imageDirectories) {
      if (fs.existsSync(config.source)) {
        console.log(`\n🎯 ${config.description}:`);

        const result = await processImageDirectory(
          config.source,
          config.optimized,
          {
            quality: config.quality,
            logPrefix: "  ",
          }
        );

        grandTotalOriginal += result.originalSize;
        grandTotalOptimized += result.optimizedSize;
        grandTotalCount += result.count;

        if (result.count > 0) {
          const savings = (
            ((result.originalSize - result.optimizedSize) /
              result.originalSize) *
            100
          ).toFixed(1);
          console.log(
            `  📊 Subtotal: ${formatBytes(result.originalSize)} → ${formatBytes(
              result.optimizedSize
            )} (${savings}% savings, ${result.count} files)`
          );
        }
      } else {
        console.log(
          `\n⚠️  Directory ${config.source} does not exist, skipping...`
        );
      }
    }

    if (grandTotalCount > 0) {
      // Show grand totals
      const totalSavings = (
        ((grandTotalOriginal - grandTotalOptimized) / grandTotalOriginal) *
        100
      ).toFixed(1);

      console.log(`\n🎉 Optimization complete!`);
      console.log(
        `📊 Total: ${formatBytes(grandTotalOriginal)} → ${formatBytes(
          grandTotalOptimized
        )}`
      );
      console.log(
        `💾 Overall savings: ${totalSavings}% (${formatBytes(
          grandTotalOptimized - grandTotalOriginal
        )} saved)`
      );
      console.log(`📈 Files processed: ${grandTotalCount}`);

      console.log("\n📝 Usage Notes:");
      console.log("• Update your imports to use the optimized images");
      console.log("• src/img/ references → src/img-optimized/");
      console.log(
        "• public/public_img/ references → public/public_img_optimized/"
      );
      console.log("• Optimized images maintain the same directory structure");
    } else {
      console.log("ℹ️  No images found to optimize in any directory.");
    }
  } catch (error) {
    console.error("❌ Error optimizing images:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

optimizeImages().catch(console.error);
