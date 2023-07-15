var Content

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    console.log(Content);
      if(Content =="selfie")
      {
        console.log("taking selfie!~ ~");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        img_id = "IMAGE1";
        take_snapshot(); 
        speak_data = "Taking you Selfie in 5 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function()
    { 
        img_id = "IMAGE2";
        take_snapshot(); 
        speak_data = "Taking you Selfie in 10 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function()
    { 
        img_id = "IMAGE3";
        take_snapshot(); 
        speak_data = "Taking you Selfie in 15 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    }, 15000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        if(img_id == "IMAGE1"){
            document.getElementById("result1").innerHTML = '<img id="IMAGE1" src="'+data_uri+'"/>';
        }
        if(img_id == "IMAGE2"){
            document.getElementById("result2").innerHTML = '<img id="IMAGE2" src="'+data_uri+'"/>';
        }
        if(img_id == "IMAGE3"){
            document.getElementById("result3").innerHTML = '<img id="IMAGE3" src="'+data_uri+'"/>';
        }
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
