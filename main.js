music1 = document.getElementById("ma1");
music2 = document.getElementById("ma2");

x_left = 0;
y_left = 0;

x_right = 0;
y_right = 0;


function preload()
{

}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);

}

function modelLoaded()
{
    console.log("Model Loaded... Initialized.. Ready To Be Used...");
}

function gotPoses(r)
{
    if(r.length > 0)
    {
        x_right = r[0].pose.rightWrist.x;
        y_right = r[0].pose.rightWrist.y;

        x_left = r[0].pose.leftWrist.x;
        y_left = r[0].pose.leftWrist.y;

        if(y_right > y_left)
        {
            music2.pause();
            music1.pause();
            music1.play();
            document.getElementById("lb").innerHTML = "Song No. 1";
        }
        else
        {
            music2.pause();
            music1.pause();
            music2.play();
            console.log("playing 2");
            document.getElementById("lb").innerHTML = "Song No. 2";
        }

    }
}