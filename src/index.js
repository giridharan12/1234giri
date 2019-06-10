 class Colored 
 {
    initializer ()     { this._color = "red" }
    get color ()       { return this._color }
    set color (v)      { this._color = v }
 }
 class ZCoord 
 {
    initializer ()     { this._z = 0 }
    get z ()           { return this._z }
    set z (v)          { this._z = v }
 }
 class Shape 
 {
    constructor (x, y) { this._x = x; this._y = y }
    get x ()           { return this._x }
    set x (v)          { this._x = v }
    get y ()           { return this._y }
    set y (v)          { this._y = v }
 }
 class Rectangle extends aggregation(Shape, Colored,ZCoord) {}
 var rect = new Rectangle(7, 42)
 rect.z = "500"
 rect.color = "blue"
 console.log(rect.x, rect.y, rect.z, rect.color);
