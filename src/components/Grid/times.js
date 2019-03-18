const times = (cb, i) => new Array(i).fill(null).map((_, i) => cb(i))

export default times
