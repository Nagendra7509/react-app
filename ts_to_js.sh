find src -name "*.tsx" -exec sh -c 'mv "$0" "${0%.tsx}.js"' {} \;
find src -name "*.ts" -exec sh -c 'mv "$0" "${0%.ts}.js"' {} \;

