export default {
    // reduce length of post description to closest full word
    shorten: (text, max) => {
    return text && text.length > max ? text.slice(0, max).split(' ').slice(0, -1).join(' ') : text
    },
    function2: () => {
       // Function body
    }
   };