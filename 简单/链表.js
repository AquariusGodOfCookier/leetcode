function Node(val) {
    this.val = val;
    this.next = null;
}
function linkedList() {
    var length = 0;
    var head = null;
    this.append = function (val) {
        var node = new Node(val);
        var current;
        if (head == null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.insert = function (positon, val) {
        //校验边界
        if(positon>-1&&positon<=length){
            var node  = new Node(val);
            current = head;
            var index = 0;
            var previous;
            if(positon==0){
                node.next = current;
                head = node;
            }else{
                while(index++<positon){
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                nodex.next = current;
            }
            length++;
            return true;
        }
        else{
            return false;
        }
    };
    this.toString = function () {
        var string = head.val;
        var current = head.next;
        while (current) {
            string += ',' + current.val;
            current = current.next;
        }
        return string;
    }

}

var l1 = new linkedList();
l1.append(1);
l1.append(2);
l1.insert(0,6)
console.log(l1)
