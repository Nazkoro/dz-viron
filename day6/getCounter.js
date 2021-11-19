
   function getCounter(x) {
	return {
		count(y) {
			x += y;
			return this;
		},
		reset() {
			x = 0;
			return this;
		},
		log() {
            console.log(x);
			return this;
		}
	};
};

let counter = getCounter(5)
// console.log(counter);
counter.log() // 5
.count(4)
.log() // 9
.count(3)
.log() // 12
.reset()
.log() // 0
.count(8)
.log(); // 8

