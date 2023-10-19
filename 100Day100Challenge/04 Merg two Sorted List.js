//Challenge: Merge two sorted linked lists and return it as a new sorted list.

const mergeTwoLists = (l1, l2) =>{
    let preHead = new ListNode (-1)
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


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(l1, l2);


console.log(mergedList)

function printList(node) {
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}


printList(mergedList);

