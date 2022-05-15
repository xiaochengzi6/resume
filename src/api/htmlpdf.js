import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
export default function printPDF(height) {
    
    const domElement = document.querySelector('.leftView--div')
    html2canvas(domElement,{width:794,height:height})
        .then((canvas) => {
            const img = canvas.toDataURL('image/png')
            const pdf = new jsPdf('p', 'px', [794,height])
            pdf.addImage(img, 'JPEG', 0, 0, 794, height)
            pdf.save('your-filename.pdf')
            console.log('进来了')
        })
}
