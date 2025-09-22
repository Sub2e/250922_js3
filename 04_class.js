// 객체
//  1. {} 중괄호 -> 정의
const obj1 = {
  name: "Yun",
  hello: function () {
    console.log("안녕하세요!");
    console.log(`저의 이름은 ${this.name}입니다!`);
  },
};
console.log(obj1.name);
obj1.hello();
// 2. 프로토타입
function Person(name) {
  this.name = name;
  // this를 사용해서 속성을 주입해서 만드는 '생성자 함수'
}
const p = new Person("홍길동");
console.log(p.name);
// 구식 문법이라서 자세하게 알 필요는 없음 (프로토타입)

// JS, Java, ...
// 다 하나임. Java. Spring. OOP. 객체 지향 프로그래밍.
// Class -> JS에 없다가 추가됨 -> 프로토타입에서 사용하는것들을 Class로 다 구현가능하게됨

// Class. - Java 클래스랑 미묘하게 다름.
// 1. JS. Class의 큰 특징중 하나 접근제어자가 없음 -> 자바. 특정한속성, 메서드(함수) -> 임의 외부의 접근을 원천적으로 막을 수 있음 -> 내부에서 알아서 작업을 한 뒤 -> 외부에서 특정한 통로로만 호출할 수 있게하는 작업을 권장함.
// JS에서는 같은 파일이면 원칙적으로 다 접근가능함 (모듈화 한 다음에는 private의 경우 일부 작동)
// 2. 오버로딩이 없음. -> 매개변수의 다른 조합에 따른 같은 이름의 메서드(함수) 돌려쓰기가 없음
// 3. 상속은 있는데 구현. interface. extends는 존재하는데 implements는 없음 (typescript interface vs java interface)

class User {
  // 객체(참조) 타입

  // 프로퍼티 (필드)
  // 프로퍼티명 = 값;
  job = "Programmer";

  // 생성자
  constructor(name) {
    // this.프로퍼티명 -> 클래스 설계를 통해 만들 객체가 가질 프로퍼티명
    // this.name = "Yun";
    this.name = name || "Yun"; // 생성자의 매개변수를 통해서 프로퍼티와 연결
    // || "Yun" : 단축 연산을 통한 디폴트 연산
  }

  // 메서드 - 객체에 묶여서 같이 행동 -> 메서드. -> 함수와 동일.
  sayHi() {
    // this가 있다 + 클래스에 속한다 -> 나머지는 다 함수와 동일
    console.log("Hi!");
    console.log(this.name);
    console.log(this.job);
  }
}

const user1 = new User();
console.log(user1);
console.log(user1.name);
const user2 = new User("Park");
console.log(user2.name);
user2.sayHi();
