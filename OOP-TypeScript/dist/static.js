"use strict";
{
    class Counter {
        static increment() {
            return (Counter.count += 1);
        }
        static decrement() {
            return (Counter.count -= 1);
        }
    }
    Counter.count = 0;
    const count = new Counter();
    const count2 = new Counter();
    //   console.log(count.increment());
    //   console.log(count.increment());
    //   console.log(count.increment());
    //   console.log(count2.increment());
    //   console.log(count2.increment());
    //   console.log(count2.increment());
    //   console.log(count.decrement());
    //   console.log(count.decrement());
    //   console.log(count.decrement());
    //   console.log(count2.decrement());
    //   console.log(count2.decrement());
    //   console.log(count2.decrement());
    console.log(Counter.increment());
    console.log(Counter.decrement());
}
