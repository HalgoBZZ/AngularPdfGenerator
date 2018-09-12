import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';

@Component({
  selector: 'app-pdf-js-v3',
  templateUrl: './pdf-js-v3.component.html',
  styleUrls: ['./pdf-js-v3.component.css']
})
export class PdfJsV3Component implements OnInit {

  margins={left:20,top:20, width:100}
  constructor() { }

  ngOnInit() {
  }



  generate(){
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
    pdf.addHTML($('#html-2-pdfwrapper'), 
    this.margins.left, this.margins.top,this.margins,function(dispose) {
      this.headerFooterFormatting(pdf);
    });
    
  var iframe = document.createElement('iframe');
  iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
  document.body.appendChild(iframe);
  
  iframe.src = pdf.output('datauristring');
}


headerFooterFormatting(doc) {
    var totalPages  = doc.internal.getNumberOfPages();
    for(var i = totalPages; i >= 1; i--){
        doc.setPage(i);       
        this.header(doc);
        //this.footer(doc, i, totalPages);   
    }
}

header(doc){
    doc.setFontSize(30);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    /*if (base64Img) {
       doc.addImage(base64Img, 'JPEG', margins.left, 10, 40,40);        
    } */
    doc.text("Report Header Template", this.margins.left + 50, 40 );
    doc.line(3, 70, this.margins.width + 43,70); // horizontal line
}
}
