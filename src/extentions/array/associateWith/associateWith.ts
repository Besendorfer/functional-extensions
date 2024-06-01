export {}

type RecordKey = string | number | symbol;

declare global {
  interface Array<T> {
    associateWith<K>(cb: (value: RecordKey) => K): Record<RecordKey, K>;
  }
}

/**
 * associateWith:
 *
 * `associateWith` is a method that allows you to associate each element of an array
 * with a value generated by the provided callback function.
 *
 */

if (!Array.prototype.associateWith) {
  Object.defineProperty(Array.prototype, 'associateWith', {
    value: function associateWith<K>(this: RecordKey[], cb: (value: RecordKey) => K): Record<RecordKey, K> {
      return this.reduce((acc, curr) => {
        acc[curr] = cb(curr);
        return acc;
      }, {} as Record<RecordKey, K>);
    }
  });
}