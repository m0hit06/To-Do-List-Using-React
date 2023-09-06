"use client";
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Discription, setDiscription] = useState("");
  const [allTask, setAllTask] = useState([]);
  const [completedTask, setcompletedTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllTask([...allTask, { Title, Discription }]);
    setTitle("");
    setDiscription("");
  };
  // for Task to do ------------------------------------------
  const completeTask = (i) => {
    const doneTitle = allTask[i].Title;
    const doneDiscription = allTask[i].Discription;
    allTask.splice(i, 1);
    setcompletedTask([...completedTask, { doneTitle, doneDiscription }]);
  };

  const deleteTask = (i) => {
    const copyAllTask = [...allTask];
    copyAllTask.splice(i, 1);
    setAllTask(copyAllTask);
  };

  let renderTask = <h1>No task available!</h1>;
  if (allTask.length > 0) {
    renderTask = allTask.map((e, i) => {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex justify-between items-center w-2/3">
            <h4 className="mb-2 text-xl font-semibold ">{e.Title}</h4>
            <h4 className="mb-2 text-lg font-light w-1/3">{e.Discription}</h4>
          </div>
          <button
            onClick={() => {
              completeTask(i);
            }}
            className="bg-green-700 p-2 rounded mb-2 text-zinc-50"
          >
            complete
          </button>
          <button
            onClick={() => {
              deleteTask(i);
            }}
            className="bg-red-600 p-2 rounded mb-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  //for completed task----------------------------------------------------------------------
  const deleteTaskFromCompleted = (i) => {
    const copyAllTask = [...completedTask];
    copyAllTask.splice(i, 1);
    setcompletedTask(copyAllTask);
  };
  let doneTask = <h1>No task done yet!</h1>;
  if (completedTask.length > 0) {
    doneTask = completedTask.map((e, i) => {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex justify-between items-center w-2/3">
            <h4 className="mb-2 text-xl font-semibold">{e.doneTitle}</h4>
            <h4 className="mb-2 text-lg font-light w-1/3">
              {e.doneDiscription}
            </h4>
          </div>
          <button
            onClick={() => {
              deleteTaskFromCompleted(i);
            }}
            className="bg-red-600 p-2 rounded mb-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-teal-500 p-5 text-center text-3xl font-extrabold">
        My To Do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl m-5 border-4 rounded-lg px-4 py-2 border-teal-500"
          placeholder="Enter your Task"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl m-5 border-4 rounded-lg px-4 py-2 border-teal-500"
          placeholder="Enter description Here"
          value={Discription}
          onChange={(e) => {
            setDiscription(e.target.value);
          }}
        />
        <button className="bg-teal-500 px-4 py-4 m-5 rounded-lg">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-5 bg-emerald-300">
        <h1 className="text-2xl font-extrabold text-center underline mb-5">
          Task to do
        </h1>
        <div className="flex justify-between items-center w-2/3">
          <h2 className="mb-4 text-xl font-semibold ">Task</h2>
          <h2 className="mb-4 text-xl font-semibold w-1/3 ">Discription</h2>
        </div>
        <ul>{renderTask}</ul>
      </div>
      <hr />
      <div className="p-5 bg-green-500">
        <h1 className="text-2xl font-extrabold text-center underline mb-5">
          completed task
        </h1>
        <div className="flex justify-between items-center w-2/3">
          <h2 className="mb-4 text-xl font-semibold ">Task</h2>
          <h2 className="mb-4 text-xl font-semibold w-1/3">Discription</h2>
        </div>
        <ul>{doneTask}</ul>
      </div>
    </>
  );
};
export default page;
