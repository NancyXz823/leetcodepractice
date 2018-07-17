function Base() {}
Base.extend = function (methods={}, staticMethods={}) {
    function Sub() {
        Base.call(this) // 执行 Base的constructor函数，使用当前this
    }

    Sub.prototype = new this()
    
    Object.keys(methods).forEach(function(key) {
        Sub.prototype[key] = methods[key]
    })

    Object.keys(staticMethods).forEach(function(key){
        Sub[key] = staticMethods[key]
    })

    for(var key in this) {
        if(this.hasOwnProperty(key)) {
            Sub[key] = Base[key]
        }
    }
    return Sub
}