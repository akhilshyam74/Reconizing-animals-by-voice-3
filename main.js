function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dbpuZj2D9/model.json', modelReady);
    console.log("Model Ready");
}
function modelReady()
{
    classifier.classify(gotResult);
    console.log("Model ready function completed");
}
function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        if(results[0].label == "Bark"){
            img.src = Dog.jpg
            console.log("Dog")
        }
        else if(results[0].label == "Meow"){
            img.src = Cat.jpg;
            console.log("Cat")
        }
        else if(results[0].label == "Roar"){
            img.src = Lion.jpg
            console.log("Lion")
        }
        else {
            img.src="Cow.jpg"
            console.log("Cow")
        }
    }
    console.log("Got result");
}
