describe('merge sort function', function() {

  describe('split array function', function(){
    it('is able to splite an array into two halves', function(){
      expect(split([1,2,3,4])).toEqual([[1,2], [3,4]]);
    });
    it('can deal with odd-length arrays', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2,3], [4,5]]);
    });
  });

  describe('merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
      expect(merge([1,3,5],[2,4])).toEqual([1,2,3,4,5]);
    });
  });

  describe('mergesort function', function() {
    it('is able to sort an array using split and merge functions', function() {
      expect(mergeSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });
  });

});
