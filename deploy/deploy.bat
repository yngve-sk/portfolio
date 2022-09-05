cd ../dist
git init
cp -r ../assets/images_compressed/ assets/
cp -r ../assets/linecount_data/ assets/
git add .
git commit -m "update"
git remote add origin https://github.com/yngve-sk/yngve-sk.github.io.git
git push -u origin main --force
cd ..
@pause