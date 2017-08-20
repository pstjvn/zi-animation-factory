function DoubleBufferedList() {
  this.lists = [[], []];
  this.index = 0;
  this.list = this.lists[this.index];
}

DoubleBufferedList.prototype.getLength = function() {
  return this.list.length;
};

DoubleBufferedList.prototype.setLength = function(len) {
  this.list.length = len;
};

DoubleBufferedList.prototype.item = function(index) {
  if (index < 0 || index > this.list.length) {
    throw new Error('Index out of bound');
  }
  return this.list[index];
};

DoubleBufferedList.prototype.add = function(item) {
  this.list.push(item)
};

DoubleBufferedList.prototype.clear = function() {
  this.list.length = 0;
  this.alter();
};

DoubleBufferedList.prototype.alter = function() {
  this.index = (this.index + 1) % 2;
  this.list = this.lists[this.index];
};

DoubleBufferedList.prototype.forEach = function(fn, ctx) {
  var list = this.list_;
  this.alter();
  list.forEach(fn, ctx);
  this.alter();
};
