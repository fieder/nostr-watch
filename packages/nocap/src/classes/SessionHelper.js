import murmurhash from 'murmurhash' 
import { random } from '../utils.js'

export class SessionHelper {  
  constructor(){
    this.init()
  }

  init(){
    this.salt = murmurhash.v3(random(50)) 
    this.id = {}
    this.id.session = murmurhash.v3('session', this.salt)
    this.id.connect = murmurhash.v3('connect', this.salt)
    this.id.read = murmurhash.v3('read', this.salt)
    this.id.write = murmurhash.v3('write', this.salt)
    this.id.info = murmurhash.v3('info', this.salt)
    this.id.geo = murmurhash.v3('geo', this.salt)
    return this.id
  }

  new(){
    return this.init() 
  }

  get(key){
    if(!key)
      return this.id.session
    return this.id[key]
  } 
}