let gui = new dat.GUI();
let settings = {
    totalPoints: 500,
    factor: 2,
    radius: 200,
    animate: true,
    speed: 0.01
}

function getVector(idx) {
    let angle = map(idx, 0, settings.totalPoints, 0, PI * 2);
    let vector = p5.Vector.fromAngle(angle + PI / 2);
    vector.mult(settings.radius);
    return vector;
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    colorMode(HSB, 255);
}

let count = 500;
let j = 0;

function draw() {
    background('#011F26');
    translate(width / 2, height / 2);
    stroke(200);
    noFill();
    circle(0, 0, settings.radius * 2);

    for (let i = 0; i < settings.totalPoints; i++) {
        let a = getVector(i);
        let b = getVector(i * settings.factor);
        let color = map(i, 0, count, 0, 255);
        strokeWeight(sqrt(i / count));
        stroke(color, 242, 119, 119);
        line(a.x, a.y, b.x, b.y);
    }

    if (settings.animate) {
        settings.factor += settings.speed;
    }
}

addEventListener('resize', () => {
    resizeCanvas(innerWidth, innerHeight)
});

gui.add(settings, 'totalPoints', 0, 700).step(1);
gui.add(settings, 'factor', -5000, 5000);
gui.add(settings, 'radius', 100, 800);
gui.add(settings, 'speed', -0.1, 0.1);
gui.add(settings, 'animate');