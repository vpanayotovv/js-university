function solve(){

    const list = [];

    const instance = {
        size: 0,
        add,
        remove,
        get
    };

    function add(element){
        list.push(element);
        list.sort(sorter);
        instance.size++;
        return instance;
    }

    function remove(index){
        validate(index);
        list.splice(index,1);
        instance.size--;
        return instance
    }

    function get(index){
        validate(index);
        return list[index];
    }

    function validate(index){
        if(index < 0 || index >= list.length){
            throw new Error('Index is out of bounds')
        }
    }

    function sorter(a,b){
        return a - b;
    }

    return instance;
}