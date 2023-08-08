const PI = 3.14159

function add(a,b) {
    return a + b
}

// export default PI 
export { add }



//notes:
// when importing items from a file, it must be explicitly exported  via code from within the imported file, using 'default export'.
// module can only have one export. if you want to export multiple variables or functions, lose the 'default' and wrap all items in curly braces {}.
//have one 'export {}' object at the end with all the variables or functions needed to be exported.
// if you want to import the entire module, you must keep 'default'