import { Profile } from "../models/user/user.interface";
import { Message } from "../models/messages/message.interface";

const userList: Profile[] = [
{
    firstname:'Bhavana',
    lastname:'Shenai',
    avatar:'assets/img/avatar.png',
    email:'1622bpss@gmail.com'
},
{
    firstname:'Sahil',
    lastname:'Shenai',
    avatar:'assets/img/avatar.png',
    email:'sahilshenai@gmail.com'
},
{
    firstname:'Makarand',
    lastname:'Prabhu',
    avatar:'assets/img/avatar.png',
    email:'yash2295@gmail.com'
},
{
    firstname:'Milan',
    lastname:'Prabhu',
    avatar:'assets/img/avatar.png',
    email:'milan1095@gmail.com'
},
{
    firstname:'Mansi',
    lastname:'Prabhu',
    avatar:'assets/img/avatar.png',
    email:'mansi1159@gmail.com'
},
{
    firstname:'Sarita',
    lastname:'Shenai',
    avatar:'assets/img/avatar.png',
    email:'sarita16@gmail.com'
},
{
    firstname:'Prakash',
    lastname:'Shenai',
    avatar:'assets/img/avatar.png',
    email:'prakash0958@gmail.com'
}


];

const msgList: Message[] = [
  {
        user: userList[0], 
        date: new Date(),
        lastMessage:'hello :*'

    },
    {
        user: userList[1], 
        date: new Date(),
        lastMessage:'hello :*'

    },{
        user: userList[2], 
        date: new Date(),
        lastMessage:'hello'

    },{
        user: userList[3], 
        date: new Date(),
        lastMessage:'hello'

    },
    {
        user: userList[4], 
        date: new Date(),
        lastMessage:'hello'

    },
    {
        user: userList[5], 
        date: new Date(),
        lastMessage:'hello'

    },
    {
        user: userList[6], 
        date: new Date(),
        lastMessage:'hello'

    }
];

export const MSG_LIST = msgList;