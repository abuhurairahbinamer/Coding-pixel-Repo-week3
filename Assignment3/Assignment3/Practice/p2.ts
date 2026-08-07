type Part=number | string | boolean | null | undefined
const cx=(...parts:Part[])=>{
return parts.filter(Boolean).join(' ')
}
console.log(cx('a', false, 'b'));
console.log(cx('a', undefined));



//deeper
//Full class deduplication is out of scope for a hand-rolled cx function. The primary purpose of cx is conditional filtering (removing falsy values like false, null, undefined) and joining string class names.
function deeper(...parts: Part[]) {
  const classList = parts.filter(Boolean).join(' ').split(/\s+/);
  
  const classMap = classList.reduce((map, cls) => {
    const prefix = cls.split('-')[0];
    return map.set(prefix, cls);
  }, new Map<string, string>());

  return Array.from(classMap.values()).join(' ');
}
console.log('P2 task done with deeper : ',deeper('a', false, 'b','bg-blue-500','bg-red-500'))