function quadraticEquation(a, b, c) {
    let x1 =0;
    let x2 =0;
    let x =0;
    
    let discriminant = (b * b) - (4 * a * c)

    if (discriminant < 0) {
        console.log(`уравнение ${a}х^2 ${b>0?'+' +b :b}x  ${c>0?'+' +c :c} = 0 не имеет корней`);

    }   else if (discriminant === 0) {
        x = (-b/2*a);
        console.log(`уравнение ${a}х^2 ${b>0?'+' +b :b}x  ${c>0?'+' +c :c} = 0  имеет один корень= `, x);

    } else if(discriminant > 0) {

        x1 = (-b + (Math.sqrt(discriminant)))/(2*a);
        x2 = (-b - (Math.sqrt(discriminant)))/(2*a);
        
        console.log(`уравнение ${a}х^2 ${b>0?'+' +b :b}x  ${c>0?'+' +c :c} = 0не имеет один корени х1=${x1} и х2=${x2}`);
        
    }
     
}

// var fizz = ["fizz"], buzz = ["buzz"];
// for(var i = 1; i < 100; i++) document.write((((fizz[i % 3] || "") + (buzz[i % 5] || "")) || i) + " ");

