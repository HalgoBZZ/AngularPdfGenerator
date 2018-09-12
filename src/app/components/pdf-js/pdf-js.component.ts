import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-pdf-js',
  templateUrl: './pdf-js.component.html',
  styleUrls: ['./pdf-js.component.css']
})
export class PdfJsComponent implements OnInit {

  name = 'Angular 5';
 images = [{
  name: "Image 1", url:"https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg"
},
{
  name:"Image 2",
  url:"https://akm-img-a-in.tosshub.com/indiatoday/559_102017023826.jpg?TZlWXro5W8Rj4VbO.MpENgo1F2MX93j"
}]
ngOnInit() {

}

getBase64Image(img) {
  var canvas = document.createElement("canvas");
  //console.log("image");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL;
}

//var base64 = (document.getElementById("imageid"));
download(){
  let doc:jsPDF=new jsPDF();
  for(var i=0;i<this.images.length;i++){
   let imageData= this.getBase64Image(document.getElementById('img'+i));
  // console.log(imageData);
     doc.addImage(imageData, "JPG", 10, (i+1)*10, 180, 150);
     doc.addPage();
  }
  doc.save('Test.pdf');
}
}
