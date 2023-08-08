
import {PI} from './math.js'
import {add} from './math.js'

console.log(PI)
console.log(add(5,10))

// imported variables carry across rules from their declared 'var', 'let', 'const' rule set in the original file.
// if you want to import everything, use import * as foo from '.math.js' (if you dont want to use 'default' in the other file), or ditch the foo (and keep the 'default')


// const Roll = require('roll')
import Roll from 'roll'

const roll = new Roll()
const dice = roll.roll('3d10')
console.log(dice)