import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import React from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue } from "../Redux/Issue/Action";

const IssueCard = ({ item, projectId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerIssueDelete = () => {
    dispatch(deleteIssue(item.id));
  };
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle
            className="cursor-pointer"
            onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)}
          >
            {item.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handlerIssueDelete}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - {1} </p>
          <DropdownMenu className="w-[30rem] border border-red-400">
            <DropdownMenuTrigger>
              <Button
                className="bg-gray-900 hover:text-black text-white rounded-full"
                size="icon"
              >
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <UserList issueDetails={item} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
