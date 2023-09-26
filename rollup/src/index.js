import {log} from "./logger";
import messages from "./messages";
import {name,version} from "../package.json"
import _ from "lodash-es"
import cjs from "./cjs-module"


const msg = messages.hi

log(msg)
log(name)
log(version)
log(_.camelCase('hello world'))
log(cjs)

// import("./logger").then(({log})=> {
//     log("code split")
// })
