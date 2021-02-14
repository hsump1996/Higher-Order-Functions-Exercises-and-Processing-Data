// Add code here

class RootElement {

    constructor() {
      
        const xmlns = "http://www.w3.org/2000/svg";
    
    }

    get addAttr(name, value) {


    }


    get addChild(child) {



    }

    get toString() {



    }

    get write(fileName, cb) {



    }
}

class GenericElement extends RootElement {

    constructor(name) {
      
        this.name = name;
    
    }

    get addAttr(name, value) {


    }

    get addAttrs(obj) {



    }
  
}


class RectangleElement extends RootElement{
    
    constructor(x, y, width, height, fill) {
        
        this.x = x; // the value for the x attribute of this rect element
        this.y = y; // the value for the y attribute of this rect element
        this.width = width; // the value for the width attribute of this rect element
        this.height = height; // the value for the height attribute of this rect element
        this.fill = fill; //  the value for the fill attribute of this rect element as a color string, such as "red", "green", etc.
    }

    get addAttr(name, value) {


    }




}

class TextElement extends RootElement {

    constructor(x, y, fontSize, fill, content) {
        
        this.x = x; // the value for the x attribute of this text element
        this.y = y; // the value for the y attribute of this text element
        this.fontSize = fontSize; // the value for the font-size attribute of this text element
        this.fill = fill; // the value for the fill attribute of this text element as a color string, such as "red", "green", etc.
        this.content = content; // content between the text tags; the actual text

    }

    get addAttr(name, value) {


    }
  
}

module.exports = {
    GenericElement,
    RootElement, 
    RectangleElement,
    TextElement
};