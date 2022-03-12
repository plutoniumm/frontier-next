pnpm i --no-frozen-lockfile;

cd macro;
rm -rf dist;
echo "Building Externals";
pnpm i --no-frozen-lockfile;

npm run build;
mv dist ../public/macro;

cd ../;
echo "Building Main";
npm run build;