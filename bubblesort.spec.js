describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with only one element', function() {
    expect(bubbleSort([3])).toEqual([3]);
    expect(bubbleSort([0])).toEqual([0]);
  });
  it('sorts an array from smallest to largest', function() {
    expect(bubbleSort([6, 2, 8, 3])).toEqual([2, 3, 6, 8]);
    expect(bubbleSort([3, 9, 2, 1])).toEqual([1, 2, 3, 9]);
  });
  it('sorts an array from smallest to largest including repeats', function() {
    expect(bubbleSort([2, 4, 8, 4])).toEqual([2, 4, 4, 8]);
    expect(bubbleSort([1, 2, 7, 1])).toEqual([1, 1, 2, 7]);
  });
});
