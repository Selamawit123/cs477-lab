# This is Lab1 solutions

## For exercise 1 & 3, js file added.

## For exercise 2 attached her below :- 
1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
SetImmediate: It gets executed in the "check" phase. The check phase is called after the I/O phase.
SetTimeOut: It gets executed in the "timer" phase. The timer phase is the first phase but is called after the I/O phase as well as the Check phase.

2. Explain the difference between process.nextTick and setImmediate?
Process.NextTick() would executed at next tick of event loop. However, the setImmediate, basically has a separate phase which ensures that the callback registered under setImmediate() will be called only after the IO callback and polling phase.

3. Name 10 global modules/methods available in Node environment.
 Class buffer, console, exports, setImmediate(), clearImmediate(), clearInterval(), clearTimeOut(), setInterval(), setTimeout(), queueMicrotask(), textDecoder, class URL

