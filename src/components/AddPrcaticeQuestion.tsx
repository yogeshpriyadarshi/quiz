import React, { useEffect, useState } from "react";
import AddQuestion from "./AddQuestion";
import axios from "axios";
import UserAuth from "./UserAuth";

export default function AddPrcaticeQuestion() {

    interface SubjectType {
  _id: string;
  Subject: string;
}
const [subject, setSubject] = useState<SubjectType | null>(null);


  const [subjectList, setSubjectList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [topic, setTopic] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [showTopic, setShowTopic] = useState<string[]>([]);

  const sub = async () => {
    try{
    const subj = await axios.get("http://localhost:7777/subject");
    setSubjectList(subj.data);
    console.log(subj);
    }catch(err){
    console.error(err);
    }
   
  };
  const top = async ()=>{
    try{
    console.log("try to fetch topic of given subject!",subject);
    const subj = await axios.get("http://localhost:7777/topic",{params: { id: subject?._id }});
    console.log(subj.data);
    if(subj?.data?.successful==true){
    setTopicList(subj?.data?.update);
    }
    }catch(err){
      console.error(err);
    }
   
  }

  useEffect(() => {
    sub();
  }, []);

  useEffect(() => {
   top();
  }, [subject]);

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
              {subjectList.map(
                (sub: { _id: string; Subject: string}) => (
                    <option key={sub?._id} value={JSON.stringify(sub)}>
                      {sub?.Subject}
                    </option>
                )
              )}
            </select>

            <label>Choose Topic: </label>
            <select
              className="bg-amber-400"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            >
              <option> Select </option>
              {topicList.map((sub: { _id: string; Topic: string}) => (
              
                  <option key={sub?._id} value={sub?.Topic}>
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
              <option value="easy">Easy</option>
              <option value="medium"> Medium </option>
              <option value="hard"> Hard </option>
            </select>
          </div>
        </div>

        <AddQuestion />

        <button> </button>
      </div>
    </>
  );
}
