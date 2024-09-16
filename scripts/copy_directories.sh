#!/bin/bash

# 定义源目录
SOURCE_MAIN="packages/main/dist"
SOURCE_APP_VUE3="packages/app-vue3/dist"
SOURCE_APP_VUE2="packages/app-vue2/dist"

# 定义目标目录
TARGET_DIR="dist"

# 创建目标目录
mkdir -p "$TARGET_DIR"

# 拷贝目录并重命名
cp -r "$SOURCE_MAIN" "$TARGET_DIR/main"
cp -r "$SOURCE_APP_VUE3" "$TARGET_DIR/app-vue3"
# mkdir -p "$TARGET_DIR/app-vue2"
cp -r "$SOURCE_APP_VUE2" "$TARGET_DIR/app-vue2"

echo "Directories copied successfully."