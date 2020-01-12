1. 打印顺序 考察：微任务

    ```javascript
        console.log(1)
        async function async1() {
            console.log(2)
            await console.log(3)
            console.log(4)
        }
        async1();
        
        setTimeout(function() {
            console.log(5)
        }, 0)

        new Promise(function(resolve) {
            console.log(6)
            resolve()
        })
        .then(function() {
            console.log(7)
        })

        console.log(8)
        // 1 2 3 6 8 4 7 5
    ```

2. 【选做题】排序 [2, 0, 2 , 1, 1, 0] -> [0, 0, 1, 1, 2, 2] 考察： 排序算法

    ```javascript

    function sort(arr) {
       QuickSort(arr, 0, arr.length-1)
    }

    function swap(arr, i , j) {
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    // 快速排序
    function QuickSort(arr, start, end) {
        if(start >= end)
            return
        var i = start, j = end
        var k = arr[i]

        while(i != j) {
            while(i < j && arr[j] >= k) {
                j--;
            }
            swap(arr, i, j);
            while(i < j && arr[i] <= k) {
                i++;
            }
            swap(arr, i, j);
        }
        

        QuickSort(arr, start, i-1);
        QuickSort(arr, i+1, end);
    }

    ```

3. webpack配置了解哪些？


