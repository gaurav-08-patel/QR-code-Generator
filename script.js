let input = document.querySelector(".header input");
let sizes = document.querySelector("#sizes");
let generateQr = document.querySelector(".generate-qr");
let downloadQr = document.querySelector(".downlaod-qr");
let qrContainer = document.querySelector(".qr-body");


// let size = sizes.value;

sizes.addEventListener("change",()=>{
    textEmptyOrNot();
})

generateQr.addEventListener("click",(e)=>{
    e.preventDefault();
    textEmptyOrNot();
})

downloadQr.addEventListener("click",(e)=>{
    let qrImage = document.querySelector(".qr-body img");

    if(qrImage !== null){
        let attribute = qrImage.getAttribute("src");

        downloadQr.setAttribute("download","QR_code.png");
        downloadQr.setAttribute("href",attribute);
    }else{
        e.preventDefault();
        alert("Generate the img first !")
    }
    
})

function textEmptyOrNot(){
    input.value.length > 0 ? generateQrCode() : alert("Enter the text or URL in input area !"); ;

}

function generateQrCode(){
    qrContainer.innerHTML="";
    let size = sizes.value;
    new QRCode(qrContainer,{
        text:input.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}