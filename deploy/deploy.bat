cd ../dist
git init
git add .
git commit -m "update"
git remote add origin https://github.com/CadanoX/cadanox.github.io.git
git push -u origin master --force
cd ..
@pause