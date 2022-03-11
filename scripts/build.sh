pnpm i --no-frozen-lockfile;

cd macro;
rm -rf dist;
echo "Building Externals";
pnpm i --no-frozen-lockfile;

npm run build;

cd ../;
echo "Building Main";
npm run build;