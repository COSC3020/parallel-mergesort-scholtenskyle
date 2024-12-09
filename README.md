# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

As the program runs, it keeps dividing the array in half until it can't anymore. This is done recursively, which of course is O(logn). There is also sorting going on seperately, which goes through every element n. This is fairly simple, and is only n, but it is done for every step of the reccursion, making the final span equal to O(nlogn).

https://medium.com/@antonioval/making-array-iteration-easy-when-using-async-await-6315c3225838

https://stackoverflow.com/questions/35612428/call-async-await-functions-in-parallel

I used these to help do some debugging, and fix some issues with the parallel aspect. I also used ChatGPT to help with main.yml as it needed some changes with the parallel parts. I also used my own merger function from my previous mergesort exercise.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
