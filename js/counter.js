export function counterComponent() {
    return {
        count: 0,
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) this.count--;
        }
    };
}