// Add code here

class GenericElement{

    constructor(name) {
        this.name = name;  
        this.attribute = {};
        this.content = [];
    }

    addAttr(name, value) {
        this.attribute[name] = value;
    }

    addAttrs(obj) {
        Object.assign(this.attribute, obj);
    }

    addChild(child) {

        this.content.push(child);

    }

    generateAttributeString() {
        return Object.entries(this.attribute).map(([key, value]) => `${key}="${value}"`).join(" ");
    }

    toString() {
        return `<${this.name} ` + 
        this.generateAttributeString() + `>\n` + 
        (this.content.length ? this.content.map(child => child.toString()).join("\n") + "\n" : '') + 
        `</${this.name}>`;
    } 

    write(fileName, cb) {
        const fs = require('fs');
        fs.writeFile(fileName, this.toString(), cb); 
    }
}

class RootElement extends GenericElement {

    constructor() {
        super("svg");
        this.attribute.xmlns = "http://www.w3.org/2000/svg";    
    }

}


class RectangleElement extends GenericElement{
    
    constructor(x, y, width, height, fill) {
        super("rect");
        this.attribute.x = x; // the value for the x attribute of this rect element
        this.attribute.y = y; // the value for the y attribute of this rect element
        this.attribute.width = width; // the value for the width attribute of this rect element
        this.attribute.height = height; // the value for the height attribute of this rect element
        this.attribute.fill = fill; //  the value for the fill attribute of this rect element as a color string, such as "red", "green", etc.
    }

    toString() {
        
        return `<${this.name} ` + this.generateAttributeString() + ">" + "\n" + `</${this.name}>`;
    } 
}


class TextElement extends GenericElement {

    constructor(x, y, fontSize, fill, content) {
        super("text");
        this.attribute.x = x; // the value for the x attribute of this text element
        this.attribute.y = y; // the value for the y attribute of this text element
        this.attribute['font-size'] = fontSize; // the value for the font-size attribute of this text element
        this.attribute.fill = fill; // the value for the fill attribute of this text element as a color string, such as "red", "green", etc.
        this.content = content; // content between the text tags; the actual text

    }

    toString() {
        return `<${this.name} ` + this.generateAttributeString() + `>` + this.content + "\n" + `</${this.name}>`;
    } 
}


// create root element with fixed width and height
const root = new RootElement();
root.addAttrs({width: 800, height: 170});


// create circle, manually adding attributes, then add to root element
const c = new GenericElement('circle');
c.addAttr('r', 75);
c.addAttr('fill', 'yellow');
c.addAttrs({'cx': 200, 'cy': 80});
root.addChild(c);

// create rectangle, add to root svg element
const r = new RectangleElement(0, 0, 200, 100, 'blue');
root.addChild(r);

// create text, add to root svg element
const t = new TextElement(50, 70, 70, 'red', 'wat is a prototype? 😬');
root.addChild(t);

// show string version, starting at root element
console.log(root.toString());

// write string version to file, starting at root element
root.write('test.svg', () => console.log('done writing!'));

module.exports = {
    GenericElement,
    RootElement, 
    RectangleElement,
    TextElement
};