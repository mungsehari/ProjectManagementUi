import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
import { fetchProjectsById } from "../Redux/Project/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector((store) => store);
  const handlerProjectInvitation = () => {
    console.log("invitation");
  };
  useEffect(() => {
    dispatch(fetchProjectsById(id));
  }, [id]);
  return (
    <>
      <div className="mt-5 lg:px-5 ">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                {project.projectDetaills?.name}
              </h1>
              <div className="space-y-5 pb-10 text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl ">
                  {project.projectDetaills?.description}
                </p>
                <div className="flex">
                  <p className="w-36">Project Lead :</p>
                  <p>{project.projectDetaills?.owner.fullName} </p>
                </div>
                <div className="flex">
                  <p className="w-36">Members : </p>
                  <div className="flex items-center gap-2">
                    {project.projectDetaills?.team.map((item) => (
                      <Avatar className="cursor-pointer" key={item}>
                        <AvatarFallback>{item.fullName[0]} </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          onClick={handlerProjectInvitation}
                          size="sm"
                          variant="outline"
                          className="ml-2"
                        >
                          <span>invite</span>
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>Inite User</DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex">
                  <p className="w-36">Category : </p>
                  <p>{project.projectDetaills?.category} </p>
                </div>
                <div className="flex">
                  <p className="w-36">Staus : </p>
                  <Badge>In_Progress</Badge>
                </div>
              </div>
              <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="Todo List" />
                  <IssueList status="in_progress" title="In Progress" />
                  <IssueList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-md sticky right-5 top-10 ">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
