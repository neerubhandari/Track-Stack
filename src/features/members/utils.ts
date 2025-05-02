import { Query, type Databases } from "node-appwrite";
import { DATABASE_ID, MEMBERS_ID } from "@/config";

interface GetMemberProps {
  databases: Databases;
  userId: string;
  workspaceId: string;
}

export const getMember = async ({
  databases,
  userId,
  workspaceId,
}: GetMemberProps) => {
  if (!userId || !workspaceId) {
    throw new Error("Missing userId or workspaceId in getMember");
  }
  const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
    Query.equal("userId", userId),
    Query.equal("workspaceId", workspaceId),
  ]);

  return members.documents[0];
};
