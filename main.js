prediction1 = "";
prediction2 = "";

Webcam.set({
  width:400,
  height:200,
  image_format:'png',
  png_quality:90
});
Webcam.attach(document.getElementById("camera"));

function capturepicturenow(){
    Webcam.snap(function(data_uri){
document.getElementById("picture").innerHTML = '<img id = "imgharry" src = "'+ data_uri +'"/>';

    });
    
}
console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GfADBX1rn/model.json', modelLoaded);

function modelLoaded(){
    console.log(modelLoaded);

}
