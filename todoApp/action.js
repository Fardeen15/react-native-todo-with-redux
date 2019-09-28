export function add(payload){
    return {
        type : "add",
        payload
    }
}
export function del(payload){
    return {
        type : "del",
        payload
    }
}
export function edit(payload,index){
    return {
        type : "edit",
        payload,
        index
    }
}