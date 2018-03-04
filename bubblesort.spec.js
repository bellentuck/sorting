// for random test array generation (part I)
function generateArray(size, lower, upper) {
  const randomArray = [];
  while (size--) {
    let randomNum = Math.round(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}



describe("Bubble Sort", function(){

  beforeEach(function() {
    // need to add 'and.callThrough' to actually call the original spied-on func
    spyOn(window, 'bubbleSort').and.callThrough();
    spyOn(window, 'swap').and.callThrough();
    //spyOn(window, 'compare').and.callThrough();
  });

  it("handles and empty array", function(){
    expect(bubbleSort([])).toEqual([]);
    expect(window.bubbleSort.calls.count()).toEqual(1);
    expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(0);
  });
  it("handles an array with one item", function(){
    expect(bubbleSort([1])).toEqual([1]);
    expect(window.bubbleSort.calls.count()).toEqual(1);
    expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(0);
  });
  it("handles an array with multiple items", function(){
    expect(bubbleSort([2,1])).toEqual([1,2]);
    //expect(window.bubbleSort.calls.count()).toEqual(2);
    expect(window.swap.calls.count()).toEqual(1);
    //expect(window.compare.calls.count()).toEqual(2);
  });
  it("handles an array with many items", function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    expect(window.bubbleSort.calls.count()).toEqual(1);
    expect(window.swap.calls.count()).toEqual(0);
    //expect(window.compare.calls.count()).toEqual(3);
    expect(bubbleSort([5,6,7,2,8,34,1])).toEqual([1,2,5,6,7,8,34]);
  });

  // for random test array generation (part II)
  for (let i = 2; i < 103; i += 20) {
    it(`sorts an array of ${i} random items`, function() {
      let arr = generateArray(i, 0, 100);
      let sorted = arr.slice(0).sort((a,b) => a - b);
      expect(bubbleSort(arr)).toEqual(sorted);
    });
  }

  it('compares the expected number of times', function() {
    spyOn(window, 'inOrder').and.callThrough();
    //bubbleSort([1,2,4,6,8,9,5,3,6,8,90,5,3,2]);
    bubbleSort([4,6,5,1]);
    expect(inOrder.calls.count()).toEqual(12);
  });

  // how you would start to implement `spyOn`:
  // function spyOn(obj, method) {
  //   let counter = 0;
  //   const spy = function() {
  //     counter++;
  //   }
  //   obj[method] = spy;
  //   spy.calls = {
  //     count: () => counter;
  //   }
  // }


});

