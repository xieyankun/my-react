export const increment = () => {
  return {
    type: 'INCREMENT_COUNTER',
    text: 'increment count'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT_COUNTER',
  }
}
