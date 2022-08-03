// https://calculator.swiftutors.com/centripetal-force-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const centripetalForceRadio = document.getElementById('centripetalForceRadio');
const massRadio = document.getElementById('massRadio');
const velocityRadio = document.getElementById('velocityRadio');
const radiusRadio = document.getElementById('radiusRadio');

let centripetalForce;
let mass = v1;
let velocity = v2;
let radius = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

centripetalForceRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass (kg)';
  variable2.textContent = '(v) Velocity (m/s)';
  variable3.textContent = '(r) Radius (m)';
  mass = v1;
  velocity = v2;
  radius = v3;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Centripetal Force (N)';
  variable2.textContent = '(v) Velocity (m/s)';
  variable3.textContent = '(r) Radius (m)';
  centripetalForce = v1;
  velocity = v2;
  radius = v3;
  result.textContent = '';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Centripetal Force (N)';
  variable2.textContent = '(m) Mass (kg)';
  variable3.textContent = '(r) Radius (m)';
  centripetalForce = v1;
  mass = v2;
  radius = v3;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Centripetal Force (N)';
  variable2.textContent = '(m) Mass (kg)';
  variable3.textContent = '(v) Velocity (m/s)';
  centripetalForce = v1;
  mass = v2;
  velocity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(centripetalForceRadio.checked)
    result.textContent = `Centripetal Force = ${computeCentripetalForce().toFixed(2)} N`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} kg`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)} m/s`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(2)} m`;
})

// calculation

function computeCentripetalForce() {
  return Number(mass.value) * (Math.pow(Number(velocity.value), 2) / Number(radius.value));
}

function computeMass() {
  return (Number(centripetalForce.value) * Number(radius.value)) / Math.pow(Number(velocity.value), 2);
}

function computeVelocity() {
  return Math.sqrt((Number(centripetalForce.value) * Number(radius.value)) / Number(mass.value));
}

function computeRadius() {
  return Number(mass.value) * (Math.pow(Number(velocity.value), 2) / Number(centripetalForce.value));
}