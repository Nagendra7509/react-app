import React from "react";
import { observable, autorun } from "mobx";

/*global mobx*/


class Practice extends React.Component {


    render() {

        /*let message = observable({
            title: "Foo",
            author: {
                name: "Michel"
            },
            likes: ["John", "Sara"]
        });*/
        //<--------doubt--------------->
        /*const author = message.author
        autorun(() => {
            console.log(author.name)
        })
        message.author.name = "Sara"
        message.author = { name: "John" }*/




        // autorun(() => {
        //     console.log(message.likes.length);
        // });
        // message.likes.pop();

        // let message = observable({ likes: ["Nag", "sdfsd"] });
        // autorun(() => {
        //     console.log(message.likes[3]);
        // });
        // message.likes.push("Jennifer");

        // let message = observable({ likes: ["Nag", "sdfsd"] });
        // autorun(() => {
        //     console.log(message);
        // });
        // message.likes.push('hello');


        // const twitterUrls = observable.map({
        //John: "twitter.com/johnny"
        // });

        // autorun(() => {
        //     console.log(twitterUrls.get("Sara"));
        // });
        // twitterUrls.set("Sara", "twitter.com/horsejs");


        // let message = observable({
        //     title: "Foo",
        //     author: {
        //         name: "Michel"
        //     },
        //     likes: ["John", "Sara"]
        // });

        // autorun(() => {
        //     console.log(message.title, "1") // clearly, the `.title` observable is used
        // })

        // autorun(() => {
        //     console.log(mobx.toJS(message), "2") // toJS creates a deep clone, and thus will read the message
        // })

        // autorun(() => {
        //     console.log({ ...message }, "3") // creates a shallow clone, also using `.title` in the process
        // })

        // autorun(() => {
        //     console.log(JSON.stringify(message), "4") // also reads the entire structure
        // })

        let message = observable({
            title: "Foo",
            author: {
                name: "Michel"
            },
            likes: ["John", "Sara"]
        });

        // function upperCaseAuthorName(author) {
        //     const baseName = author.name;
        //     return baseName.toUpperCase();
        // }
        // autorun(() => {
        //     console.log(upperCaseAuthorName(message.author));
        // });
        // message.author.name = "Chesterton";

        // autorun(() => {
        //     setTimeout(() => console.log(message.likes.join(", ")), 10)
        // })
        // message.likes.push("Jennifer")

        return <h1>Hello</h1>;
    }
}

export default Practice;
