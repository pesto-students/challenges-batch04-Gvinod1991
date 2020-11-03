function dropElements(elements, predicate) {
  if (!Array.isArray(elements)) {
    throw new Error(`Expected first argument to be Array but got ${elements}`);
  }
  if (typeof predicate !== 'function') {
    throw new Error(`Expected 2nd argument to be function but got ${typeof predicate}`);
  }
  const elementsAfterDropping = elements.filter(predicate);
  return elementsAfterDropping;
}
export { dropElements };
