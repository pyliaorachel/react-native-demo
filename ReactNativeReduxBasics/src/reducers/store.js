export default function store(state = {
  fruit: {
    banana: 10,
    apple: 20,
  },
  snack: {
    cookie: 15,
    chocolate: 30,
  },
}, action) {
  switch (action.type) {
    default:
      return state;
  }
}