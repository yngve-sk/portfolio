cd ../dist
git init
git add .
git commit -m "update"
git remote add origin https://github.com/yngve-sk/yngve-sk.github.io.git
git push -u origin main --force
cd ..
@pause