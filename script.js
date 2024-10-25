function Node(value, next) {
  return { value, next };
}

module.exports.LinkedList = function (value) {
  let listHead = Node(value, null);
  function append(value) {
    const node = Node(value, null);
    let end = tail(listHead)
    end.next = node;
  }
  function prepend(value) {
    const copy = listHead;
    const node = Node(value, copy);
    listHead = node;
  }
  function size(first) {
    if (first.next == null) {
      return 1;
    } else {
      return 1 + size(first.next);
    }
  }
  function head() {
    return listHead;
  }
  function tail(node) {
    if (node.next == null) {
      return node;
    } else {
      return tail(node.next);
    }
  }
  function at(index, first) {
    if (index == 0) {
      return first;
    } else {
      return at(index - 1, first.next);
    }
  }
  function pop(node) {
    if (node.next.next == null) {
      node.next = null;
    } else if (node.next == null) {
      return;
    } else {
      pop(node.next);
    }
  }
  function contains(value, node) {
    if (node.value == value) {
      return true;
    } else if (node.next == null) {
      return false;
    } else return contains(value, node.next);
  }
  function find(value, node, count) {
    if (count == undefined) {
      count = 0;
    }
    if (node.value == value) {
      return count;
    } else if (node.next == null) {
      return null;
    } else find(value, node.next, count + 1);
  }
  function toString(node) {
    if (node == undefined)
        {node = listHead}
    if (node.next !== null) {
      return "( " + node.value + " ) -> " + toString(node.next);
    } else if (node.next == null) {
      return "( " + node.value + " ) -> " + node.next;
    }
  }
  function insertAt(value, index, first) {
    if (index == 0) {
      const node = Node(value, first.next);
      first.next = node;
    } else insertAt(value, index - 1, first.next);
  }
  function removeAt(value, index, first) {
    if (index == 1) {
      const copy = first.next.next;
      first.next = copy;
    } else removeAt(value, index - 1, first.next);
  }
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};
