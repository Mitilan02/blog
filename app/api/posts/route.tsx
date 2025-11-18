import PostModel from "@/Models/post_model";
import connectMongo from "@/Utils/db_connector";

export async function GET() {
    try {
        await connectMongo();
        const postData = await PostModel.find({});

        return Response.json(postData);
    }
    catch (error) {
        return Response.json({ 'message': error });
    }

}