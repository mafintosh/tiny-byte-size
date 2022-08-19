# tiny-byte-size

Dead simple, no configuration needed, tiny byte formatter

```
npm install tiny-byte-size
```

## Usage

``` js
const byteSize = require('tiny-byte-size')

console.log(byteSize(100)) // 100B
console.log(byteSize(1000)) // 1kB
console.log(byteSize(1100)) // 1.1kB
console.log(byteSize(10101010)) // 10.1MB
```

## License

MIT
