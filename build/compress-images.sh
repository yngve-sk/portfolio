# Script for compressing all images in images/
# outputting them to images_compressed
# Works on gifs and pngs
if [ ! -d "../assets/images_compressed" ] 
then
  mkdir images_compressed
fi

cd ../assets/images

# Presumes pngquant being installed
# https://pngquant.org/
for f in *.png
  do
    echo "Compessing $f"
    if test -f "../images_compressed/$f"
    then
      echo "../images_compressed/$f already exists, overwriting..."
      rm ../images_compressed/$f
    fi
    pngquant --strip $f --speed=1 --quality=70-100 --output ../images_compressed/$f
  done

# Presumes gifsicle is installed
# https://www.lcdf.org/gifsicle/
echo "compressing gifs..."
for f in *.gif
  do
    echo "Compressing $f"
    gifsicle -i $f --optimize=3 --colors 128 --lossy=30 -o ../images_compressed/$f
  done