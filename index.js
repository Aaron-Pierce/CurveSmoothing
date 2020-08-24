function setup() {
    createCanvas(innerWidth, innerHeight)
    background(33);
}

function rnd(){
    return 250 * (Math.random() - 0.5);
}

let points = [];

const NUM_POINTS = 100;
const dx = innerWidth / NUM_POINTS;
for (let i = 0; i < NUM_POINTS; i++) {
    // console.log(points[i-1] || innerHeight/2)
    points.push([i*dx, (points[i-1] ? points[i-1][1] : Math.random() * innerHeight/2) + rnd()])
}

function draw() {
    // background(33);
    frameRate(60);
    stroke(125 + frameCount, 255-frameCount, 0.5 * frameCount)
    for(let p of points){
        ellipse(...p, 5)
    }

    for(let i = 0; i < points.length - 1; i++){
        line(...points[i], ...points[i+1])
    }

    if(frameCount % 2 === 0){
        for(let i = 1; i < points.length - 1; i++){
            let avgOfNeighbors = (points[i-1][1] + points[i+1][1]) / 2;
            let err = points[i][1] - avgOfNeighbors;
            points[i][1] -= err
        }
    }

}


function keyPressed(){
    background(33)
}