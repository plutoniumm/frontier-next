git add .;

# while true; do
#     read -p "Run Build Test?" yn
#     case $yn in
#         [Yy]* ) if npm run build ; then echo "Enter Message" else exit fi;;
#         [Nn]* ) exit;;
#         * ) echo "Please answer yes or no.";;
#     esac
# done

echo "Enter Message:"
read msg;
git commit -m "$msg";

# git pull;
git push;