import { handleSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateBlogPost = () => {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>
          Create a new post to share with the world
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" action={handleSubmission}>
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input type="text" placeholder="Title" name="title" required />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Textarea placeholder="content" name="content" required />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Image</Label>
            <Input
              type="url"
              placeholder="Image URL"
              name="imageURL"
              required
            />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlogPost;
