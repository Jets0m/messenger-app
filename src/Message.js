import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.scss";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = message.username === username;

  return (
    <div ref={ref} className={`message__card ${isUser && "messsage__user"}`}>
      <Typography
        color="white"
        variant="p"
        component="span"
        className={`message__span ${
          isUser ? "message__userSpan" : "message__guestSpan"
        }`}
      >
        {!isUser ? message.username : "you"}
      </Typography>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
