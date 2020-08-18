/*
	原理
    选择排序是一个简单直观的排序方法，它的工作原理很简单，首先从未排序序列中找到最大的元素，放到已排序序列的末尾，重复上述步骤，直到所有元素排序完毕。
    2，算法描述
    1）假设未排序序列的第一个是最大值，记下该元素的位置，从前往后比较
    2）若某个元素比该元素大，覆盖之前的位置
    3）重复第二个步骤，直到找到未排序的末尾
    4）将未排序元素的第一个元素和最大元素交换位置
    5）重复前面几个步骤，直到所有元素都已经排序。
 */


//minIndex始终保存着最小值的位置的索引，随着i的自增，遍历的数组长度越来越短，直到完成排序。
var example=[8,94,15,88,55,76,21,39];
function selectSort(arr){
    var len = arr.length;
    var minIndex,temp;
    for(i = 0; i < len-1; i++){
        minIndex = i;
        for( j=i+1; j<len; j++ ){
            if(arr[j] < arr[minIndex]){ ////寻找最小值
                minIndex = j; ////保存最小值的索引
            }
        }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
}
console.log(selectSort(example));  //[ 8, 15, 21, 39, 55, 76, 88, 94 ]
