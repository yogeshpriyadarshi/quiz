import React, { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import axios from "axios";
import UserAuth from "./UserAuth";
import { useSelector } from "react-redux";

export default function AddPrcaticeSet() {
  interface SubjectType {
    _id: string;
    Subject: string;
  }
  const [subject, setSubject] = useState<SubjectType | null>(null);
  const [subjectList, setSubjectList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [topic, setTopic] = useState({
    _id:""
  });
  const [level, setLevel] = useState<string>("");
  const user = useSelector((store:any)=>store.user);

  const [question, setQuestion] = useState({
    Question: "",
    OptionA: "",
    OptionB: "",
    OptionC: "",
    OptionD: "",
    CorrectAnswer: "",
  });

  const sub = async () => {
    try {
      const subj = await axios.get("http://localhost:7777/subject");
      setSubjectList(subj.data);
      console.log(subj);
    } catch (err) {
      console.error(err);
    }
  };
  const top = async () => {
    try {
      console.log("try to fetch topic of given subject!", subject);
      const subj = await axios.get("http://localhost:7777/topic", {
        params: { id: subject?._id },
      });
      console.log(subj.data);
      if (subj?.data?.successful == true) {
        setTopicList(subj?.data?.update);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sub();
  }, []);

  useEffect(() => {
    top();
  }, [subject]);

  const submitQuestion = async()=>{
   try{
         console.log("quesion here!=>",question);
         const questionSet ={
          UserId: user?._id,
          TopicId:topic?._id,
          Level:level,
          Questions:question
         }
 console.log(questionSet);

     const res = await axios.post("http://localhost:7777/addquestion",{questionSet},{withCredentials:true});
         
   }catch(err){
   console.error(err);
   }


  }

  return (
    <>
      <UserAuth />
      <div className="bg-gradient-to-bl from-red-500 to-blue-500 flex flex-col justify-center items-center min-h-screen">
        <div className="w-1/2 h-1/2 ">
          <h1> Add Practice Question </h1>
          <div>
            <label>Choose Subject: </label>
            <select
              className="bg-amber-400"
              onChange={(e) => {
                setSubject(JSON.parse(e.target.value));
                console.log(subject);
              }}
            >
              <option> Select </option>
              {subjectList.map((sub: { _id: string; Subject: string }) => (
                <option key={sub?._id} value={JSON.stringify(sub)}>
                  {sub?.Subject}
                </option>
              ))}
            </select>

            <label>Choose Topic: </label>
            <select
              className="bg-amber-400"
              onChange={(e) => {
                setTopic(JSON.parse(e.target.value));
              }}
            >
              <option> Select </option>
              {topicList.map((sub: { _id: string; Topic: string }) => (
                <option key={sub?._id} value={JSON.stringify(sub)}>
                  {" "}
                  {sub?.Topic}{" "}
                </option>
              ))}
            </select>

            <label> Level: </label>
            <select
              className="bg-amber-400"
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
              }}
            >
              <option> Select </option>
              <option value="Easy">Easy</option>
              <option value="Medium"> Medium </option>
              <option value="Hard"> Hard </option>
            </select>
          </div>
        </div>

        {/* <AddQuestion  /> */}

        <div className="w-200">
          <div className="flex flex-col">
            <label> Add question </label>
            <textarea value={question.Question} 
            onChange={(e) => {
                  setQuestion({ ...question, Question: e.target.value });
                }}
            className="bg-white m-2"> </textarea>
            <label>
              {" "}
              option 1{" "}
              <input
                value={question.OptionA}
                onChange={(e) => {
                  setQuestion({ ...question, OptionA: e.target.value });
                }}
                className="bg-white m-2 "
              />{" "}
            </label>
            <label>
              {" "}
              option 2{" "}
              <input value={question.OptionB} 
              onChange={(e) => {
                  setQuestion({ ...question, OptionB: e.target.value });
                }}
              className="bg-white m-2 " />{" "}
            </label>
            <label>
              {" "}
              option 3{" "}
              <input value={question.OptionC}
              onChange={(e) => {
                  setQuestion({ ...question, OptionC: e.target.value });
                }}
              className="bg-white m-2 " />{" "}
            </label>
            <label>
              {" "}
              option 4{" "}
              <input value={question.OptionD}
              onChange={(e) => {
                  setQuestion({ ...question, OptionD: e.target.value });
                }}
              className="bg-white m-2 " />{" "}
            </label>
             <label>
              {" "}
              option 4{" "}
              <input value={question.CorrectAnswer}
              onChange={(e) => {
                  setQuestion({ ...question, CorrectAnswer: e.target.value });
                }}
              className="bg-white m-2 " />{" "}
            </label>
          </div>
          <div> Add More Question </div>
          <button onClick={submitQuestion} > submit </button>
        </div>

        <button> </button>
      </div>
    </>
  );
}
