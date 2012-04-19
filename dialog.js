function Dialog(id) {
  var self = this;
  this.el = id ? document.getElementById(id) : document.createElement("dialog");
  this.returnValue = "";
  window.addEventListener("keypress", function(e) {
    if (e.which === 0) {
      self.close();
    }
  }, false);
  return self;
}

Dialog.prototype.show = function(anchor) {
  this.el.setAttribute("open", "");
}

Dialog.prototype.showModal = function(anchor) {
  this.el.setAttribute("open", "");
}

Dialog.prototype.close = function(result) {
  this.el.removeAttribute("open");
  return result;
}

