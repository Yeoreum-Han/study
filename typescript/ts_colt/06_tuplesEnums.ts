const stuff: (string | number)[] = [1, 'sdf', 'sdfdfgdfh', 'fhgfhf', 342];

//tuples    길이와 타입순서가 고정된 배열
const color: [number, number, number] = [255, 0, 255];
type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];
// const goodRes: HTTPResponse = ["OK", 200];
// const goodRes: HTTPResponse = ["OK", 200, 3444];
goodRes.push(231);  //튜플이 할당 된 후에는 push pop 등 가능.
const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];



// enums    명명된 상수의 집합
enum OrderStatus {      //값을 지정하지 않으면 0부터 ...
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234,
}
ArrowKeys.LEFT;



//js에 additional code로 남는 enum
const enum Order{
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const order = {
    orderNum : 231432545,
    status : Order.PENDING         
    // enum 앞에 const를 붙이면 js에서는 Order.Pending을 지정된 값으로 대체함
    // status : 0
}