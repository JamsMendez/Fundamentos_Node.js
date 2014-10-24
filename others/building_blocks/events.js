var events = require('events');
var util = require('util');

var EventEmitter = events.EventEmitter;
/* Methods

.on('event', listener);
.once('event', listener);

.emit('event', [args]);

.removeListener('event', listener);
.removeAllListener('event', listener);

*/

var ClassObject = function () {
  this.count_on   = 0;
  this.count_once = 0;
};

util.inherits(ClassObject, EventEmitter);

ClassObject.prototype.triggerSomeEvent = function () {
  this.emit('some_event', this.count_on++);
};

ClassObject.prototype.triggerSomeEventOnce = function () {
  this.emit('some_event_once', this.count_once++);
};

var obj = new ClassObject();

obj.on('some_event', function (arg) {
  console.log('some_event: ', arg);
});

obj.once('some_event_once', function (arg) {
  console.log('some_event_once: ', arg);
});


obj.triggerSomeEvent();
obj.triggerSomeEvent();
obj.triggerSomeEvent();

obj.triggerSomeEventOnce();
obj.triggerSomeEventOnce();
obj.triggerSomeEventOnce();


// Advanced
console.log('== Advanced == \n\n');

var SimpleEventEmitter = function () {
  this.events = {};
};

SimpleEventEmitter.prototype.on = function (evtname, cb) {
  this.events[evtname] || (this.events[evtname] = []);
  this.events[evtname].push(cb);
};

SimpleEventEmitter.prototype.emit = function (evtname) {
  var args = Array.prototype.slice.call(arguments, 1);
  if(this.events[evtname]){
    this.events[evtname].forEach(function (cb) {
      cb.apply(this, args);
    });
  }
};

var emitter = new SimpleEventEmitter();
emitter.on('greet', function (name) {
  console.log('Hello ' + name + ' !!!');
});

emitter.on('greet', function (name) {
  console.log('Hello ' + name + ' !!!');
});

emitter.on('greet', function (name) {
  console.log('Hello ' + name + ' !!!!');
});

var names = ['Jose', 'Angel', 'Jesus'];
for (var i = 0; i < names.length; i++) {
  emitter.emit('greet', names[i]);
}
