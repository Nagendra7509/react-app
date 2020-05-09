// import React from "react";
// import { observable, autorun, reaction, action } from "mobx";
// import { get, set, computed } from "mobx"
// import { observer } from "mobx-react";
// /*global mobx*/



// class Practice extends React.Component {


//     render() {

//         /*let message = observable({
//             title: "Foo",
//             author: {
//                 name: "Michel"
//             },
//             likes: ["John", "Sara"]
//         });*/
//         //<--------doubt--------------->
//         /*const author = message.author
//         autorun(() => {
//             console.log(author.name)
//         })
//         message.author.name = "Sara"
//         message.author = { name: "John" }*/




//         // autorun(() => {
//         //     console.log(message.likes.length);
//         // });
//         // message.likes.pop();

//         // let message = observable({ likes: ["Nag", "sdfsd"] });
//         // autorun(() => {
//         //     console.log(message.likes[3]);
//         // });
//         // message.likes.push("Jennifer");

//         // let message = observable({ likes: ["Nag", "sdfsd"] });
//         // autorun(() => {
//         //     console.log(message);
//         // });
//         // message.likes.push('hello');


//         // const twitterUrls = observable.map({
//         //John: "twitter.com/johnny"
//         // });

//         // autorun(() => {
//         //     console.log(twitterUrls.get("Sara"));
//         // });
//         // twitterUrls.set("Sara", "twitter.com/horsejs");


//         // let message = observable({
//         //     title: "Foo",
//         //     author: {
//         //         name: "Michel"
//         //     },
//         //     likes: ["John", "Sara"]
//         // });

//         // autorun(() => {
//         //     console.log(message.title, "1") // clearly, the `.title` observable is used
//         // })

//         // autorun(() => {
//         //     console.log(mobx.toJS(message), "2") // toJS creates a deep clone, and thus will read the message
//         // })

//         // autorun(() => {
//         //     console.log({ ...message }, "3") // creates a shallow clone, also using `.title` in the process
//         // })

//         // autorun(() => {
//         //     console.log(JSON.stringify(message), "4") // also reads the entire structure
//         // })



//         // function upperCaseAuthorName(author) {
//         //     const baseName = author.name;
//         //     return baseName.toUpperCase();
//         // }
//         // autorun(() => {
//         //     console.log(upperCaseAuthorName(message.author));
//         // });
//         // message.author.name = "Chesterton";

//         // autorun(() => {
//         //     setTimeout(() => console.log(message.likes.join(", ")), 10)
//         // })

//         // message.likes.push("Jennifer")

//         //Promise.resolve(56).then(console.log("1")).then(console.log).then(console.log("2"));

//         // let message = observable({
//         //     title: "Foo",
//         //     author: {
//         //         name: "Michel"
//         //     },
//         //     likes: ["John", "Sara"]
//         // });


//         // let author = message.author;

//         // //console.log(author, "jhhj");
//         // autorun(() => {
//         //     console.log(author.name);
//         // });



//         // message.author.name = "Sara";
//         // message.author = { name: "John" };
//         // //author = { name: "John" };

//         // console.log(author.name, "inside author");
//         // console.log(message.author.name, "inside message");




//         //------>doubt----->

//         // message.title = "Vamsi";

//         // autorun(() => {
//         //     console.log(mobx.toJS(message)) // toJS creates a deep clone, and thus will read the message
//         // })

//         // let message = observable({
//         //     title: "Foo",
//         //     author: {
//         //         name: "Michel"
//         //     },
//         //     likes: ["John", "Sara"],
//         // });

//         // autorun(() => {
//         //     setTimeout(() => console.log(message.likes.join(", ")))
//         // })
//         // message.likes.push("Jennifer")

//         // const twitterUrls = observable.object({
//         //     John: "twitter.com/johnny"
//         // })

//         // autorun(() => {
//         //     console.log(get(twitterUrls, "Sara")) // get can track not yet existing properties
//         // })
//         // set(twitterUrls, { Sara: "twitter.com/horsejs" })



//         // const message = observable({ title: "hello" });

//         // autorun(() => {
//         //     console.log(message.title);
//         // });

//         // message.title = "Hello world";



//         // const map = observable.map({ key: "value" })
//         // map.set("key", "new value")

//         // const list = observable([1, 2, 4])
//         // list[2] = 3

//         // const person = observable({
//         //     firstName: "Clive Staples",
//         //     lastName: "Lewis"
//         // })

//         // console.log(map, "map");
//         // console.log(list, "list");
//         // // console.log(person, "person");

//         // let numbers = observable([1, 2, 3])
//         // let sum = computed(() => numbers.reduce((a, b) => a + b, 0))
//         // let disposer = autorun(() => console.log(sum.get()), 7000)
//         // numbers.push(4)
//         // numbers.push(5)
//         // disposer()

//         // let message = observable({
//         //     title: "Foo",
//         //     author: {
//         //         name: "Michel"
//         //     },
//         //     likes: ["John", "Sara"]
//         // });

//         // autorun(() => {
//         //     console.log(message.likes[0]);
//         // });







//         //message.author.name = "fine";



//         return <h1>Hello</h1>;

//     }
// }

// export default Practice;

// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, computed, action } from "mobx";
// import { observer } from "mobx-react";
// import { autorun } from "mobx";

// @observer
// class Practice extends Component {
//     @observable firstCounter = 0;
//     @observable secondCounter = 0;
//     @observable thirdCounter = 0

//     // @computed
//     // get displayFirstCounterAndSecondCounter() {
//     //     console.log("computed value", this.thirdCounter, this.secondCounter, this.firstCounter);
//     //     return `${this.firstCounter} ${this.secondCounter} ${this.thirdCounter}`;
//     // }


//     // onChangeFirstAndSecondCount = () => {
//     //     console.log("1");
//     //     this.firstCounter = this.firstCounter + 3;
//     //     console.log("2", this.firstCounter);
//     //     this.secondCounter = this.secondCounter + 20;
//     //     console.log("3", this.secondCounter);
//     //     this.thirdCounter = this.thirdCounter + 674;
//     // }




//     render() {
//         //console.log('render called');
//         class Person {
//             @observable initial = "P";
//             @observable firstName = "John";
//             @observable lastName = "Grisham";

//             @action
//             setFirstNameLastNameAndInitialAsynchronously = async() => {
//                 this.initial = "Q";

//                 const promise = new Promise((resolve, reject) => {
//                     resolve("Success");
//                 });
//                 await promise;
//                 this.setFirstNameLastName();
//             };

//             @action.bound
//             setFirstNameLastNvcame() {
//                 this.firstName = "Jim";
//                 this.lastName = "Corte";
//             }

//             @computed
//             get fullName() {
//                 return this.initial + " " + this.firstName + " " + this.lastName;
//             }
//         }

//         const john = new Person();

//         autorun(() => {
//             console.log("autorun called", john.fullName);
//         });

//         john.setFirstNameLastNameAndInitialAsynchronously();
//         return (
//             <div>

//         <p>
//         </p>
//         <button onClick={this.onChangeFirstAndSecondCount}>
//           Change counters
//         </button>
//       </div>
//         );
//     }
// }

// export default Practice;


// import React from "react";
// import { render } from "react-dom";
// import { observable, computed, autorun, action } from "mobx";
// import { observer } from "mobx-react";

// class Person {
//     @observable firstName = "Tony";
//     @observable lastName = "Stark";

//     @computed get fullName() {
//         return this.firstName + " " + this.lastName;
//     }

//     @action.bound
//     async changeFirstNameAndLastName() {
//         let promise = new Promise((resolve, reject) => {
//             resolve({
//                 first_name: "Peter",
//                 last_name: "Parker",
//             });
//         });
//         promise.then((response) => {
//             this.firstName = response.first_name;
//             this.lastName = response.last_name;
//         });
//     }
// }

// const newPerson = new Person();

// // Reaction: log the profile info whenever it changes


// // Example React component that observes state
// const Practice = observer((props) => {
//     console.log("render ProfileView");


//     return (
//         <div>
//       <p>{props.person.fullName}</p>
//       <button onClick={props.person.changeFirstNameAndLastName}>
//         Change first name and last name
//       </button>
//     </div>
//     );
// });

// export { Practice, Person };



// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// @observer
// class Practice extends React.Component {
//     @observable parentCounter = 12;

//     @action.bound
//     onParentCounterUpdate() {
//         console.log('parent function');
//         this.parentCounter += 2;
//     }

//     render() {
//         console.log("render CounterParent");
//         return (
//             <CounterChild
//         onParentCounterUpdate={this.onParentCounterUpdate}

//       />
//         );
//     }
// }

// @observer
// class CounterChild extends React.Component {
//     @observable childCounter1 = 301;
//     @observable childCounter2 = 14;

//     @action.bound
//     onUpdate() {
//         const { onParentCounterUpdate } = this.props;
//         console.log('before parent function');
//         onParentCounterUpdate();
//         console.log('after parent function');
//         this.childCounter1 += 0;
//         this.childCounter2 -= 0;
//     }

//     render() {
//         console.log("render CounterChild");
//         //const { parentCounter } = this.props;

//         return (
//             <div>
//         <button onClick={this.onUpdate}>Update count</button>
//         <div>parentCounter: {}</div>
//         <div>childCounter1: {this.childCounter1}</div>
//         <div>childCounter2: {this.childCounter2}</div>
//       </div>
//         );
//     }
// }

// export default Practice;


import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class Practice extends React.Component {
    @observable parentCounter = 4;

    @action.bound
    onParentCounterDecrement() {
        this.parentCounter -= 1;
    }

    render() {
        console.log("render CounterParent");
        return (
            <CounterChild
        onParentCounterDecrement={this.onParentCounterDecrement}
        parentCounter={this.parentCounter}
      />
        );
    }
}


@observer
class CounterChild extends React.Component {
    @observable childCounter1 = 10;
    @observable childCounter2 = 20;

    @action.bound
    onDecrement() {
        const { onParentCounterDecrement } = this.props;

        onParentCounterDecrement();
        onParentCounterDecrement();

        this.childCounter1 -= 3;
        this.childCounter2 -= 10;
        onParentCounterDecrement();
    }

    render() {
        console.log("render CounterChild");
        const { parentCounter } = this.props;

        return (
            <div>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>parentCounter: {parentCounter}</div>
        <div>childCounter1: {this.childCounter1}</div>
        <div>childCounter2: {this.childCounter2}</div>
      </div>
        );
    }
}


export default Practice;
