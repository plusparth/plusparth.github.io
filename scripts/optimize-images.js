const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + "MB";
}

function optimizeImages() {
  console.log("🖼️  Starting image optimization...");

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
    // Get list of images to optimize
    const srcImages = fs
      .readdirSync("src/img")
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    const projectImages = fs
      .readdirSync("public/public_img/projects")
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    console.log("📁 Optimizing src/img/ images...");

    // Optimize src images
    srcImages.forEach((file) => {
      const inputPath = path.join("src/img", file);
      const outputPath = path.join(optimizedSrcDir, file);

      const originalSize = getFileSize(inputPath);

      try {
        if (/\.(jpg|jpeg)$/i.test(file)) {
          // Optimize JPEG files
          execSync(
            `npx imagemin-cli "${inputPath}" --out-dir="${optimizedSrcDir}" --plugin=mozjpeg --plugin.mozjpeg.quality=80 --plugin.mozjpeg.progressive=true`,
            { stdio: "pipe" }
          );
        } else if (/\.png$/i.test(file)) {
          // Optimize PNG files
          execSync(
            `npx imagemin-cli "${inputPath}" --out-dir="${optimizedSrcDir}" --plugin=pngquant --plugin.pngquant.quality=0.6-0.8`,
            { stdio: "pipe" }
          );
        }

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
      } catch (error) {
        console.warn(`⚠️  Could not optimize ${file}, copying original...`);
        fs.copyFileSync(inputPath, outputPath);
        totalOriginalSize += originalSize;
        totalOptimizedSize += originalSize;
      }
    });

    console.log("📁 Optimizing public/public_img/projects/ images...");

    // Optimize project images
    projectImages.forEach((file) => {
      const inputPath = path.join("public/public_img/projects", file);
      const outputPath = path.join(optimizedPublicDir, file);

      const originalSize = getFileSize(inputPath);

      try {
        if (/\.(jpg|jpeg)$/i.test(file)) {
          // Optimize JPEG files with slightly higher quality for project images
          execSync(
            `npx imagemin-cli "${inputPath}" --out-dir="${optimizedPublicDir}" --plugin=mozjpeg --plugin.mozjpeg.quality=85 --plugin.mozjpeg.progressive=true`,
            { stdio: "pipe" }
          );
        } else if (/\.png$/i.test(file)) {
          // Optimize PNG files
          execSync(
            `npx imagemin-cli "${inputPath}" --out-dir="${optimizedPublicDir}" --plugin=pngquant --plugin.pngquant.quality=0.7-0.9`,
            { stdio: "pipe" }
          );
        }

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
      } catch (error) {
        console.warn(`⚠️  Could not optimize ${file}, copying original...`);
        fs.copyFileSync(inputPath, outputPath);
        totalOriginalSize += originalSize;
        totalOptimizedSize += originalSize;
      }
    });

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
  } catch (error) {
    console.error("❌ Error optimizing images:", error.message);
    process.exit(1);
  }
}

optimizeImages();
