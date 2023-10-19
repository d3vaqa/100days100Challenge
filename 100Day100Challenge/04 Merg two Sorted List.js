//Challenge: Merge two sorted linked lists and return it as a new sorted list.

const mergeTwoLists = (l1, l2) =>{
    let preHead = new listNode (-1)
    let prev = preHead

    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            prev.next = l1
            l1 = l1.next
        }else{
            prev.next = l2
            l2 = l2.next
        }


        prev = prev.next
    }


    prev.next = (l1 !== null ) ? l1 : l2

    return preHead.next
}