var images=["https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
" https://cdn4.vectorstock.com/i/1000x1000/23/08/super-dad-cartoon-vector-36752308.jpg",
" https://i.pinimg.com/originals/13/18/b3/1318b3540a829d0d220e1e7005df6229.jpg",
"  https://png.pngtree.com/png-clipart/20190604/original/pngtree-vector-cartoon-girl-with-glasses-png-image_1044496.jpg",
      ];
var names=["simmi singh","hansraj singh","animesh singh","aditi singh"];
var i=0;
function update()
{i++;
    var number_of_family_memeber_in_array=4
    if(i>number_of_family_memeber_in_array)
    {
    i=0;
}
var updateimage=images[i];
var updatename=names[i];
document.getElementById("FP").src=updatedimages;
document.getElementById("FN").innerHTML=updatedname;
}
