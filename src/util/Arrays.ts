export function immutableUpdate<Type>(array: Type[], index: number, elem: Type): Type[] {
    const head = array.slice(0, index)
    const tail = array.slice(index+1)
    return head.concat(elem).concat(tail)
}