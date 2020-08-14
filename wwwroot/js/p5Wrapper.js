function startP5(p5Implementation, container)
{
    let sketch = function(p) {
        window.p5Instance = p;

        p.doubleClicked = function() {
            return p5Implementation.invokeMethodAsync('doubleClicked');
        }

        p.draw = function() {
            p5Implementation.invokeMethodAsync('draw');
        }

        p.getValue = function(valueName) {
            return this[valueName];
        }
        
        p.invokeP5Function = function(functionName) {
            var args = Array.prototype.splice.call(arguments, 1);
            this[functionName].apply(this, args);
        }

        p.keyPressed = function() {
            return p5Implementation.invokeMethodAsync('keyPressed');
        }

        p.keyReleased = function() {
            return p5Implementation.invokeMethodAsync('keyReleased');
        }

        p.keyTyped = function() {
            return p5Implementation.invokeMethodAsync('keyTyped');
        }

        p.mouseClicked = function() {
            return p5Implementation.invokeMethodAsync('mouseClicked');
        }

        p.mouseDragged = function() {
            return p5Implementation.invokeMethodAsync('mouseDragged');
        }

        p.mouseMoved = function() {
            return p5Implementation.invokeMethodAsync('mouseMoved');
        }

        p.mousePressed = function() {
            return p5Implementation.invokeMethodAsync('mousePressed');
        }

        p.mouseReleased = function() {
            return p5Implementation.invokeMethodAsync('mouseReleased');
        }

        p.preload = function() {
            p5Implementation.invokeMethodAsync('preload');
        }
        
        p.setup = function() {
            p5Implementation.invokeMethodAsync('setup');
        }

        p.windowResized = function() {
            p5Implementation.invokeMethodAsync('windowResized');
        }
    };
    new p5(sketch, window.document.getElementById(container));
}