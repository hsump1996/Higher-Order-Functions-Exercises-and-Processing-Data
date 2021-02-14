// Add code here



class GenericElement{

    constructor(name) {
        this.attribute.name = name;
        this.childList = [];
    }

    get addAttr(name, value) {
        this.attribute[name] = value;
    }

    get addAttrs(obj) {
        Object.assign(this, obj)
    }

    get addChild(child) {

        childList.push(child);

    }

    get toString() {

        const childList = Object.keys(this).childList;

        const {cx, cy} = this.loc;
        return `<svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="${cx}" cy="${cy}" r="${this.r}" fill="${this.fill}"></circle>
        
        
        </svg>`
    } 

    get write(fileName, cb) {
        const fs = require('fs')
    }
  
}

class RootElement extends GenericElement {

    constructor() {
      
        this.xmlns = "http://www.w3.org/2000/svg";    
    }

}


class RectangleElement extends GenericElement{
    
    constructor(x, y, width, height, fill) {
        this.x = x; // the value for the x attribute of this rect element
        this.y = y; // the value for the y attribute of this rect element
        this.width = width; // the value for the width attribute of this rect element
        this.height = height; // the value for the height attribute of this rect element
        this.fill = fill; //  the value for the fill attribute of this rect element as a color string, such as "red", "green", etc.
    }
}

class TextElement extends GenericElement {

    constructor(x, y, fontSize, fill, content) {
        
        this.x = x; // the value for the x attribute of this text element
        this.y = y; // the value for the y attribute of this text element
        this.fontSize = fontSize; // the value for the font-size attribute of this text element
        this.fill = fill; // the value for the fill attribute of this text element as a color string, such as "red", "green", etc.
        this.content = content; // content between the text tags; the actual text

    }
}

module.exports = {
    GenericElement,
    RootElement, 
    RectangleElement,
    TextElement
};