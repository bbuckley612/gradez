function myCalc() {
  var x = document.getElementById('x').value;
  var t = document.getElementById('t').value;

  var g0 = document.getElementById('y0').value;

  var y1 = math.parse(document.getElementById('y1').value);
  var g1 = parseInt(y1.evaluate({x: t}));

  var y2 = math.parse(document.getElementById('y2').value);
  var d2 = math.derivative(y2, 'x');
  var i2 = math.max(math.intersect([-999, 0], [999, 0], [-999, d2.evaluate({x: -999})], [999, d2.evaluate({x: 999})]));
  var p2 = d2.evaluate({x: i2});
  var m2 = d2.evaluate({x: math.mean(x, p2)});
  var s2 = y2.evaluate({x: i2}) - (m2 * i2);
  var g2 = math.parse(m2 + 'x + ' + s2).evaluate({x: t});

  var y3 = math.parse(document.getElementById('y3').value);
  var d3 = math.derivative(math.derivative(y3, 'x'), 'x');
  var i3 = math.max(math.intersect([-999, 0], [999, 0], [-999, d3.evaluate({x: -999})], [999, d3.evaluate({x: 999})]));
  var p3 = d3.evaluate({x: i3});
  var m3 = d3.evaluate({x: math.mean(x, p3)});
  var s3 = y3.evaluate({x: i3}) - (m3 * i3);
  var g3 = math.parse(m3 + 'x + ' + s3).evaluate({x: t});

  var y4 = math.parse(document.getElementById('y4').value);
  var d4 = math.derivative(math.derivative(math.derivative(y4, 'x'), 'x'), 'x');
  var i4 = math.max(math.intersect([-999, 0], [999, 0], [-999, d4.evaluate({x: -999})], [999, d4.evaluate({x: 999})]));
  var p4 = d4.evaluate({x: i4});
  var m4 = d4.evaluate({x: math.mean(x, p4)});
  var s4 = y4.evaluate({x: i4}) - (m4 * i4);
  var g4 = math.parse(m4 + 'x + ' + s4).evaluate({x: t});

  var grades = [g0, g1, g2, g3, g4];
  var errors = [];
  var error = 0;
  var sum = 0;
  var weight = 0;

  for (var i = 0; i < grades.length; i++) {
    var e = parseFloat(document.getElementById('E' + i).value);
    errors.push(e);
    error += e;
  }

  for (var j = 0; j < grades.length; j++) {
    sum += (grades[j] / 10) * ((error - errors[j]) / error);
    console.log((grades[j] / 10) + " ~ " + ((error - errors[j]) / error));
    weight += ((error - errors[j]) / error);
  }

  console.log(sum / weight);
}
