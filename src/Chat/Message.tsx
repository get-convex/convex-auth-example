import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { error } from "console";

export function Message({
  authorName,
  author,
  viewer,
  children,
  id,
}: {
  authorName: string;
  author: Id<"users">;
  viewer: Id<"users">;
  children: ReactNode;
  id: Id<"messages">;
}) {
  const deleteMessage = useMutation(api.messages.deleteMessage);

  const handleClick = async () => {
    try {
      await deleteMessage({ id });
    } catch (error) {
      throw new Error("Can't delete");
    }
  };

  const handleDoubleClick = () => {
    handleClick()
      .then(() => console.log("message deleted"))
      .catch((error) => console.error(error));
  };

  return (
    <li
      className={cn(
        "flex flex-col text-sm",
        author === viewer ? "items-end self-end" : "items-start self-start",
      )}
    >
      <div className="mb-1 text-sm font-medium">{authorName}</div>
      <p
        className={cn(
          "rounded-xl bg-muted px-3 py-2",
          author === viewer ? "rounded-tr-none" : "rounded-tl-none",
        )}
        onDoubleClick={handleDoubleClick}
      >
        {children}
      </p>
    </li>
  );
}
