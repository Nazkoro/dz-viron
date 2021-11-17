
// class getCounter  {
//     constructor(step) {
//         this.step = step;
//     }
//     count(k) {
//       this.step += k;
//       return this;
//     }
//     reset() {
//       this.step = 0;
//       return this;
//     }
//     log() {
//       console.log(this.step );
//       console.log(this);
//       return this;
//     }
//   }
//   let counter = new getCounter(2)
//   counter.log() // 5
//   .count(4)
//   .log() // 9
//   .count(3)
//   .log() // 12
//   .reset()
//   .log() // 0
//   .count(8)
//   .log(); // 8


   function getCounter(x) {
	return {
		count: function(y) {
			x += y;
			return this;
		},
		reset: function() {
			x = 0;
			return this;
		},
		log: function() {
            console.log(x);
			return this;
		}
	};
};

let counter = getCounter(5)
console.log(counter);
counter.log() // 5
.count(4)
.log() // 9
.count(3)
.log() // 12
.reset()
.log() // 0
.count(8)
.log(); // 8


//  function F(x) {
// 	return {
// 		count: function(y) {
// 			x += y;
// 			return this;
// 		},
// 		reset: function() {
// 			x = 0;
// 			return this;
// 		},
// 		log: function() {
//             console.log(x);
// 			return this;
// 		}
// 	};
// };






// var F = function(x) {
// 	return {
// 		plus: function(y) {
// 			x += y;
// 			return this;
// 		},
// 		minus: function(y) {
// 			x -= y;
// 			return this;
// 		},
// 		getResult: function() {
// 			return x
// 		}
// 	};
// };

// alert(
// F(10).plus(5).minus(3).plus(7).getResult()
// );
