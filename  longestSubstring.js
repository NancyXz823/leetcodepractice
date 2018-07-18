/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) {
        return 0
    }
  var max = 1
  for(var i = 0; i < s.length; i++) {
    var str = s[i]
    for(var j = i + 1; j<s.length; j++) {
        if(str.includes(s[j])) {
            break;
        }
        str += s[j]
        if(max < str.length) {
            max = str.length
        }
    }  
  }
  return max
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
    var start = 0,
        temp = '',
        result = ''
    for (let i = 0; i < s.length; i ++) {
        let index = temp.indexOf(s[i])
        if (index !== -1) {
            start = start + index + 1
        }
        temp = s.substring(start, i + 1)
        if (result.length < temp.length) {
            result = temp
        }
    }
    return result.length
}; 