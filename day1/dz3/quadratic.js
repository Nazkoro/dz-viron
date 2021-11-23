function quadraticEquation(a, b, c) {

    const discriminant = (b * b) - (4 * a * c)

    if (discriminant < 0) {
        console.log(`уравнение ${a}х^2 ${b>0?'+' +b :b}x  ${c>0?'+' +c :c} = 0 не имеет корней`);

    }   else if (discriminant === 0) {
       const x = (-b/2*a);
        console.log(`уравнение ${a}х^2 ${b>0?'+' +b :b}x  ${c>0?'+' +c :c} = 0  имеет один корень= `, x);

    } else if(discriminant > 0) {

        const x1 = (-b + (Math.sqrt(discriminant)))/(2*a);
        const x2 = (-b - (Math.sqrt(discriminant)))/(2*a);
        
        console.log(`уравнение ${a}х^2 ${b>0?'+' +b :b}x  ${c>0?'+' +c :c} = 0 имеет два корня х1=${x1} и х2=${x2}`);
        
    }
     
}

quadraticEquation(4, -8, 1)