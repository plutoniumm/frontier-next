pnpm i --no-frozen-lockfile;

cd macro/MegaCard;
pnpm i --no-frozen-lockfile;

npm run build;

cd ../../
npm run build;